import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native'

import ChangeUsernamePage from './src/pages/Change_username.js';
import ChangeMailPage from './src/pages/Change_mail.js';
import ChangePasswordPage from './src/pages/ChangePassword.js';

const Separator = () => <View style={styles.separator} />;

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        margin: 12, 
        marginLeft: 80,
        marginTop: 20,
        marginBottom: 20,
        color: "white"
    },
    button: {
        marginTop: 12,
        marginBottom: 12,
        marginLeft: 20,
        marginRight: 20,
    },
});

export default function SettingsPage(){
    return (
    <NavigationContainer>
    <SafeAreaView style={styles.container}>
        <View>

        <Text style={styles.text}>
            @nombre_de_usuario
        </Text>

        <View style={styles.button}>
        <Button 
            color='#6647e0'
            title="Cambiar nombre de usuario"
            onPress={() => navigation.navigate('ChangeUsernamePage')}
        />
        </View>

        <View style={styles.button}>
        <Button
            color='#6647e0'
            title="Cambiar correo electronico"
            onPress={() => navigation.navigate('ChangeMailPage')}
        />
        </View>

        <View style={styles.button}>
        <Button
            color='#6647e0'
            title="Cambiar contraseña"
            onPress={() => navigation.navigate('ChangePasswordPage')}
        />
        </View>

        <View style={styles.button}>
        <Button
            color='#6647e0'
            title="Cerrar sesion"
            onPress={() => navigation.navigate('HomePage')}
        />
        </View>
        
        </View>
        </SafeAreaView>
        </NavigationContainer>
    );
};  


