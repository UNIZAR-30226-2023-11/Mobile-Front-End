import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { deleteUsuario } from '../url/users'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    vistaBoton: {
        width: '90%', 
        marginTop: '5%', 
        marginLeft: '5%', 
        marginRight: '3%'
    }
});


export default function SettingsPage(){
    const navigation = useNavigation();
    return (
        
        <View style={styles.container}>

            <View style={{ width: '90%', height: '6%', marginTop: '50%', marginLeft: '5%', marginRight: '3%'}}>
            <Button
                color='#6647e0'
                title='Cambiar nombre de usuario' 
                onPress={() => navigation.navigate('SettingsUser')}
            />
            </View>

            <View style={styles.vistaBoton}>
            <Button 
                color='#6647e0'
                title='Cambiar correo electrónico' 
                onPress={() => navigation.navigate('SettingsMail')}
            />
            </View>

            <View style={styles.vistaBoton}>
            <Button
                color='#6647e0'
                title='Cambiar contraseña' 
                onPress={() => navigation.navigate('SettingsPassword')}
            />
            </View>

            <View style={styles.vistaBoton}>
            <Button
                color='#6647e0'
                title='Cerrar sesion' 
                onPress={() => navigation.navigate('SignIn')}
            />
            </View>

            <View style={styles.vistaBoton}>
            <Button
                color='#6647e0'
                title='Eliminar cuenta' 
                onPress={() => navigation.navigate('SignIn')}
            />
            </View>
 
        </View>

    )
}
