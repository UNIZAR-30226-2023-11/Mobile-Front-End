import React, { useEffect } from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import { settingsMailValidationSchema } from '../validationSchemas/settingsEmail'
import { SocketContext } from '../components/SocketContext'

import { updateCorreoUsuario } from '../url/users'

const initialValues = {
    email: '',
  }

const Separator = () => <View style={styles.separator} />;

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        margin: '10%', 
        marginLeft: '1%',
        marginTop: '5%',
        marginBottom: '1%',
        color: "black"
    },
    correo: {
      fontSize: 18,
      fontWeight: '300',
      marginLeft: '2%',
      marginTop: '0%',
      marginBottom: '2%',
      color: "black"
  },
    button: {
        marginTop: 12,
        marginBottom: 12,
        marginLeft: 20,
        marginRight: 20,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5
      },
      form: {
        margin: 12,
        marginTop: 100,
        marginBottom: 20
      }
});

export default function SettingsMailScreen({ route, navigation }){

  // const user = route.params.user;
  const email = route.params.email
  // console.log(user, email);
  const socket = React.useContext(SocketContext);

  return (
    <Formik
      validationSchema={settingsMailValidationSchema}
      initialValues={initialValues} 
      onSubmit={(values) => {

        socket.emit('updateCorreo', {
                  email: values.email,
                  socketId: socket.id
                },
                (ack) => { 
                  console.log('Server acknowledged:', ack);
                  if(ack.cod == 0){
                    Alert.alert('Correo actualizado correctamente');
                    navigation.navigate('Perfil');
                  }
                  else if(ack.cod != 2){
                    alert(ack.msg);
                  }
                  })
  
        // const response2 = fetch(updateCorreoUsuario, {
        //   method: 'PUT',
        //   headers: {'Content-Type': 'application/json'},
        //   body: JSON.stringify({username: user , email: values.email})
        // })
        // .then((response) => {
        //   if(response.status !== 200){
        //     throw new Error('Error de estado: '+ response.status);
        //   } else {
        //     Alert.alert('Correo actualizado');
        //     navigation.navigate('Perfil', {user: user});
        //   }
        // })
        // .catch((error) => {
        //   //Error
        //   // alert(JSON.parse(JSON.stringify(error)));
        //   console.error(error);
        //   console.log("Algo ha ido mal.")
        // });
      }} >

    {({handleChange, handleSubmit, values}) =>{
      return (
        <View style={styles.form}>

            <Text style={styles.text}>Correo electronico actual </Text>
            <Text style={styles.correo}>{email}</Text>

            <Text style={styles.text}>Cambiar correo electronico</Text>
            <FormikInputValue 
            name='email'
            placeholder='Nuevo correo electronico'
            />

            <Button
                color='#6647e0'
                title='Guardar' 
                onPress={handleSubmit}
            />
        </View>

    )
}} 
 </Formik>
  )
}
