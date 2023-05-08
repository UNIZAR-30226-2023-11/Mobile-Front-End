import React, {useEffect, useCallback} from "react";
import { View, StyleSheet, Text } from "react-native";
import { Select, NativeBaseProvider, ScrollView  } from "native-base";
import StyledText  from "../components/StyledText";
import StyledButton from "../components/StyledButton";

import { listaJugadores } from "../url/partida";
import { SocketContext } from "../components/SocketContext";

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
        marginBottom: '20%',
        width: '80%',
        height: '50%',
        borderColor:'#000000',
        borderWidth: 1
    }
})

export default function EsperaUnirseScreen({ route, navigation }) {

    // const user = route.params.user;
    const idPartida = route.params.idPartida;
    // console.log(user, idPartida);

    const socket = React.useContext(SocketContext);
    // const [detenido, setDetenido] = React.useState(true);
    const [jugadores, setJugadores] = React.useState([""]);

    useEffect(()=>{
        socket.on('esperaJugadores', (mensaje) => {
            console.log('Mensaje recibido: ' + mensaje);
            // const subcadenas = mensaje.split(',');
            // setJugadores(subcadenas);
        });
    },[])

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
            {jugadores.map((jugador, i) =>(
                <Text key={i}>{jugador}</Text>
            ))}
            </ScrollView>
            </View>
        </View>
        </NativeBaseProvider>
    );
}