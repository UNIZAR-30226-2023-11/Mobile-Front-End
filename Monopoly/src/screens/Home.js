import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, BackHandler, useEffect } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import StyledButton from "../components/StyledButton";
import StyledTextInput from "../components/StyledTextInput";
import StyledModal from "../components/StyledModal";

import { crearPartida } from "../url/partida";
import { SocketContext } from "../components/SocketContext";


const styles = StyleSheet.create({
    pantalla: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FFFFFF'
    },
    icon:{
        position:'absolute',
        top:'3%',
        right:'5%'
    },
    logoJuego: {
        height: '35%',
        width: '50%',
        alignSelf: 'center'
      },
    nickname: {
        height: '7%',
        width: '70%',
        textAlign: 'center',
        marginTop:'5%',
        marginLeft: '13%',
        marginRight: '13%',   
    }
});


export default function HomeScreen({ route, navigation }){

    let loggedIn = route.params.loggedIn;

    const socket = React.useContext(SocketContext);
    const [nickname, setNickname] = React.useState(null);
    const [modalReglasVisible, setModalReglasVisible] = React.useState(false);

    // handleBackButton = () => {
    //     navigation.navigate('Index');
    //     return true;
    // }

    // useEffect(() => {
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);
      
    //     return () => {
    //       backHandler.remove();
    //     };
    // }, []);

    return(
        <View style={styles.pantalla}>
        {/* <HeaderBackButton onPress={handleBackButton} /> */}
        {loggedIn &&
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Perfil')}>
            <FontAwesome5 name="user-alt" size={28} color="black" />
        </TouchableOpacity>
        }
        {!loggedIn &&
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('LogIn', {perfil: true})}>
            <FontAwesome5 name="user-alt" size={28} color="black" />
        </TouchableOpacity>
        }
        <Image
            style={styles.logoJuego}
            source={require('../../assets/logo_juego_monopoly.png')}
        />
        {!loggedIn && 
        <StyledTextInput style={styles.nickname}
                placeholder="Ingresa tu nickname"
                onChangeText={value => setNickname(value)}
                value={nickname}
                required={true}
         />}
            <StyledButton
                homeScreen
                title="Crear sala"
                onPress={() => {{ 
                                // if(user==null){user = nickname}
                                // console.log(user);
                                // const response =  fetch(crearPartida, {
                                // method: 'POST',
                                // headers: {'Content-Type': 'application/json'},
                                // body: JSON.stringify({"username": user,
                                //                       "dineroInicial": 0,
                                //                       "nJugadores": 0})
                                // })
                                // .then((response) => {
                                // if(response.status != 201){
                                //     throw new Error('Error de estado: '+ response.status);
                                // }
                                // return response.json();
                                // })
                                // .then(data => {
                                //     const idPartida = data.idPartida;
                                if(nickname === null){
                                    alert("Por favor introduzca un nickname");
                                }
                                else{
                                    console.log("emitiendo socket ...", socket.id);
                                    socket.emit('nombreInvitado', {
                                                username: nickname,
                                                socketId: socket.id
                                                },
                                                (ack) => { 
                                                console.log('Server acknowledged:', ack);
                                                if(ack.cod != 2 && ack.cod != 0){
                                                    alert(ack.msg);
                                                }
                                                else if(ack.cod == 2){
                                                    alert("Se ha producido un error en el servidor, por favor, pulse otra vez el boton");
                                                }
                                                })
                                    navigation.navigate('CrearSala', {idPartida: 90});
                                }
                                // })
                                // .catch((error) => {
                                //     //Error
                                //     //alert(JSON.stringify(error));
                                //     console.error(error);
                                // });
                            }}}
            />
            <StyledButton
                homeScreen
                title="Unirse a una sala"
                onPress={() => {if(user==null){user = nickname} navigation.navigate('UnirseSala', {user: user})}}
            />
            <StyledModal
                title="REGLAS"
                text="- Número de jugadores: de 2 a 8
- Duración: 60-120 minutos
- Edad mínima: 8 años
- Al pasar por la casilla de salida el jugador recibe un salario de 267€
- Al caer en una casilla que permite compra y que no tiene propietario, un jugador la puede comprar.
- Al caer en una casilla que tiene propietario, un jugador debe pagarle el dinero establecido en la carta de la casilla.
- Cuando un jugador posee todas las casillas de un grupo de color cobra el doble en cada una de ellas y puede aumentar los créditos de dichas casillas.
- Al caer en una casilla de suerte o de boletiín diario, el jugador recibe una acción a realizar.
- Si un jugador saca tres veces dobles, cae en la casilla de Ve a Julio o recibe una acción de ir a julio, se desplazará a la casilla de Julio sin cobrar si pasa por la salida.
- Un jugador desde la carcel puede modificar sus propiedades.
- Para salir de la carcel, se puede pagar 67€, sacar dobles, usar una carta de Salir de Julio o esperar 3 turnos.
- Los jugadores pueden realizar transacciones económicas entre ellos y con la Banca.
- Un jugador puede poner una asignatura optativa si no está mejorada. Cuando otros jugadores caen en dicha casilla no pagaría.
- Para candelar la optatividad hay que pagar el precio original más un 10% de interés.
- Cuando un jugadores debe más dinero de lo que tiene se declara en bancarrota.
- El juego finaliza cuando solo queda un jugador en pie."
                onClose = { () => {setModalReglasVisible({modalReglasVisible: !modalReglasVisible})}}
                visible={modalReglasVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalReglasVisible({modalReglasVisible: !modalReglasVisible});
                }} 
            />
            <StyledButton
                homeScreen
                title="Reglas"
                onPress={() => setModalReglasVisible(true)}
            />
        </View>
    );
};