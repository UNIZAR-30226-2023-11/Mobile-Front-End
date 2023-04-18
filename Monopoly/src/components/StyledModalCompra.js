import React from 'react';
import { Modal, StyleSheet, View, Text } from 'react-native';


import StyledButton from "./StyledButton"
import { comprarAsignatura } from '../url/partida';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        flex:0.9,
        flexDirection:'column',
        marginTop: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        width: 300,
        height:500,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        }
    },
    modalText: {
        flex:0.2,
        fontSize: 20,
        marginTop:'5%',
        textAlign: 'justify',
        color: '#000',
    },
    carta:{
        flex:1.8
    },
    botones:{
        flex:0.52,
        marginTop:'5%',
        flexDirection:'row', 
        justifyContent:'flex-start'
    },
    boton:{
        flex:2,
        justifyContent:'flex-start',
        height:'60%',
        marginLeft:'2%', 
        marginRight:'2%',
        marginBottom:'16%'
    }
});

export default function StyledModalCompra({InfoCarta, onClose, visible, onRequestClose, doubles, text, 
    c_hor, c_ver, username, idPartida}
    ){
    //console.log("modal abierto");
    console.log(InfoCarta);
    //console.log("info mostrada")
        
    return(
        <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={onRequestClose}
        transparent={true}
        props>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>{text}</Text>
                <View style={styles.carta}>
                    {InfoCarta}
                </View>
                <View style={styles.botones}>
                    {!doubles &&
                    <StyledButton
                        style={styles.boton}
                        title="Acabar turno"
                        onPress={onClose}
                        purple
                    />}
                    {doubles &&
                    <StyledButton
                        style={styles.boton}
                        title="Tirar otra vez"
                        onPress={onClose}
                        purple
                    />}
                    <StyledButton
                        style={styles.boton}
                        title="Comprar"
                        onPress={() => {
                            console.log("comprando..");
                            const response =  fetch(comprarAsignatura, {
                            method: 'PUT',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({  "username": username,
                                                    "coordenadas":{"h": c_ver,"v": c_hor},
                                                    "idPartida": idPartida})
                            })
                            .then((response) => {
                            if(response.status != 201){
                                throw new Error('Error de estado: '+ response.status);
                            }
                            console.log("comprada");
                            onClose();
                            })
                            .catch((error) => {
                            //Error
                            //alert(JSON.stringify(error));
                            console.error(error);
                            });}}
                        purple
                    />
                </View>
            </View>
        </View>
        </Modal>
    )
}