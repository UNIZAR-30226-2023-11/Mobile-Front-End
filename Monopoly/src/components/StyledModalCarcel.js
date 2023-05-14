import React from 'react';
import { Modal, ScrollView, StyleSheet, View, Pressable, Text } from 'react-native';
import { Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import StyledButton from './StyledButton';

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
        width:'60%',
        height: '60%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        }
    },
    botones:{
        flex:0.5,
        marginTop:'5%',
        flexDirection:'column', 
        justifyContent:'space-between',
    },
    button:{
        marginLeft: '80%',
        marginTop: '5%'
    },
    boton :{
        marginTop: '5%',
    },
    modalText: {
        fontSize: 20,
        alignSelf: 'flex-start',
        textAlign: 'center',
        marginLeft:'10%',
        marginTop: '10%',
        color: '#000',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginBottom:'5%'
    }
});

export default function StyledModalCarcel ({style={}, onCloseRoll, onClose, visible, onRequestClose, title, text, cartaJulio, pagarJulio}){

    const modalStyles = [
        styles.modalView,
        style
    ]
    
    const {socket} = React.useContext(SocketContext);

    return (
        <View>
        <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={onRequestClose}
        transparent={true}
        props>
        <View style={styles.centeredView}>
            <View style={modalStyles}>
            <Text style={styles.modalTitle}>{title}</Text>
                <Text style={styles.modalText}>{text}</Text>
                <View style={styles.botones}>
                    {cartaJulio && 
                    <StyledButton
                        style={styles.boton}
                        title="Usar carta"
                        onPress={() => {
                            socket.emit('usarCartaJulio',{
                                socketId:socket.id
                            },(ack) =>{
                                if(ack.cod == 0){
                                    onClose();
                                }
                                else if(ack.cod == 2){
                                    alert("Se ha producido un error en el servidor. Intentelo de nuevo.");
                                }
                            })
                        }}
                        purple
                    />}
                    { pagarJulio && <StyledButton
                        style={styles.boton}
                        title="Pagar"
                        onPress={() => {
                            console.log("pagando");
                            socket.emit('pagarJulio',{
                                socketId:socket.id
                            },(ack) =>{
                                if(ack.cod == 0){
                                    onClose();
                                }
                                else if(ack.cod == 2){
                                    alert("Se ha producido un error en el servidor. Intentelo de nuevo.");
                                }
                            })
                        }}
                        purple
                    />}
                    <StyledButton
                        style={styles.boton}
                        title="Tirar los dados"
                        onPress={onCloseRoll}
                        purple
                    />
                </View>
            </View>
        </View>
        </Modal>
        </View>
    )
}