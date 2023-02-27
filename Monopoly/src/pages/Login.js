import React from 'react'
import { Formik, useField } from 'formik'
import { StyleSheet, Button, View } from 'react-native'
import StyledTextInput from '../components/StyledTextInput'

const initialValues = {
  email: '',
  password:''
}

const styles = StyleSheet.create({
  form: {
    margin: 12
  }
})

const FormikInputValue =({ name, ... props}) => {
  const [field, meta, helpers] = useField(name);
  
  return (
    <StyledTextInput 
      value={field.value} 
      onChangeText={value => helpers.setValue(value)}
      {... props}
    />
  )
}

const validate = values =>{
  const errors = {}

  if(!values.email){
    errors.email = 'Email is required'
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = "Invalid email adress"
  }

  console.log(errors)

  return errors
}

export default function LogInPage(){
  return <Formik validate={validate} initialValues={initialValues} 
  onSubmit={values => console.log(values)}>
  {({handleChange, handleSubmit, values}) =>{
    return (
      <View style={styles.form}>
        <FormikInputValue 
        name='email'
        placeholder='E-mail' 
        />
        <FormikInputValue 
        name='password'
        placeholder='Password'
        secureTextEntry 
        />
        <Button 
          onPress={handleSubmit} 
          title='Log In'></Button>
      </View>
    )
  }}
  </Formik>
}