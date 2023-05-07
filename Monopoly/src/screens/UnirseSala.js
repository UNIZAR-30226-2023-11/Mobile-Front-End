import React from 'react';
import { View, StyleSheet , Text , Button, Pressable} from'react-native';
import {Searchbar} from 'react-native-paper';
import StyledModalSala from "../components/StyledModalSala";
import { SocketContext } from '../components/SocketContext';
import { unirPartida } from '../url/partida';

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

    // const user = route.params.user;
    // console.log(user);

    const socket = React.useContext(SocketContext);

    const [modalPartidaVisible, setModalPartidaVisible] = React.useState(false);
    const [idPartida, setIdPartida] = React.useState(0);

    return (
        <View style={styles.barra}>
            <Text style={styles.titulo}> Introduce el id de la partida</Text>
            <Searchbar
                placeholder="123456"
                placeholderTextColor="grey"
                onChangeText={(id) => setIdPartida(id)}
                onSubmitEditing={() => setModalPartidaVisible(true)}
            />

            <StyledModalSala
                title="Únete a la partida"
                text={"Partida #"+idPartida}
                style={styles.modal}
                buttonText="Unirme"
                goTo= {() => {{console.log("pulsado");
                    socket.emit('unirJugador', {
                        idPartida: idPartida,
                        socketId: socket.id
                        }, (ack) => {
                            if(ack.cod == 0){
                                navigation.navigate('EsperaUnirse', {idPartida: idPartida})
                            }
                            else if(ack.cod != 2){
                                alert(ack.msg);
                            }
                            else{
                                alert("Se ha producido un error en el servidor. Vuelva a intentarlo");
                            }

                        console.log('Server acknowledged:', ack);
                    });
                }}}
                onClose = { () => {setModalPartidaVisible({setModalPartidaVisible: !modalPartidaVisible})}}
                visible={modalPartidaVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalReglasVisible({modalPartidaVisible: !modalPartidaVisible});
                }} 
            >
            </StyledModalSala> 

        </View>
    );
};
