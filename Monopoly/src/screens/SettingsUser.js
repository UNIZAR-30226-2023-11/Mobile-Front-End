import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import { settingsUserValidationSchema } from '../validationSchemas/settingsUser'

import { updateUsuario } from '../url/users'

const Separator = () => <View style={styles.separator} />;

const initialValues = {
  newusername: ''
}

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

export default function SettingsUserScreen({ route, navigation }){

  const user = route.params.user;
  console.log(user);
  
  return <Formik validationSchema={settingsUserValidationSchema} 
    initialValues={initialValues}
    onSubmit={values => {
      // Manejo del envío del formulario
      // Muestra una alerta después de enviar el formulario ok
      console.log(values);
  
        const response =  fetch(updateUsuario, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: user, newusername: values.newusername})
        })
        .then((response) => {
          if(response.status === 200){
            Alert.alert('Usuario actualizado');
            console.log(response.json);
            navigation.navigate('Perfil', {user: values.newusername});
          }else {
              console.log(response.status);
              console.log(response.json);
          }})
      .catch((error) => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
        console.log("Algo ha ido mal.")
      });
    }}>

    {({handleChange, handleSubmit, values}) =>{
      return (
        <View style={styles.form}>

            <Text style={styles.text}>Nombre de usuario actual </Text>
            <Text style={styles.correo}>{user}</Text>

            <Text style={styles.text}>Cambiar nombre</Text>
            <FormikInputValue 
            name='newusername'
            placeholder='Nuevo nombre de usuario'
            />

            <Button
                color='#6647e0'
                title='Guardar'
                onPress={handleSubmit}
            />

        </View>
      )
    }
  }
 </Formik> 
}
