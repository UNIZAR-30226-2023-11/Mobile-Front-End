import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import { settingsMailValidationSchema } from '../validationSchemas/settingsEmail'

const initialValues = {
    email: '',
  }

const Separator = () => <View style={styles.separator} />;

function MyButton() {
  const handleSubmit = () => {
    // Manejo del envío del formulario
    // Muestra una alerta después de enviar el formulario
    Alert.alert('Correo actualizada');
  };
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

export default function SettingsMail(){
    return <Formik validationSchema={settingsMailValidationSchema} initialValues={initialValues} 
    onSubmit={values => console.log(values)}>
    {({handleChange, handleSubmit, values}) =>{
      return (
        <View style={styles.form}>

            <Text style={styles.text}>Correo electronico actual </Text>
            <Text style={styles.correo}>juan@monopoly.es </Text>

            <Text style={styles.text}>Cambiar correo electronico</Text>
            <FormikInputValue 
            name='email'
            placeholder='Nuevo correo electronico'
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