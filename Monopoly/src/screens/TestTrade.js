import React, { useState } from "react";
import { StyleSheet, Button, View, Modal, ScrollView, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Select, NativeBaseProvider } from "native-base";
import StyledButton from "../components/StyledButton";
import { Entypo } from '@expo/vector-icons';


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
});


export default function TestTrade(){
    //const navigation = useNavigation();
    //const jugadores = route.params.jugadores; // jugadores de la partida
    console.log(jugadores);
    const username = "jug2";

    const jugadores = ["jug1", "jug2", "jug3", "jug4"];
    const [modalVisible, setModalVisible] = useState(false);
    const [jugadorElegido, setJugadorElegido] = useState(null);

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

                    <Text>Crear intercambio con:</Text>

                    <Select selectedValue={jugadorElegido} 
                    minWidth="200" 
                    accessibilityLabel="Jugadores" 
                    placeholder="Seleccionar jugador" 
                    mt={1} 
                    onValueChange={(itemValue) => {console.log("itemValue: " + itemValue)}}>
                                
                    {jugadoresItems}
                </Select>
                </View>
 
            </Modal> 
            </NativeBaseProvider>
        </View>
    )
}