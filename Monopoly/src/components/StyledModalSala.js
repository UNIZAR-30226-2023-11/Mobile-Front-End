import React, { useEffect, useCallback } from 'react';
import { Modal, ScrollView, StyleSheet, View, Pressable, Text, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import StyledButton from "../components/StyledButton";
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
        height: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        }
    },
    button :{
        marginLeft: '80%',
        marginTop: '5%'
    },
    modalText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginBottom: 20,
    },
    buttonTitle: {
        marginTop: '10%',
        color: 'lightBlue100'
    },
});

export default function StyledModalSala({style={}, onClose, visible, onRequestClose, title, text, buttonText, idPartida, navigation}){

    const modalStyles = [
        styles.modalView,
        style
    ]

    const {socket} = React.useContext(SocketContext);

    return(
        <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={onRequestClose}
        transparent={true}
        props>
        <View style={styles.centeredView}>
            <View style={modalStyles}>
            <Pressable
                onPress={onClose}>
                <Entypo name="circle-with-cross" size={35} color="red" style={styles.button}/>
            </Pressable>
            <Text style={styles.modalTitle}>{title}</Text>
            <ScrollView style={{marginHorizontal: 20}}>
                <Text style={styles.modalText}>{text}</Text>
                <StyledButton 
                lightblue title={buttonText} 
                onPress={() =>{
                    console.log("pulsado");
                    socket.emit('unirJugador', {
                        idPartida: idPartida,
                        socketId: socket.id
                        }, (ack) => {
                            console.log('Server acknowledged:', ack);
                            if(ack.cod == 0){
                                console.log("unido");
                                onClose();
                            }
                            if(ack.cod == 4){
                                alert("No se admiten mas jugadores en la partida");
                            }
                            else if(ack.cod == 2){
                                alert("Se ha producido un error en el servidor. Vuelva a intentarlo");
                            }
                            else if(ack.cod!=0){
                                alert(ack.msg);
                            }
                    });
                }}

                />
            </ScrollView>
            </View>
        </View>
        </Modal>
    )
}
