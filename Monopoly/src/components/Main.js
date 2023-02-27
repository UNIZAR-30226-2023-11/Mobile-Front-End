import React from "react";
import {Text, View, Button,Alert } from 'react-native';
import Constants from 'expo-constants';


const Main = () => {
    return (
        <View style={{marginTop:Constants.statusBarHeight, flexGrow:1}}>
            <Text>Hola Mdo</Text>
            <Button
                title='A ver si funciona esto'
                onPress={()=> Alert.alert("PULSADO")}
            />
        </View>
    );
};

export default Main
  