import React, { useEffect } from 'react';
import { Modal, StyleSheet, View, Pressable, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { SocketContext } from './SocketContext';


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        marginTop: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        width:'85%',
        height: '20%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        }
    },
    button:{
        marginLeft: '80%',
        marginTop: '5%'
    },
    modalText: {
        fontSize: 18,
        alignSelf: 'flex-start',
        color: '#000',
        textAlign: 'center'
    },
});

export default function StyledModalTimeout({style={}, onClose, visible, onRequestClose}){

    const modalStyles = [
        styles.modalView,
        style
    ]

    const {socket} = React.useContext(SocketContext);

    const [intervalContador, setIntervalContador] = React.useState(null);
    const [contador, setContador] = React.useState(-1);
    const [detenidoContador, setDetenidoContador] = React.useState(false);

    useEffect(() => {
        if(visible){
            setContador(17);
        }
    },[visible]);

    useEffect(() => {
        if(contador == 0){
            setDetenidoContador(true); 
        }
    },[contador]);

    useEffect (() => {
            if(detenidoContador){
                clearInterval(intervalContador);
                setIntervalContador(null);
                onClose();
                socket.emit('siguienteTurno', {
                    socketId: socket.id
                }, (ack) => {
                    console.log('Server acknowledged siguiente turno:', ack);
                    if(ack.cod == 0){
                        socket.emit('bancarrota',{
                        socketId: socket.id
                    },
                    (ack) => {
                        if(ack.cod == 0){
                            alert("Se le ha retirado de la partida por no jugar su turno");   
                        }
                        else if(ack.cod == 2){
                            alert("Se ha producido un error. Por favor vuelva a intentarlo");
                        }
                    })
                    }
                    else if(ack.cod == 2){
                       alert("Se ha producido un error. Vuelva a intentarlo por favor.");
                    }
                });
            }else{

                const id = setInterval(() => {
                    setContador(contador => contador - 1);
                },1000);

                setIntervalContador(id);
            }
            return () => {clearInterval(intervalContador);setIntervalContador(null);}
        },[detenidoContador]);

    return(
        <View>
        <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => {setDetenidoContador(true); onRequestClose()}}
        transparent={true}
        props>
        <View style={styles.centeredView}>
            <View style={modalStyles}>
            <Pressable
                onPress={() => {setDetenidoContador(true); onClose();}}>
                <Entypo name="circle-with-cross" size={35} color="red" style={styles.button}/>
            </Pressable>
            <Text style={styles.modalText}>
                {`Si no realiza una jugada en `}{contador}{` segundos\n será retirado de la partida`}
            </Text>
            </View>
        </View>
        </Modal>
        </View>
    )
}