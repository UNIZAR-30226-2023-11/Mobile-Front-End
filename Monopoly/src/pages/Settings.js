import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => <View style={styles.separator} />;

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
    <SafeAreaView style={styles.container}>
        <View>

        <Text style={styles.text}>
            @nombre_de_usuario
        </Text>

        <View style={styles.button}>
        <Button 
            color='#6647e0'
            title="Cambiar nombre de usuario"
            onPress={() => Alert.alert('Pantalla cambiar nombre')}
        />
        </View>

        <View style={styles.button}>
        <Button
            color='#6647e0'
            title="Cambiar correo electronico"
            onPress={() => Alert.alert('Pantalla cambiar correo')}
        />
        </View>

        <View style={styles.button}>
        <Button
            color='#6647e0'
            title="Cambiar contraseña"
            onPress={() => Alert.alert('Pantalla cambiar contraseña')}
        />
        </View>

        <View style={styles.button}>
        <Button
            color='#6647e0'
            title="Cerrar sesion"
            onPress={() => Alert.alert('Pantalla cerrar sesion')}
        />
        </View>
        
        </View>
        </SafeAreaView>
    );
};  


