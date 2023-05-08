import React, { useState } from "react";
import { StyleSheet, Button, View, Modal, ScrollView, Text, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Select, NativeBaseProvider } from "native-base";
import StyledButton from "../components/StyledButton";
import { Entypo } from '@expo/vector-icons';
import InputSpinner from 'react-native-input-spinner';


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
        flexDirection: 'row', 
        alignItems: 'center',
        marginLeft: '8%',
        marginRight: '8%'
    },
});


export default function TestPujas(){
    
    const [modalPujaVisible, setModalPujaVisible] = useState(false);
    const [precioTrade, setPrecioTrade] = useState(null);

    return (
        <View>
            {/* un boton para ver el modal de PUJAS */}
            <StyledButton title="PUJAR" onPress={() => setModalVisible(true)} />
        <NativeBaseProvider>
            <Modal style={styles.modalView} visible={modalPujaVisible}>
                <View style={styles.centeredView}>
                    <Pressable
                        onPress={() => setModalVisible(false)}>
                        <Entypo name="circle-with-cross" size={35} color="red" style={styles.button}/>
                    </Pressable>

                    <Text style={styles.titulo}>PUJA</Text>
                    <View style={styles.elementoLista}>
                        <Text>PRECIO PUJA $$$ </Text>
                    </View>
                    <View style={styles.elementoBoton}>
                        <StyledButton title="+10€"
                        onPress={() => {console.log("BOTON 5€ PULSADO ") }}/>
                        <StyledButton title="+50€"
                        onPress={() => {console.log("BOTON 50€ PULSADO ") }}/>
                        <StyledButton title="+100€"
                        onPress={() => {console.log("BOTON 100€ PULSADO ") }}/>                                
                    </View>
                    <Text>Carlotita ha pujado €€€ </Text>
                    <Text>Nombre de la carta </Text>
                    {/* aqui mostrar modal de la carta de la asignatura */}
                    <StyledButton title="infoAsignatura"
                        onPress={() => {console.log("MOSTRAR MODAL INFO ASIGNATURA ") }}/>  
                </View>
            </Modal> 


            <Modal style={styles.modalView} visible={modalRVisible}>
                <View style={styles.centeredView}>
                    <Pressable
                        onPress={() => setModalVisible(false)}>
                        <Entypo name="circle-with-cross" size={35} color="red" style={styles.button}/>
                    </Pressable>

                    <Text style={styles.titulo}>Has recibido una oferta</Text>
                    <View style={styles.elementoLista}>
                        <Text>El jugador:  nombreJugador</Text>
                        
                    </View>
                    <View style={styles.elementoLista}>
                        <Text>Asignatura:  asignatura   </Text>
                        
                    </View>
                    <View style={styles.elementoLista}>
                        <Text>Precio:  $$   </Text>
                        
                    </View>
                    

                    <View style={styles.elementoPrecio}>
                        <Text style={{marginLeft: '0%', marginRight: '11%'}}>Contraoferta:  </Text>
                        <InputSpinner
                            //max={10}
                            //poner que el minimo sea la oferta + 10
                            min={0}
                            step={15}
                            color={"#6e7373"}
                            value={precioTrade}
                            rounded={false}
                            editable={true}
                            onChange={(num)=>{console.log("Precio: " + num); 
                            setPrecioTrade(num)}}></InputSpinner>
                    </View>
                    <View style={styles.elementoBoton}>
                        <StyledButton style={{marginLeft: '18%', marginRight: '11%'}} 
                        title="ACEPTAR" lightblue 
                        onPress={() => {setModalRVisible(false),
                                        console.log("ACEPTAR OFERTA ") }}/>

                <StyledButton style={{marginLeft: '0%', marginRight: '15%'}} 
                title="RECHAZAR" lightblue 
                        onPress={() => {setModalRVisible(false),
                            console.log("RECHAZAR OFERTA ") }}/>
                </View>

                <StyledButton style={{marginLeft: '15%', marginRight: '15%'}} 
                title="ENVIAR OFERTA" lightblue 
                        onPress={() => {setModalRVisible(false),
                                        console.log("CONTRA oferta: " + precioTrade) }}/>
                </View>
 
            </Modal> 

            </NativeBaseProvider>
        </View>
    )
}