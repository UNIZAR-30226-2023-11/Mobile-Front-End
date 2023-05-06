import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../components/StyledButton';
import { SocketContext } from '../components/socketContext'
import { deleteUsuario, devolverCorreoUsuario } from '../url/users'

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

    const socket = React.useContext(SocketContext);

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
                onPress={() => {
                    const response =  fetch(devolverCorreoUsuario, {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({username: user})
                      })
                      .then((response) => {
                        if(response.status != 200){
                          throw new Error('Error de estado: '+ response.status);
                        } else {
                          return response.json(); // devuelve el contenido de la respuesta como un objeto JSON
                        }
                      }) 
                      .then((data) => {
                        // actualiza el estado con el correo electrónico obtenido de la respuesta
                        console.log(data.email);
                        navigation.navigate('SettingsMail', {user: user, email: data.email});
                      })
                      .catch((error) => {
                        //Error
                        alert(error);
                        //alert(JSON.stringify(error));
                        console.error(error);
                        console.log("Algo ha ido mal.")
                      });}}
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

                    socket.emit('deleteUser', {
                                username: user,
                                socketId: socket.id
                                });

                    navigation.navigate('Index');
                
                    // const response =  fetch(deleteUsuario, {
                    // method: 'DELETE',
                    // headers: {'Content-Type': 'application/json'},
                    // body: JSON.stringify({username: user})
                    // })
                    // .then((response) => {
                    // if(response.status != 200){
                    //     throw new Error('Error de estado: '+ response.status);
                    // }
                    // else{
                    //     Alert.alert('Usuario eliminado');
                    //     console.log(response.json);
                    //     navigation.navigate('Index');
                    // }})
                    // .catch((error) => {
                    //     //Error
                    //     alert(JSON.stringify(error));
                    //     console.error(error);
                    //     console.log("Algo ha ido mal.")
                    // });
                    }}
            />
            </View>
 
        </View>

    )
}
