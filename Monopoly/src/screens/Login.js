import React, { useEffect } from 'react'
import { Formik, useField } from 'formik'
import { StyleSheet, Button, View, TouchableOpacity, Modal, Text } from 'react-native'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import { loginValidationSchema } from '../validationSchemas/login'
import CryptoJS from 'crypto-js'
import { SocketContext } from '../components/SocketContext'
import StyledButton from '../components/StyledButton'

const initialValues = {
  username: '',
  password:''
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  },
  form: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    margin: 12,
    marginTop: 100,
    marginBottom: 20
  },
  registro:{
    flex:1, 
    flexDirection:'row', 
    justifyContent:'center',
    marginTop:'10%'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
},
modalView: {
    flex:0.9,
    flexDirection:'column',
    marginTop: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 300,
    height:500,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 2,
    }
},
modalText: {
    flex:0.2,
    fontSize: 20,
    marginTop:'5%',
    textAlign: 'center',
    color: '#000',
},
carta:{
    flex:1.8
},
botones:{
    flex:0.52,
    marginTop:'5%',
    flexDirection:'row', 
    justifyContent:'flex-start'
},
boton:{
    flex:2,
    justifyContent:'flex-start',
    height:'60%',
    marginLeft:'2%', 
    marginRight:'2%',
    marginBottom:'16%'
}
})

const FormikInputValue =({ name, ...props}) => {
  const [field, meta, helpers] = useField(name);
  
  return (
    <>
    <StyledTextInput
      error={meta.error} 
      value={field.value} 
      onChangeText={value => helpers.setValue(value)}
      {... props}
    />
    {meta.error && <StyledText error style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

export default function LogInScreen({navigation, route}){

  const {socket, setLoggedIn} = React.useContext(SocketContext);

  const perfil = route.params.perfil;

  const [modalPartidaActivaVisible, setModalPartidaActivaVisible] = React.useState(false);

  return (
    <View style={{flex:1}}>
     <Formik validationSchema={loginValidationSchema} initialValues={initialValues} 
  onSubmit={values => {
     const hashedPassword = CryptoJS.SHA512(values.password).toString();
     console.log("emitiendo socket ...", socket.id);
     socket.emit('login', {
                  username: values.username,
                  password: hashedPassword,
                  socketId: socket.id
                },
                (ack) => { 
                  console.log('Server acknowledged:', ack);
                  if(ack.cod == 0){
                    if(perfil){
                      navigation.navigate('Perfil');
                    }else{
                      setLoggedIn(true);
                      if(ack.msg.id == 0){
                        navigation.navigate('Home');
                      }
                      else{
                        setModalPartidaActivaVisible(true);
                        
                      }
                    }
                  }
                  else if(ack.cod != 2){
                    alert(ack.msg);
                  }
                  })
   }}>

  {({handleChange, handleSubmit, values}) =>{
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
      <View style={styles.form}>
        <FormikInputValue 
        name='username'
        placeholder='Usuario' 
        />
        <FormikInputValue 
        name='password'
        placeholder='Contraseña'
        secureTextEntry 
        />
        <Button
          color= '#CFA8FC'
          title='Iniciar sesión'
          onPress={handleSubmit} 
        />
        <View style={styles.registro}>
          <StyledText medium>No tienes cuenta? </StyledText>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp', {perfil: perfil})}>
            <StyledText medium blue>Registrarse</StyledText>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    )
  }}
  </Formik>
  <Modal
        animationType="slide"
        visible={modalPartidaActivaVisible}
        onRequestClose={() => {setModalPartidaActivaVisible({modalPartidaActivaVisible: !modalPartidaActivaVisible});navigation.navigate('Home');}}
        transparent={true}
        props>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>
                {`Tiene una partida en juego.\n
¿Desea unirse?`}
                </Text>
                <View style={styles.botones}>
                    <StyledButton
                        style={styles.boton}
                        title="Cancelar"
                        onPress={() => {setModalPartidaActivaVisible({modalPartidaActivaVisible: !modalPartidaActivaVisible});navigation.navigate('Home');}}
                        purple
                    />
                    <StyledButton
                        style={styles.boton}
                        title="Unirse"
                        onPress={() => {
                            console.log("aumentando créditos");
                            socket.emit('infoPartida',{socketId: socket.id}
                            ,(ack) =>{
                              if(ack.cod == 0){
                                navigation.navigate('Tablero', 
                                {user: values.username, 
                                idPartida: ack.id, 
                                nombreJugadores: ack.nombreJugadores,
                                dineroJugadores: ack.dineroJugadores,
                                posicionJugadores: ack.posicionJugadores})
                              }
                              else if(ack.cod == 2){
                                alert("Se ha producido un error. Por favor, vuelva a iniciar sesión");
                              }
                            })
                        }}
                        purple
                    />
                </View>
            </View>
        </View>
        </Modal>
  </View> )
}