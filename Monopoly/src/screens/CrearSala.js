import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, Text, Modal, Switch, Pressable } from "react-native";
import { Select,NativeBaseProvider, ScrollView  } from "native-base";
import StyledText  from "../components/StyledText";
import StyledButton from "../components/StyledButton";
import { Entypo } from '@expo/vector-icons';

import { SocketContext } from "../components/SocketContext";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    titulo:{
        marginTop:'8%',
        marginLeft:'35%',
        fontSize: '16',
    },
    tituloJugadores:{
        marginLeft:'35%',
        fontSize: '16',
    },
    boxjugadores: {
        flex:3,
        justifyContent:'flex-start',
        marginLeft:'10%',
        width: '80%',
        height: '30%',
        borderColor:'#000000',
        borderWidth: 1
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
    personalizar :{
        flex:1.5,
        marginTop: '5%',
    },
    button :{
        marginLeft: '80%',
        marginTop: '5%'
    },
    modalText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginBottom: 20,
    },
    buttonTitle: {
        marginTop: '10%',
        color: 'lightBlue100'
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    optionText: {
        marginRight: 10,
    },
    jugadores:{
        fontSize: 20,
        marginTop:'2%',
        textAlign: 'center',
        marginRight: '4%',
    }
})

export default function CrearSalaScreen({route, navigation }) {

    const {socket} = React.useContext(SocketContext);
    const user = route.params.user;
    const idPartida = route.params.idPartida;
    // console.log(user, idPartida);

    const [players, setPlayers] = React.useState(2);
    const [money, setMoney] = React.useState(1500);
    const [jugadores, setJugadores] = React.useState([user]);

    const [isModalVisible, setModalVisible] = useState(false);
    const [cobrarCarcel, setCobrarCarcel] = useState(false);
    const [cobrarBeca, setCobrarBeca] = useState(false);
    const [activarSubasta, setActivarSubasta] = useState(false);
    const [aumentarCreditos, setAumentarCreditos] = useState(false);
    const [reiniciarJuegoBancarrota, setReiniciarJuegoBancarrota] = useState(false);

    const handleEsperaJugadores = useCallback((mensaje) => {
        console.log('Mensaje recibido: ' + mensaje);
        const mensajeCadena = mensaje.toString();
        const subcadenas = mensajeCadena.split(",");
        console.log(subcadenas);
        setJugadores(subcadenas);
    }, [navigation, idPartida]);

    const handleComenzarPartida = useCallback((mensaje) => {
        navigation.navigate('Tablero', {user: mensaje, idPartida: idPartida, jugadores: jugadores});
    }, [navigation, idPartida]);

    useEffect(()=>{
        socket.on('esperaJugadores', (mensaje) => handleEsperaJugadores(mensaje));

        socket.on('comenzarPartida', (mensaje) => handleComenzarPartida(mensaje));

        return () => {
            socket.off('esperaJugadores', (mensaje) => handleEsperaJugadores(mensaje));
            socket.off('comenzarPartida', (mensaje) => handleComenzarPartida(mensaje));
        };

    },[])

    return (
        <NativeBaseProvider>
        <View style={{flex:1, flexDirection:'column'}}>
            <StyledText style={styles.titulo} big bold>Partida #{idPartida}</StyledText>
            <View style={{marginTop:'8%', flex:1, flexDirection:'row'}}>
                <StyledText style={{marginLeft:'8%', marginTop:'3%'}} big bold>Nº jugadores</StyledText>
                <View style={{marginLeft:'7%'}}>
                <Select selectedValue={players} 
                    minWidth="200" 
                    accessibilityLabel="Jugadores" 
                    placeholder="2" 
                    mt={1} 
                    onValueChange={(itemValue) => {
                        console.log(itemValue);
                        socket.emit('actualizarPartida', {
                                    dineroInicial: money,
                                    nJugadores: itemValue,
                                    normas: {
                                        cobrarCarcel: cobrarCarcel,
                                        cobrarBeca: cobrarBeca,
                                        activarSubasta: activarSubasta,
                                        aumentarCreditos: aumentarCreditos,
                                        reiniciarJuegoBancarrota: reiniciarJuegoBancarrota
                                    },
                                    jugar: false,
                                    socketId: socket.id
                                }, (ack) => {
                                    console.log('Server acknowledged:', ack);
                                    if(ack.cod == 0){
                                        setPlayers(itemValue);
                                    }
                                    else{
                                        alert("Se ha producido un error. Intentelo de nuevo.")
                                    }
                                });
                                }}>
                    <Select.Item label="2" value="2" />
                    <Select.Item label="3" value="3" />
                    <Select.Item label="4" value="4" />
                    <Select.Item label="5" value="5" />
                    <Select.Item label="6" value="6" />
                    <Select.Item label="7" value="7" />
                    <Select.Item label="8" value="8" />
                </Select>
                </View>
            </View>
            <View style={{marginTop:'8%', flex:1, flexDirection:'row'}}>
                <StyledText style={{marginLeft:'8%', marginTop:'3%'}} big bold>Dinero inicial</StyledText>
                <View style={{marginLeft:'7%'}}>
                <Select selectedValue={money} 
                    minWidth="200" 
                    accessibilityLabel="Money" 
                    placeholder="1500" 
                    mt={1} 
                    onValueChange={(itemValue) => {
                        console.log(itemValue);
                                    socket.emit('actualizarPartida', {
                                    dineroInicial: itemValue,
                                    nJugadores: players,
                                    normas: {
                                        cobrarCarcel: cobrarCarcel,
                                        cobrarBeca: cobrarBeca,
                                        activarSubasta: activarSubasta,
                                        aumentarCreditos: aumentarCreditos,
                                        reiniciarJuegoBancarrota: reiniciarJuegoBancarrota
                                    },
                                    jugar: false,
                                    socketId: socket.id
                                }, (ack) => {
                                    console.log('Server acknowledged:', ack);
                                    if(ack.cod == 0){
                                        setMoney(itemValue);
                                    }
                                    else{
                                        alert("Se ha producido un error. Intentelo de nuevo.")
                                    }
                                });
                                }}>
                    <Select.Item label="1000" value="1000" />
                    <Select.Item label="1500" value="1500" />
                    <Select.Item label="2000" value="2000" />
                    <Select.Item label="2500" value="2500" />
                    <Select.Item label="3000" value="3000" />
                </Select>
                </View>
            </View>

            <View style={styles.personalizar}>
            <StyledButton
                lightblue 
                title="PERSONALIZAR"
                onPress={() => setModalVisible(true)}
            />
        
            <View style={styles.container}>
            <Modal style={styles.modalView} visible={isModalVisible}>
                <View style={styles.centeredView}>
                    <Pressable
                       onPress={() => setModalVisible(false)}>
                        <Entypo name="circle-with-cross" size={35} color="red" style={styles.button}/>
                    </Pressable>
                    <View>
                        <View style={styles.option}>
                            <Text style={styles.optionText}>Cobrar en la carcel</Text>
                            <Switch value={cobrarCarcel} onValueChange={setCobrarCarcel} />
                        </View>
                        <View style={styles.option}>
                            <Text style={styles.optionText}>Cobrar la beca</Text>
                            <Switch value={cobrarBeca} onValueChange={setCobrarBeca} />
                        </View>
                        <View style={styles.option}>
                            <Text style={styles.optionText}>Activar las subastas</Text>
                            <Switch value={activarSubasta} onValueChange={setActivarSubasta} />
                        </View>
                        <View style={styles.option}>
                            <Text style={styles.optionText}>{`Aumentar créditos sin necesidad de\n igualar las asignaturas`}</Text>
                            <Switch value={aumentarCreditos} onValueChange={setAumentarCreditos} />
                        </View>
                        <View style={styles.option}>
                            <Text style={styles.optionText}>Reiniciar el juego en bancarrota</Text>
                            <Switch value={reiniciarJuegoBancarrota} onValueChange={setReiniciarJuegoBancarrota} />
                        </View>
                        <StyledButton
                            lightblue 
                            title="GUARDAR"
                            onPress={() => {setModalVisible(false);}}
                        />
                    </View>
                    
                </View>
                </Modal> 
            </View>


            </View>
            <StyledText style={styles.tituloJugadores} big bold>JUGADORES</StyledText>
            <View style={styles.boxjugadores}>
            <ScrollView>
            {jugadores.map((jugador, i) =>(
                <Text key={i} style={styles.jugadores}>{jugador}</Text>
            ))}
            </ScrollView>
            </View>
            
            <StyledButton
                lightblue 
                title="JUGAR"
                onPress={() => {
                    socket.emit('actualizarPartida', {
                        dineroInicial: money,
                        nJugadores: players,
                        normas: {
                            cobrarCarcel: cobrarCarcel,
                            cobrarBeca: cobrarBeca,
                            activarSubasta: activarSubasta,
                            aumentarCreditos: aumentarCreditos,
                            reiniciarJuegoBancarrota: reiniciarJuegoBancarrota
                        },
                        jugar: true,
                        socketId: socket.id
                    }, (ack) => {
                        console.log('Server acknowledged:', ack);
                        if(ack.cod == 0){
                        }
                        else if(ack.cod == 2){
                            alert("Se ha producido un error en el servidor. Por favor vuelva a intentarlo.");
                        }
                    });
                    // setDetenido(!detenido);
                }}
            />
            
        </View>
        </NativeBaseProvider>
    );
}