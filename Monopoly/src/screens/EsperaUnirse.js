import React, {useEffect, useCallback} from "react";
import { View, StyleSheet, Text } from "react-native";
import { Select, NativeBaseProvider, ScrollView  } from "native-base";
import StyledText  from "../components/StyledText";
import StyledButton from "../components/StyledButton";

import { listaJugadores } from "../url/partida";

const styles = StyleSheet.create({
    titulo:{
        marginTop:'10%',
        marginLeft:'35%',
        flex:1,
    },
    boxjugadores: {
        flex:6,
        justifyContent:'flex-start',
        marginLeft:'10%',
        width: '80%',
        height: '50%',
        borderColor:'#000000',
        borderWidth: 1
    }
})

export default function EsperaUnirseScreen({ route, navigation }) {

    // const user = route.params.user;
    const idPartida = route.params.idPartida;
    // console.log(user, idPartida);

    const [interval, setIntervalId] = React.useState(null);
    const [detenido, setDetenido] = React.useState(false);
    const [avanzar, setAvanzar] = React.useState(false);
    const [jugadores, setJugadores] = React.useState([""]);
    
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

    useEffect (() =>{
        console.log("detenido: ", detenido);
        if(detenido){
            clearInterval(interval);
            setIntervalId(null);
            setAvanzar(true);
        }else{
            const id = setInterval(() => {
                actualizarJugadores();
            },3000);
            setIntervalId(id);
        }

        return () => {
            clearInterval(interval);
            setIntervalId(null);
        };

    },[detenido])

    useEffect(() => {
        if(avanzar){
            if(interval!= null){
                clearInterval(interval);
                setInterval(null);
            }
            navigation.navigate('Tablero', {idPartida: idPartida, jugadores: jugadores});
        }
    }, [avanzar]);

    return (
        <NativeBaseProvider>
        <View style={{flex:1, flexDirection:'column'}}>
            <StyledText style={styles.titulo} big bold>Partida {idPartida}</StyledText>
            <View style={{marginTop:'8%', flex:1, flexDirection:'row', justifyContent: 'center'}}>
                <StyledText style={{justifyContent: 'center', marginLeft:'8%', marginTop:'3%'}}>Esperando a que el anfitrión inicie la partida.</StyledText>
                <View style={{marginLeft:'7%'}}>
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
            <View style={{flex:1}}>
                <StyledButton
                lightblue
                title="Ir a la sala"
                onPress={() => { setDetenido(true);}}
                />
            </View>
        </View>
        </NativeBaseProvider>
    );
}