import React, {useEffect, useCallback} from "react";
import { View, StyleSheet, Text } from "react-native";
import { NativeBaseProvider, ScrollView  } from "native-base";
import StyledText  from "../components/StyledText";
import { useIsFocused } from '@react-navigation/native';

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
    },
    jugadores:{
        fontSize: 20,
        marginTop:'2%',
        textAlign: 'center',
        marginRight: '4%',
    }
})

export default function EsperaUnirseScreen({ route, navigation }) {

    const idPartida = route.params.idPartida;
    const {socket} = React.useContext(SocketContext);
    const [jugadores, setJugadores] = React.useState(route.params.jugadores);

    useEffect(()=>{
        
        function handleEsperaJugadoresSalaEspera(mensaje){
            console.log('Mensaje recibido espera jugadores - espera unirse sala: ' + mensaje);
            const mensajeCadena = mensaje.toString();
            const subcadenas = mensajeCadena.split(",");
            setJugadores(subcadenas);
        }
        
        function handleComenzarPartidaSalaEspera(mensaje){ 
            console.log("Mensaje recibido comenzar " + mensaje);
            console.log(mensaje.partida.posicionJugadores);
            // socket.off('esperaJugadores', handleEsperaJugadoresSalaEspera);
            // socket.off('comenzarPartida', handleComenzarPartidaSalaEspera);
            navigation.navigate('Tablero', 
            {user: mensaje.username, 
                idPartida: mensaje.partida.id, 
                nombreJugadores: mensaje.partida.nombreJugadores,
                dineroJugadores: mensaje.partida.dineroJugadores,
                posicionJugadores: mensaje.partida.posicionJugadores});
        }

        socket.on('esperaJugadores', handleEsperaJugadoresSalaEspera);
        socket.on('comenzarPartida', handleComenzarPartidaSalaEspera);

        return () => {
            socket.off('esperaJugadores', handleEsperaJugadoresSalaEspera);
            socket.off('comenzarPartida', handleComenzarPartidaSalaEspera);
        };

    },[idPartida])

    return (
        <NativeBaseProvider>
        <View style={{flex:1, flexDirection:'column'}}>
            <StyledText style={styles.titulo} big bold>{`Partida ${idPartida}`}</StyledText>
            <View style={{marginTop:'8%', flex:1, flexDirection:'row', justifyContent: 'center'}}>
                <StyledText style={{justifyContent: 'center', marginLeft:'8%', marginTop:'3%'}}>Esperando a que el anfitrión inicie la partida.</StyledText>
                <View style={{marginLeft:'7%'}}>
                </View>

            </View>
            <StyledText style={styles.titulo} big bold>JUGADORES</StyledText>
            <View style={styles.boxjugadores}>
            <ScrollView>
            {jugadores.map((jugador, i) =>(
                <Text key={i} style={styles.jugadores} >{jugador}</Text>
            ))}
            </ScrollView>
            </View>
        </View>
        </NativeBaseProvider>
    );
}