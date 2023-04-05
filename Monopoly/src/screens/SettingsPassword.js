import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import { settingsPasswordValidationSchema } from '../validationSchemas/settingsPassword'

import { updatePassword } from '../url/users'

//confirmar los campos con backend que campos son
const initialValues = {
    newpassword:'',
    confirm_password:''
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

export default function SettingsPasswordScreen({ route, navigation }){

  const user = route.params.user;
  console.log(user);

    return <Formik validationSchema={settingsPasswordValidationSchema} initialValues={initialValues} 
    onSubmit={(values) => {
      // Manejo del envío del formulario
      // Muestra una alerta después de enviar el formulario ok
      console.log(user, values);
  
        const response =  fetch(updatePassword, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: user , password: values.newpassword, confirm_password: values.confirm_password})
        })
        .then((response) => {
          if(response.status === 200){
            Alert.alert('Contraseña actualizada');
            console.log(response.json);
            navigation.navigate('Perfil', {user: user});
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
            <Text style={styles.text}>Cambiar contraseña</Text>

            <FormikInputValue 
            name='newpassword'
            placeholder='Nueva contraseña'
            secureTextEntry 
            />

            <FormikInputValue 
            name='confirm_password'
            placeholder='Repite la nueva contraseña'
            secureTextEntry 
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

}
