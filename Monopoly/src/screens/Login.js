import React from 'react'
import { Formik, useField } from 'formik'
import { StyleSheet, Button, View } from 'react-native'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import { loginValidationSchema } from '../validationSchemas/login'

import { comprobarUsuario } from '../url/users'

const initialValues = {
  email: '',
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
    margin: 12,
    marginTop: 100,
    marginBottom: 20
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

export default function LogInScreen({navigation}){
  return <Formik validationSchema={loginValidationSchema} initialValues={initialValues} 
  onSubmit={values => {
    const response =  fetch(comprobarUsuario, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(values)
    })
    .then((response) => {
      if(response.status === 201){
        console.log(response.json);
        navigation.navigate('Home'); 
      }else {
          console.log("SOMETHING WENT WRONG");
      }})
  .catch((error) => {
    //Error
    alert(JSON.stringify(error));
    console.error(error);
  });
  }}>

  {({handleChange, handleSubmit, values}) =>{
    return (
      <View style={styles.form}>
        <FormikInputValue 
        name='email'
        placeholder='E-mail' 
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
      </View>
    )
  }}
  </Formik>
}