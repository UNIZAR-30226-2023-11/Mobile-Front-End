import React, { useState } from "react";
import { StyleSheet, Button, View, Modal, ScrollView, Text, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Select, NativeBaseProvider } from "native-base";
import StyledButton from "../components/StyledButton";
import { Entypo } from '@expo/vector-icons';
import StyledModalSala from "../components/StyledModalSala";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
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
        width:'45%',
        height: '40%',
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
    titulo: {
        marginTop:'8%',
        marginBottom: '4%',
        fontWeight: 'bold',
        fontSize: 20, 
        textAlign: 'center'
    },
    elementoLista:{
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: '5%',
        marginLeft: '8%',
        marginRight: '8%'
    },
    elementoPrecio:{
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: '5%',
        marginLeft: '26%',
        marginRight: '28%',
    },
    elementoBoton:{
        flexDirection: 'column', 
        //alignItems: 'center',
        //marginLeft: '8%',
        //marginRight: '8%'
    },
    elementoBoton1:{ 
        //alignItems: 'center',
        //marginLeft: '8%',
        //marginRight: '8%'
    },
    elementoBoton2:{
        //alignItems: 'center',
        //marginLeft: '8%',
        //marginRight: '8%'
    },
    elementoBoton3:{
        //alignItems: 'center',
        marginLeft: '8%',
        marginRight: '8%'
    },
    pujas: {
        marginTop: '4%',
        marginBottom: '4%',
    },
    modal: {
        height: '30%',
        width: '84%',
    }
});


export default function TestPujas(navigation){
    
    const [modalPujaVisible, setModalPujaVisible] = useState(false);
    const [modalPartidaVisible, setModalPartidaVisible] = useState(false);
    const [precioTrade, setPrecioTrade] = useState(null);

    return (
        <View>
            {/* un boton para ver el modal de PUJAS */}
            <StyledButton title="PUJAR" onPress={() => setModalPujaVisible(true)} />
            <StyledButton title="PARTIDAS EN JUEGO" onPress={() => setModalPartidaVisible(true)} />
        <NativeBaseProvider>
            <Modal style={styles.modalView} visible={modalPujaVisible}>
                <View style={styles.centeredView}>
                    <Pressable
                        onPress={() => setModalPujaVisible(false)}>
                        <Entypo name="circle-with-cross" size={35} color="red" style={styles.button}/>
                    </Pressable>

                    <Text style={styles.titulo}>PUJA</Text>
                    <View style={styles.elementoLista}>
                        <Text style={styles.titulo} >PRECIO PUJA $$$ </Text>
                    </View>
                    <View style={styles.elementoBoton}>
                        <StyledButton style={styles.elementoBoton1} title="+10€"
                        onPress={() => {console.log("BOTON 5€ PULSADO ") }}/>
                        <StyledButton style={styles.elementoBoton2} title="+50€"
                        onPress={() => {console.log("BOTON 50€ PULSADO ") }}/>
                        <StyledButton style={styles.elementoBoton2}title="+100€"
                        onPress={() => {console.log("BOTON 100€ PULSADO ") }}/>                                
                    </View>
                    <Text style={styles.pujas}>Carlotita ha pujado €€€ </Text>
                    <Text>Nombre de la carta </Text>
                    {/* aqui mostrar modal de la carta de la asignatura !!!!! */}
                    <StyledButton title="infoAsignatura"
                        onPress={() => {console.log("MOSTRAR MODAL INFO ASIGNATURA ") }}/>  
                </View>
            </Modal> 


            <StyledModalSala
                title="Partida en juego"
    text={"Tienes una partida en juego, ¿deseas unirte?" /*idPartida*/}
                style={styles.modal}
                buttonText="Unirme"
                idPartida="5"
                navigation={navigation}
                onClose={ () => {setModalPartidaVisible({setModalPartidaVisible: !modalPartidaVisible})}}
                visible={modalPartidaVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalReglasVisible({modalPartidaVisible: !modalPartidaVisible});
                }} 
            />

            </NativeBaseProvider>
        </View>

    )
}
