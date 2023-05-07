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
        marginRight: '8%',
    },
});


export default function TestTrade(){
    //const navigation = useNavigation();
    //const jugadores = route.params.jugadores; // jugadores de la partida
    console.log(jugadores);
    const username = "jug2";

    const jugadores = ["jug1", "jug2", "jug3", "jug4"];
    const [modalVisible, setModalVisible] = useState(false);
    const [jugadorElegido, setJugadorElegido] = useState(null);
    const [precioTrade, setPrecioTrade] = useState(null);

    const handleJugadorElegido = (jugador) => {
        setJugadorElegido(jugador);
    };

    const jugadoresItems = jugadores.map((jugador, i) => (
        <Select.Item key={i} label={jugador} value={jugador} />
      ));

    return (
        <View>
            <StyledButton title="TRADE" onPress={() => setModalVisible(true)} />
        <NativeBaseProvider>
            <Modal style={styles.modalView} visible={modalVisible}>
                <View style={styles.centeredView}>
                    <Pressable
                        onPress={() => setModalVisible(false)}>
                        <Entypo name="circle-with-cross" size={35} color="red" style={styles.button}/>
                    </Pressable>

                    <Text style={styles.titulo}>Intercambio de propiedades</Text>
                    <View style={styles.elementoLista}>
                        <Text>Intercambiar con:  </Text>
                        <Select selectedValue={jugadorElegido} 
                        minWidth="200" 
                        accessibilityLabel="Jugadores" 
                        placeholder="Seleccionar jugador" 
                        mt={1} 
                        onValueChange={(itemValue) => {console.log("itemValue: " + itemValue)}}>
                        {jugadoresItems}
                        </Select> 
                    </View>
                        <View style={styles.elementoLista}>
                        <Text>Elige asignatura:   </Text>
                        <Select selectedValue={jugadorElegido} 
                        minWidth="200" 
                        accessibilityLabel="Jugadores" 
                        placeholder="Seleccionar asignatura" 
                        mt={1} 
                        onValueChange={(itemValue) => {console.log("itemValue: " + itemValue)}}>
                        {jugadoresItems}
                        </Select> 
                    </View>

                    <View style={styles.elementoLista}>
                        <Text style={{flex:1}}>Indica el precio: </Text>
                        <InputSpinner
                            //max={10}
                            min={0}
                            step={10}
                            color={"#f04048"}
                            value={precioTrade}
                            rounded={true}
                            editable={true} 
                            style={{width: '10%', height: '10%'}}
                            onChange={(num)=>{console.log(num)}}></InputSpinner>
                    </View>

                        <StyledButton title="ENVIAR" lightblue onPress={() => setModalVisible(true)} />
                </View>
 
            </Modal> 
            </NativeBaseProvider>
        </View>
    )
}