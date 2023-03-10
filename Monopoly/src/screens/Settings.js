import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
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

            <View style={{ width: '90%', marginTop: '5%', marginLeft: '5%', marginRight: '3%'}}>
            <Button 
                color='#6647e0'
                title='Cambiar correo electrónico' 
                onPress={() => navigation.navigate('SettingsMail')}
            />
            </View>

            <View style={{ width: '90%', marginTop: '5%', marginLeft: '5%', marginRight: '3%'}}>
            <Button
                color='#6647e0'
                title='Cambiar contraseña' 
                onPress={() => navigation.navigate('SettingsPassword')}
            />
            </View>

            
        </View>

    )
}