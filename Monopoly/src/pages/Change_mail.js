import React from 'react'
import { Formik, useField } from 'formik'
import { StyleSheet, Button, View } from 'react-native'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import { changeMailValidationSchema } from '../validationSchemas/changeMail'

const initialValues = {
  email: ''
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

export default function changeUserPage(){
  return <Formik validationSchema={changeMailValidationSchema} initialValues={initialValues} 
  onSubmit={values => console.log(values)}>
  {({handleChange, handleSubmit, values}) =>{
    return (
      <View style={styles.form}>
        <FormikInputValue 
        name='email'
        placeholder='mail'
        />

        <Button
          color= '#6647e0'
          title='Guardar'
          onPress={handleSubmit} 
        />
      </View>
    )
  }}
  </Formik>
}