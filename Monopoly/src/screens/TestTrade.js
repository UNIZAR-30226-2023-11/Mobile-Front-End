import React from 'react'
import { StyleSheet, Button, View, Modal, ScrollView, StyledButton } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});

const jugadores = ["jug1", "jug2", "jug3", "jug4"];
const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

export default function TestTrade(){
    //const navigation = useNavigation();
    //const jugadores = route.params.jugadores; // jugadores de la partida
    console.log(jugadores);
    const username = jug2;

    return (
        <View>
            <Button title="TRADE" onPress={() => setModalVisible(true)} />

            <Modal style={styles.modalView} visible={modalVisible}>
                <View style={styles.centeredView}>
                    <Pressable
                    onPress={() => setModalVisible(false)}>
                        <Entypo name="circle-with-cross" size={35} color="red" style={styles.button}/>
                    </Pressable>
        
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