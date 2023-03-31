import React from 'react';
import { Modal, ScrollView, StyleSheet, View, Pressable, Text } from 'react-native';

import StyledButton from "./StyledButton"

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        flex:0.4,
        flexDirection:'column',
        marginTop: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '95%',
        height:'70%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        }
    },
    modalText: {
        flex:0.5,
        fontSize: 20,
        marginTop:'15%',
        textAlign: 'justify',
        color: '#000',
    },
    botones:{
        flex:1,
        flexDirection:'row', 
        justifyContent:'flex-start'
    },
    boton:{
        flex:2,
        justifyContent:'flex-start',
        marginLeft:'2%', 
        marginRight:'2%',
        marginBottom:'16%'
    }
});

export default function StyledModalCompra({onClose, visible, onRequestClose, doubles, text}){

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
                        onPress={onClose}
                        purple
                    />
                </View>
            </View>
        </View>
        </Modal>
    )
}