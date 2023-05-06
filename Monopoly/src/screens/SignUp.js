import React from 'react'
import { Formik, useField } from 'formik'
import { StyleSheet, Button, View, TouchableOpacity } from 'react-native'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import { signinValidationSchema } from '../validationSchemas/signin'
import CryptoJS from 'crypto-js';
import { SocketContext } from '../components/socketContext'

const initialValues = {
  username:'',
  email: '',
  password:'',
  confirm_password: '',
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
  login:{
    flex:1, 
    flexDirection:'row', 
    justifyContent:'center',
    marginTop:'10%'
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

export default function SignUpScreen({navigation, route}){

  const socket = React.useContext(SocketContext);
  const perfil = route.params.perfil
 
  return <Formik validationSchema={signinValidationSchema} initialValues={initialValues} 
    onSubmit={values => {
    const hashedPassword = CryptoJS.SHA512(values.password).toString();
    const hashedConfirmPassword = CryptoJS.SHA512(values.confirm_password).toString();
    console.log("emitiendo socket ...");
     socket.emit('register', {
                  username: values.username,
                  email: values.email, 
                  password: hashedPassword,
                  confirm_password: hashedConfirmPassword,
                  socketId: socket.id
                },
                (ack) => { 
                  console.log('Server acknowledged:', ack);
                  if(ack.cod == 0){
                    if(perfil){
                      navigation.navigate('Profile');
                    }else{
                      navigation.navigate('Home', {loggedIn: true});
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
        placeholder='Username' 
        />
        <FormikInputValue 
        name='email'
        placeholder='E-mail' 
        />
        <FormikInputValue 
        name='password'
        placeholder='Contraseña'
        secureTextEntry 
        />
        <FormikInputValue 
        name='confirm_password'
        placeholder='Repite la contraseña'
        secureTextEntry 
        />
        <Button
            color='#CFA8FC'
            title='Registrarse' 
            onPress={handleSubmit} 
        />
        <View style={styles.login}>
          <StyledText medium>¿Ya tienes cuenta? </StyledText>
          <TouchableOpacity onPress={() => navigation.navigate('LogIn',{perfil: perfil})}>
            <StyledText medium blue>Iniciar Sesión</StyledText>
          </TouchableOpacity>
      </View>
      </View>
      </View>
    )
  }}
  </Formik>
}