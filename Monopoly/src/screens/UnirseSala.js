import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet , Text } from'react-native';
import {Searchbar} from 'react-native-paper';
import StyledModalSala from "../components/StyledModalSala";
import { SocketContext } from '../components/SocketContext';

const styles = StyleSheet.create({
    barra: { 
        padding: 15,
    },
    titulo: {
        fontSize: 25,
        marginBottom: '5%',
        marginTop: '5%',
        alignContent: 'center',
        alignSelf: 'center',
    },
    unirme: {

    },
    modal: {
        height: '30%',
        width: '84%',
    }
});

export default function UnirseSalaScreen({ route, navigation }) {

    const [modalPartidaVisible, setModalPartidaVisible] = React.useState(false);
    const [idPartida, setIdPartida] = React.useState(0);

    const {socket} = React.useContext(SocketContext);
    // const handleEsperaJugadores = useCallback((mensaje) => {
    //     console.log('Mensaje recibido espera jugadores - unirse sala: ' + mensaje);
    //     const mensajeCadena = mensaje.toString();
    //     const subcadenas = mensajeCadena.split(",");
    //     console.log("Id partida antes de navegar: " + idPartida);
    //     // socket.off('esperaJugadores', esperaJugadoresListener);
    //     navigation.replace('EsperaUnirse', {idPartida: idPartida, jugadores: subcadenas});
    //   }, [navigation, idPartida]);

    // const esperaJugadoresListener = (mensaje) => handleEsperaJugadores(mensaje);

    useEffect(()=>{

        function handleEsperaJugadoresSalaUnirse(mensaje){
            console.log('Mensaje recibido espera jugadores - unirse sala: ' + mensaje);
            const mensajeCadena = mensaje.toString();
            const subcadenas = mensajeCadena.split(",");
            console.log("Id partida antes de navegar: " + idPartida);
            // socket.off('esperaJugadores', esperaJugadoresListener);
            navigation.replace('EsperaUnirse', {idPartida: idPartida, jugadores: subcadenas});
        }

        socket.on('esperaJugadores', handleEsperaJugadoresSalaUnirse);

        return () => {
            socket.off('esperaJugadores', handleEsperaJugadoresSalaUnirse);
        };

    },[idPartida])

    return (
        <View style={styles.barra}>
            <Text style={styles.titulo}> Introduce el id de la partida</Text>
            <Searchbar
                placeholder="123456"
                placeholderTextColor="grey"
                onChangeText={(id) => setIdPartida(id)}
                onSubmitEditing={() => {console.log("ID partida: ", idPartida); setModalPartidaVisible(true)}}
            />

            <StyledModalSala
                title="Únete a la partida"
                text={"Partida #"+idPartida}
                style={styles.modal}
                buttonText="Unirme"
                idPartida={idPartida}
                navigation={navigation}
                onClose={ () => {
                    setModalPartidaVisible({setModalPartidaVisible: !modalPartidaVisible})
                    }}
                visible={modalPartidaVisible}
                onRequestClose={() => {
                    setModalReglasVisible({modalPartidaVisible: !modalPartidaVisible});
                }} 
            >
            </StyledModalSala> 

        </View>
    );
};
