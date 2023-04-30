import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Select, NativeBaseProvider, ScrollView  } from "native-base";
import StyledText  from "../components/StyledText";
import StyledButton from "../components/StyledButton";

const styles = StyleSheet.create({
    titulo:{
        marginTop:'10%',
        marginLeft:'35%',
        flex:1,
    },
    boxjugadores: {
        flex:6,
        justifyContent:'flex-start',
        marginLeft:'10%',
        width: '80%',
        height: '50%',
        borderColor:'#000000',
        borderWidth: 1
    }
})

export default function CrearSalaScreen({ route, navigation }) {

    const user = route.params.user;
    const idPartida = route.params.idPartida;
    console.log(user, idPartida);

    return (
        <NativeBaseProvider>
        <View style={{flex:1, flexDirection:'column'}}>
            <StyledText style={styles.titulo} big bold>Partida {idPartida}</StyledText>
            <View style={{marginTop:'8%', flex:1, flexDirection:'row', justifyContent: 'center'}}>
                <StyledText style={{justifyContent: 'center', marginLeft:'8%', marginTop:'3%'}}>Esperando a que el anfitrión inicie la partida.</StyledText>
                <View style={{marginLeft:'7%'}}>
                </View>

            </View>
            <StyledText style={styles.titulo} big bold>JUGADORES</StyledText>
            <View style={styles.boxjugadores}>
            <ScrollView>
            <Text>
            {user}
            </Text>
            </ScrollView>
            </View>
            <View style={{flex:1}}>
                <StyledButton
                lightblue
                title="Ir a la sala"
                onPress={() => {navigation.navigate('Tablero', {user: user, idPartida: idPartida})}}
                />
            </View>
        </View>
        </NativeBaseProvider>
    );
}