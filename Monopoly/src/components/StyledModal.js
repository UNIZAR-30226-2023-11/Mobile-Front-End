import React from 'react';
import { Modal, ScrollView, StyleSheet, View, Pressable, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

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
        textAlign: 'justify',
        color: '#000',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginBottom: 20,
    }
});

export default function StyledModal({style={}, onClose, visible, onRequestClose, title, text}){

    const modalStyles = [
        styles.modalView,
        style
    
    ]

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
            </ScrollView>
            </View>
        </View>
        </Modal>
    )
}