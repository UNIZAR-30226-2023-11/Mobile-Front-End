import React, { useState } from "react";
import { StyleSheet, Button, View, Modal, ScrollView, Text, Select, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StyledButton from "../components/StyledButton";
import { Entypo } from '@expo/vector-icons';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
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
    
    const options = jugadores.map((jugador) => 
    <option key={jugador} value={jugador}><Text>{jugador}</Text></option>);


    return (
        <View>
            <StyledButton title="TRADE" onPress={() => setModalVisible(true)} />

            <Modal style={styles.modalView} visible={modalVisible}>
                <View style={styles.centeredView}>
                    <Pressable
                    onPress={() => setModalVisible(false)}>
                        <Entypo name="circle-with-cross" size={35} color="red" style={styles.button}/>
                    </Pressable>

                    <Text>Crear intercambio con:</Text>
                    <select value={jugadorElegido} onChange={handleJugadorElegido}>
                        <option value="player">Seleccione un jugador</option>
                        {options}
                    </select>
                </View>    
            </Modal> 
        </View>
    )
}