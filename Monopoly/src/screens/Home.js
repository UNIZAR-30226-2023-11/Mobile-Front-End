import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import StyledButton from "../components/StyledButton";
import StyledTextInput from "../components/StyledTextInput";


const styles = StyleSheet.create({
    pantalla: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
    icon:{
        position:'absolute',
        top:'3%',
        right:'5%'
    },
    header: {
        height: '20%'
    },
    nickname: {
        height: '7%',
        width: '70%',
        textAlign: 'center',
        marginLeft: 50,
        marginRight: 50,   
    },
});


export default function HomeScreen({navigation}){

    const [nickname, setNickname] = React.useState("");

    return(
        <View style={styles.pantalla}>
        <FontAwesome5 name="user-alt" size={28} color="black" style={styles.icon} />
        <View style={styles.header}><Text>HEADER</Text></View>
            <StyledTextInput style={styles.nickname}
                placeholder="Ingresa tu nickname"
                onChangeText={setNickname}
                value={nickname}
            />
            <StyledButton
                homeScreen
                title="Crear sala pública"
                onPress={() => console.log(nickname)}
            />
            <StyledButton
                homeScreen
                title="Crear sala privada"
                onPress={() => console.log(nickname)}
            />
            <StyledButton
                homeScreen
                title="Reglas"
                onPress={() => console.log(nickname)}
            />
            <StyledButton
                homeScreen
                title="Sobre nosotros"
                onPress={() => console.log(nickname)}
            />
        </View>
    );
};