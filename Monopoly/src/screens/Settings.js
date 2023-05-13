import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../components/StyledButton';
import { SocketContext } from '../components/SocketContext'
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

    const {socket, loggedIn, setLoggedIn} = React.useContext(SocketContext);

    // const user = route.params.user;
    // console.log(user);


    return (
        
        <View style={styles.container}>

            <View style={[styles.vistaBoton,{marginTop:'30%'}]}>
            <StyledButton
                lightblue
                title='Cambiar nombre de usuario' 
                onPress={() => navigation.navigate('SettingsUser')}
            />
            </View>

            <View style={styles.vistaBoton}>
            <StyledButton
                lightblue
                title='Cambiar correo electrónico' 
                onPress={() => {
                    socket.emit('infoUsuario',{
                                socketId: socket.id
                            }, 
                            (ack) => {
                            console.log('Server acknowledged:', ack);
                            if(ack.cod == 0){
                                navigation.navigate('SettingsMail',{email: ack.msg.correo});
                            }
                            else if(ack.cod != 2){
                            alert(ack.msg);
                            }
                            });

                    // const response =  fetch(devolverCorreoUsuario, {
                    //     method: 'POST',
                    //     headers: {'Content-Type': 'application/json'},
                    //     body: JSON.stringify()
                    //   })
                    //   .then((response) => {
                    //     if(response.status != 200){
                    //       throw new Error('Error de estado: '+ response.status);
                    //     } else {
                    //       return response.json(); // devuelve el contenido de la respuesta como un objeto JSON
                    //     }
                    //   }) 
                    //   .then((data) => {
                    //     // actualiza el estado con el correo electrónico obtenido de la respuesta
                    //     console.log(data.email);
                    //   })
                    //   .catch((error) => {
                    //     //Error
                    //     alert(error);
                    //     //alert(JSON.stringify(error));
                    //     console.error(error);
                    //     console.log("Algo ha ido mal.")
                    //   });
                    }}
            />
            </View>

            <View style={styles.vistaBoton}>
            <StyledButton
                lightblue
                title='Cambiar contraseña' 
                onPress={() => navigation.navigate('SettingsPassword',)}
            />
            </View>

            <View style={styles.vistaBoton}>
            <StyledButton
                lightblue
                title='Cerrar sesion' 
                onPress={() => {setLoggedIn(false); navigation.navigate('Index');}}
            />
            </View>

            <View style={styles.vistaBoton}>
            <StyledButton
                lightblue
                title='Eliminar cuenta' 
                onPress={() => {
                    // console.log(user);
                    socket.emit('deleteUser', {
                                socketId: socket.id
                                },
                                (ack) => { 
                            console.log('Server acknowledged:', ack);
                            if(ack.cod == 0){
                                navigation.navigate('Index');
                            }
                            else if(ack.cod != 2){
                                alert(ack.msg);
                            }
                            });
                    }}
            />
            </View>
 
        </View>

    )
}
