import React, { useEffect, useCallback, useState} from "react";
import { View, StyleSheet, Text, Modal, Switch } from "react-native";
import { Select,NativeBaseProvider, ScrollView  } from "native-base";
import StyledText  from "../components/StyledText";
import StyledButton from "../components/StyledButton";
import { actualizarPartida, listaJugadores } from "../url/partida";
import StyledModal from "../components/StyledModalNormasP";

const styles = StyleSheet.create({
    titulo:{
        marginTop:'10%',
        marginBottom:'1%',
        marginLeft:'35%',
        flex:1,
    },
    boxjugadores: {
        flex:4,
        justifyContent:'flex-start',
        marginLeft:'10%',
        width: '80%',
        height: '30%',
        borderColor:'#000000',
        borderWidth: 1
    }
})

export default function CrearSalaScreen({route, navigation }) {

    // const user = route.params.user;
    const idPartida = route.params.idPartida;
    // console.log(user, idPartida);

    const [interval, setIntervalId] = React.useState(null);
    const [detenido, setDetenido] = React.useState(false);
    const [avanzar, setAvanzar] = React.useState(false);

    const [players, setPlayers] = React.useState(2);
    const [money, setMoney] = React.useState(1500);
    const [jugadores, setJugadores] = React.useState([""]);

    const [isModalVisible, setModalVisible] = useState(false);
    const [cobrarCarcel, setCobrarCarcel] = useState(false);
    
    const actualizarJugadores = useCallback(() => {
        const response =  fetch(listaJugadores, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"idPartida": idPartida})
            })
            .then((response) => {
              if(response.status != 200){
                throw new Error('Error de estado: '+ response.status+' en la funcion de listar jugadores');
              }
              return response.json();
            })
            .then(data => {
                // console.log("ACTUALIZAR DINERO:",data);
                console.log(data);
                setJugadores(data.listaJugadores);
            })
            .catch((error) => {
            //Error
            //alert(JSON.stringify(error));
            console.error(error);
            });
    });

    // useEffect (() =>{
    //     console.log("detenido: ", detenido);
    //     if(detenido){
    //         clearInterval(interval);
    //          setIntervalId(null);
    //         setAvanzar(true);
    //     }else{
    //         const id = setInterval(() => {
    //             actualizarJugadores();
    //         },3000);
    //         setIntervalId(id);
    //     }

    //     return () => {
    //         clearInterval(interval);
    //         setIntervalId(null);
    //     };

    // },[detenido])

    // useEffect(() => {
    //     if(avanzar){
    //         setAvanzar(false);
    //         const response =  fetch(actualizarPartida, {
    //             method: 'PUT',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify({"idPartida": idPartida,
    //                                   "username": user,
    //                                   "dineroInicial": money,
    //                                   "nJugadores": players,
    //                                   "jugar":true})
    //             })
    //             .then((response) => {
    //             if(response.status != 200) {
    //                 throw new Error('Error de estado: '+ response.status);
    //             }
    //             else{
    //                 console.log(response.json());
    //                 if(interval!= null){
    //                     clearInterval(interval);
    //                     setInterval(null);
    //                 }
    //                 navigation.navigate('Tablero', {user: user, idPartida: idPartida, jugadores: jugadores});                }})
    //         .catch((error) => {
    //             //Error
    //             // alert(JSON.stringify(error));
    //             console.error(error);
    //         });
    //     }
    // }, [avanzar]);

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
                                    const response =  fetch(actualizarPartida, {
                                    method: 'PUT',
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify({"idPartida": idPartida,
                                                        //   "username": user,
                                                          "dineroInicial": money,
                                                          "nJugadores": itemValue,
                                                          "jugar": false})
                                    })
                                    .then((response) => {
                                    if(response.status != 200){                                        
                                        throw new Error('Error de estado: '+ response.status);
                                    }
                                    else{
                                        console.log(response.json());
                                        setPlayers(itemValue);
                                    }})
                                .catch((error) => {
                                    //Error
                                    // alert(JSON.stringify(error));
                                    console.error(error);
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
                                    const response =  fetch(actualizarPartida, {
                                    method: 'PUT',
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify({"idPartida": idPartida,
                                                        //   "username": user,
                                                          "dineroInicial": itemValue,
                                                          "nJugadores": players,
                                                          "jugar": false})
                                    })
                                    .then((response) => {
                                    if(response.status != 200){                                        
                                        throw new Error('Error de estado: '+ response.status);
                                    }
                                    else{
                                        console.log(response.json());
                                        setMoney(itemValue);
                                    }})
                                .catch((error) => {
                                    //Error
                                    // alert(JSON.stringify(error));
                                    console.error(error);
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

            <View style={{flex:1}}>
            <StyledButton
                lightblue 
                title="PERSONALIZAR"
                onPress={() => setModalVisible(true)}
            />
        
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StyledModal
                title="PERSONALIZAR NORMAS"
                text="Texto de prueba"
                visible={isModalVisible}
                onClose = { () => {setModalVisible({isModalVisible: !isModalVisible})}}
                onRequestClose={ () => {setModalVisible({isModalVisible: !isModalVisible})}}
                
            />   
            </View>


            </View>
            <StyledText style={styles.titulo} big bold>JUGADORES</StyledText>
            <View style={styles.boxjugadores}>
            <ScrollView>
            {jugadores.map((jugador, i) =>(
                <Text key={i}>{jugador}</Text>
            ))}
            </ScrollView>
            </View>
            
            <StyledButton
                lightblue 
                title="JUGAR"
                onPress={() => {setDetenido(!detenido);}}
            />
            
        </View>
        </NativeBaseProvider>
    );
}