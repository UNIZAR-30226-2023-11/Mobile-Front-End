import React from 'react'
import { Formik, useField } from 'formik'
import { StyleSheet, Button, View } from 'react-native'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import { signinValidationSchema } from '../validationSchemas/signin'

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

export default function SignInScreen({navigation}){
  return <Formik validationSchema={signinValidationSchema} initialValues={initialValues} 
  onSubmit={() => navigation.navigate('Home')}>
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
      </View>
    )
  }}
  </Formik>
}