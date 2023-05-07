import React, { useState } from "react";
import { StyleSheet, Button, View, Modal, ScrollView, Text, StyledButton, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';


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

    return (
        <View>
            <Button title="TRADE" onPress={() => setModalVisible(true)} />

            <Modal style={styles.modalView} visible={modalVisible}>
                <View style={styles.centeredView}>
                    <Pressable
                    onPress={() => setModalVisible(false)}>
                        <Entypo name="circle-with-cross" size={35} color="red" style={styles.button}/>
                    </Pressable>

                    <Text>Crear intercambio con:</Text>
                    <Picker
                        selectedValue={jugadorElegido}
                        onValueChange={handleJugadorElegido}
                    >
                        {opciones.map((opcion, i) => (
                        <Picker.Item key={i} label={opcion} value={opcion} />
                        ))}
                    </Picker>
        
                    <ScrollView>
                        {jugadores.map((jugador, i) =>(
                            <Text key={i}>{jugador}</Text>
                        ))}
                    </ScrollView>
                </View>    
                </Modal> 
        </View>
    )
}