import React from 'react';
import { Modal, ScrollView, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        marginTop: 30,
        backgroundColor: 'white',
        borderRadius: 20,
        width: 300,
        height:450,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        }
    }
});

export default function StyledModal({onClose, visible, onRequestClose}){

    return(
        <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={onRequestClose}
        transparent={true}
        props>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Pressable
                onPress={onClose}>
                <Entypo name="circle-with-cross" size={24} color="red" style={styles.button}/>
            </Pressable>
            <Text style={styles.modalText}>SOBRE NOSOTROS</Text>
            </View>
        </View>
        </Modal>
    )
}