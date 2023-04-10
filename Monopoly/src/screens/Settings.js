import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../components/StyledButton';
import { deleteUsuario } from '../url/users'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    vistaBoton: {
        width: '100%', 
        marginTop: '5%', 
        marginRight: '3%'
    }
});


export default function SettingsScreen({ route, navigation }){

    const user = route.params.user;
    console.log(user);

    return (
        
        <View style={styles.container}>

            <View style={[styles.vistaBoton,{marginTop:'30%'}]}>
            <StyledButton
                lightblue
                title='Cambiar nombre de usuario' 
                onPress={() => navigation.navigate('SettingsUser', {user: user})}
            />
            </View>

            <View style={styles.vistaBoton}>
            <StyledButton
                lightblue
                title='Cambiar correo electrónico' 
                onPress={() => navigation.navigate('SettingsMail', {user: user})}
            />
            </View>

            <View style={styles.vistaBoton}>
            <StyledButton
                lightblue
                title='Cambiar contraseña' 
                onPress={() => navigation.navigate('SettingsPassword', {user: user})}
            />
            </View>

            <View style={styles.vistaBoton}>
            <StyledButton
                lightblue
                title='Cerrar sesion' 
                onPress={() => navigation.navigate('Index')}
            />
            </View>

            <View style={styles.vistaBoton}>
            <StyledButton
                lightblue
                title='Eliminar cuenta' 
                onPress={() => {
                    // Manejo del envío del formulario
                    // Muestra una alerta después de enviar el formulario ok
                    console.log(user);
                
                    const response =  fetch(deleteUsuario, {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({username: user})
                    })
                    .then((response) => {
                    if(response.status != 200){
                        throw new Error('Error de estado: '+ response.status);
                    }
                    else{
                        Alert.alert('Usuario eliminado');
                        console.log(response.json);
                        navigation.navigate('Index');
                    }})
                    .catch((error) => {
                        //Error
                        alert(JSON.stringify(error));
                        console.error(error);
                        console.log("Algo ha ido mal.")
                    });
                    }}
            />
            </View>
 
        </View>

    )
}
