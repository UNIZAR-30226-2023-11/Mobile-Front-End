import React, { useCallback, useEffect } from 'react';
import { View, Image, StyleSheet, Pressable, Text, Modal,Dimensions } from 'react-native';
import 
{   FontAwesome, 
    FontAwesome5, 
    MaterialCommunityIcons, 
    Ionicons,
    MaterialIcons,
    Entypo
} from '@expo/vector-icons';
import InputSpinner from 'react-native-input-spinner';
import Spinner from 'react-native-loading-spinner-overlay';


import StyledText from '../components/StyledText';
import StyledModal from '../components/StyledModal';
import StyledModalCompra from '../components/StyledModalCompra';
import StyledModalAsignaturas from '../components/StyledModalAsignaturas';
import StyledModalTimeout from '../components/StyledModalTimeout';
import StyledModalCarcel from '../components/StyledModalCarcel';
import StyledModalPuja from '../components/StyledModalPuja';
import Die from '../components/Die';

import {
    Asignatura_1, 
    Asignatura_2, 
    Asignatura_3,
    Asignatura_4,
    Asignatura_5,
    Asignatura_6,
    Asignatura_7,
    Asignatura_8,
    Recurso,
    Evento
} from '../components/MonopolyCard';

import StyledButton from '../components/StyledButton';
import { SocketContext } from '../components/SocketContext';


const { width } = Dimensions.get('window');
const ancho = width / 12;

const tokens = {
    token1: require('../../assets/token1.png'),
    token2: require('../../assets/token2.png'),
    token3: require('../../assets/token3.png'),
    token4: require('../../assets/token4.png'),
    token5: require('../../assets/token5.png'),
    token6: require('../../assets/token6.png'),
    token7: require('../../assets/token7.png'),
    token8: require('../../assets/token8.png'),
}

const styles = StyleSheet.create({
    pantalla:{
        flex:1,
        flexDirection:'column',
        backgroundColor: '#B5F2B3'
    },
    header:{
        flex: 0.3,
        marginTop:'5%',
        alignItems:'center',
    },
    tablero:{
        flex:3.5,
        flexDirection: 'column',
        marginTop:'5%'
    },
    info:{
        flex:1,
        flexDirection:'column',
        marginTop:'10%'
    },
    jugadores:{
        flex:0.5,
        flexDirection:'column',
        justifyContent: 'flex-start'
    },
    jugador:{
        flex:0.5,
        flexDirection:'row',
        justifyContent: 'flex-start'
    },
    asignaturas:{
        flex:0.6,
        justifyContent: 'flex-start',
        flexDirection:'row', 
        width:'100%',
    },
    botones:{
        flex: 1,
        marginLeft:'5%',
        marginRight: '5%',
        marginTop:'0%',
        marginBottom:'3.5%',
    },
    cursos3_1:{
        flex: 5,
        flexDirection:'column',
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    curso1:{
        position: 'absolute',
        flex: 1,
        marginLeft: ancho,
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginTop: ancho*(9+1.5)
    },
    curso2: {
        position: 'absolute',
        justifyContent: 'flex-start',
        flex: 2,
        flexDirection:'column',
    },
    curso3:{
        position: 'absolute',
        flex: 1,
        marginLeft: ancho,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    curso4:{
        position: 'absolute',
        alignItems: 'flex-end',
        flex: 2,
        flexDirection:'column',
        marginLeft: '88%'
    },
    dados:{
        flex:1,
        position: 'absolute',
        alignItems: 'center',
        marginTop:'40%',
        marginLeft :'0%'
    },
    space:{
        alignSelf: 'stretch',
        backgroundColor: '#EAEAEA'
    },
    casilla_horizontal:{
        width: ancho,
        height: ancho*1.5,
        borderColor: '#000000',
        borderWidth: 1
    },
    casilla_vertical:{
        width: ancho*1.5,
        height: ancho,
        borderColor: '#000000',
        borderWidth: 1
    },
    casilla_esquina:{
        width: ancho*1.5,
        height: ancho*1.5,
        borderColor: '#000000',
        borderWidth: 1
    },
    julio:{
        flex:1,
        width: '100%',
        height: '100%',
        borderColor:'#000000',
        borderWidth:1,
        alignSelf:'flex-end'
    },
    grupo_1:{
        backgroundColor: '#e01a98',
    },
    grupo_2:{
        backgroundColor: '#8b4a9f'
    },
    grupo_3:{
        backgroundColor: '#4a34c5'
    },
    grupo_4:{
        backgroundColor: '#25a3e8'
    },
    grupo_5:{
        backgroundColor: '#18ca0c'
    },
    grupo_6:{
        backgroundColor: '#f6ee02'
    },
    grupo_7:{
        backgroundColor: '#f06809'
    },
    grupo_8:{
        backgroundColor: '#f82102'
    },
    precio_vertical_1linea:{
        marginTop:'60%'
    },
    precio_vertical_2lineas:{
        marginTop:'20%'
    },
    precio_horizontal_1linea:{
        marginTop:'7%'
    },
    spinnerText: {
        color: '#FFF',
      },
});


export default function TableroScreen({route}) {

    const {socket} = React.useContext(SocketContext);
    //const idPartida = route.params.idPartida;
    const username = route.params.user;
    const idPartida = route.params.idPartida;
    const [jugadores, setJugadores] = React.useState(route.params.nombreJugadores);
    const [tokensJugadores, setTokensJugador] = React.useState(route.params.posicionJugadores);
    const normas = {
        puja: true
    }
   
    const [dinero, setDinero] = React.useState(route.params.dineroJugadores);

    const [die1, setDie1] = React.useState(1);
    const [die2, setDie2] = React.useState(1);
    const [dobles, setDobles] = React.useState(false);
    const [contadorDobles, setContadorDobles] = React.useState(0);
    //pedir a la base de datos
    
    const casillas_suerte=[
        {horizontal: 3, vertical:10},
        {horizontal: 2, vertical:0},
        {horizontal: 10, vertical:6}
    ];
    const casillas_boletin=[
        {horizontal: 8, vertical:10},
        {horizontal: 0, vertical:3},
        {horizontal: 10, vertical:3},
    ];
    const casillas_esquinas=[
        {horizontal: 10, vertical:10},
        {horizontal: 0, vertical:10},
        {horizontal: 0, vertical:0},
        {horizontal: 10, vertical:0}
    ];
    const casillas_pagos=[
        {horizontal: 6, vertical:10},
        {horizontal: 10, vertical:8},
    ]

    const [modalAsignaturasVisible, setModalAsignaturasVisible] = React.useState(false);
    const [modalCompraVisible, setModalCompraVisible] = React.useState(false);
    const [modalAsignaturaCompradaVisible, setModalAsignaturaCompradaVisible] = React.useState(false);
    const [modalSuerteVisible, setModalSuerteVisible] = React.useState(false);
    const [modalBoletinVisible, setModalBoletinVisible] = React.useState(false);
    const [modalCreditosVisible, setModalCreditosVisible] = React.useState(false);
    const [modalEsMiaVisible, setModalEsMiaVisible] = React.useState(false);
    const [modalTimeoutVisible, setModalTimeoutVisible] = React.useState(false);
    const [modalOfertaVisible, setModalOfertaVisible] = React.useState(false);
    const [modalCarcelVisible, setModalCarcelVisible] = React.useState(false);
    const [modalPujaVisible, setModalPujaVisible] = React.useState(false);

    const [compra, setCompra] = React.useState(false);
    const [aumentoCreditos, setAumentoCreditos] = React.useState(false);
    // const [actualizarPlayers, setActualizarPlayers] = React.useState(true);
    const [comprobar, setComprobar] = React.useState(false);
    const [cambio, setCambio] = React.useState(false);
    const [info, setInfo] = React.useState(false);

    const [isLoading, setIsLoading] = React.useState(false);

    const [carta,setCarta] = React.useState();
    const [propietario, setPropietario] = React.useState("");
    const [pago, setPago] = React.useState(0);
    const [boletin, setBoletin] = React.useState({nombre: '', descripcion: ''});
    const [suerte, setSuerte] = React.useState({nombre:'', descripcion: ''});

    //variable para guardar las asignaturas del jugador
    const [asignaturas, setAsignaturas] = React.useState([{nombre:"", h:"", v:"", disminuir: false, hipotecar: false}]);

    //variable para registrar el turno del jugador
    const [turnoActual, setTurnoActual] = React.useState(0);

    //variable para saber si el jugador está en la carcel
    const [carcel, setCarcel] = React.useState(false);
    const [cartaJulio, setCartaJulio] = React.useState(false);
    const [pagarJulio, setPagarJulio] = React.useState(true);

    //variables para controlar el timeout del turno
    const [reiniciarContador, setReiniciarContador] = React.useState(false);
    const [intervalContador, setIntervalContador] = React.useState(null);
    const [detenidoContador, setDetenidoContador] = React.useState(true);
    const [contador, setContador] = React.useState(90000);

    const [precioTrade, setPrecioTrade] = React.useState(null);

    const [asignaturaPuja, setAsignaturaPuja] = React.useState();

    const stylestoken = StyleSheet.create({
        token1:{
            position: 'absolute',
            width: ancho-15,
            height: ancho-15,
            marginLeft: tokensJugadores[0] && ancho*(tokensJugadores[0].h+0.4),
            marginTop: tokensJugadores[0] && ancho*(tokensJugadores[0].v+0.4)
        },
        token2:{
            position: 'absolute',
            width:ancho-15,
            height:ancho-15,
            marginLeft: tokensJugadores[1] && ancho*(tokensJugadores[1].h+0.4),
            marginTop: tokensJugadores[1] && ancho*(tokensJugadores[1].v+0.75),
        },
        token3:{
            position: 'absolute',
            width:ancho-15,
            height:ancho-15,
            marginLeft: tokensJugadores[2] && ancho*(tokensJugadores[2].h+0.4),
            marginTop: tokensJugadores[2] && ancho*(tokensJugadores[2].v+1.05),
        },
        token4:{
            position: 'absolute',
            width:ancho-15,
            height:ancho-15,
            marginLeft: tokensJugadores[3] && ancho*(tokensJugadores[3].h+0.4),
            marginTop: tokensJugadores[3] && ancho*(tokensJugadores[3].v+1.35)
        },
        token5:{
            position: 'absolute',
            width:ancho-15,
            height:ancho-15,
            marginLeft: tokensJugadores[4] && ancho*(tokensJugadores[4].h+0.82),
            marginTop: tokensJugadores[4] && ancho*(tokensJugadores[4].v+0.4),
        },
        token6:{
            position: 'absolute',
            width:ancho-15,
            height:ancho-15,
            marginLeft: tokensJugadores[5] && ancho*(tokensJugadores[5].h+0.82),
            marginTop: tokensJugadores[5] && ancho*(tokensJugadores[5].v+0.75),
        },
        token7:{
            position: 'absolute',
            width:ancho-15,
            height:ancho-15,
            marginLeft: tokensJugadores[6] && ancho*(tokensJugadores[6].h + 0.82),
            marginTop: tokensJugadores[6] &&  ancho*(tokensJugadores[6].v + 1.05),
        },
        token8:{
            position: 'absolute',
            width:ancho-15,
            height:ancho-15,
            marginLeft: tokensJugadores[7] && ancho*(tokensJugadores[7].h + 0.82),
            marginTop: tokensJugadores[7] && ancho*(tokensJugadores[7].v + 1.35),
        }
    })

    function Dice(){

        function roll(){
            //si no es el turno del jugador
            if (jugadores[turnoActual] != username){
                alert("¡No es tu turno de lanzar los dados! Le toca a "+jugadores[turnoActual]);
                return;
            }
            setIsLoading(true);
            setReiniciarContador(true);
            console.log("rolling dice...");
            setDobles(false);
            socket.emit('lanzarDados', {
                socketId: socket.id
              }, (ack) => {
                setIsLoading(false);
                console.log('Server acknowledged dados:', ack);
                if(ack.cod == 0){
                    // setRandDados(false);
                    setDie1(ack.msg.dado1);
                    setDie2(ack.msg.dado2);
                    //setRolling(true);
                    let aux = tokensJugadores;
                    aux[turnoActual].h = ack.msg.coordenadas.h;
                    aux[turnoActual].v = ack.msg.coordenadas.v;
                    // aux[turnoActual].h = 2;
                    // aux[turnoActual].v = 10;
                    console.log(aux);
                    setTokensJugador(aux);
                    setComprobar(true);
                    if(ack.msg.dobles == 3){
                        cambiarTurno();
                    }
                    else{
                        if(ack.msg.dado1 == ack.msg.dado2){
                            // if(carcel){
                            //     setCarcel(false);
                            // }
                            setDobles(true);
                            if(contadorDobles == 2){
                                alert("Te toca ir a Julio");
                                //cambiar lo siguiente por llamada al back cnd esté
                                let aux = tokensJugadores;
                                aux[turnoActual].h = 0;
                                aux[turnoActual].v = 10;
                                console.log(aux);
                                setTokensJugador(aux);
                                setCarcel(true);
                                cambiarTurno();
                            }else{
                                setContadorDobles(contadorDobles+1);
                            }
                        }
                        else if(carcel){
                            console.log("estas en la carcel");
                            cambiarTurno();
                        }
                    }
                }
                else if(ack.cod == 2){
                    alert("Se ha producido un error en el servidor. Vuelva a lanzar los dados");
                }
              });
        }
    
        return(
            <View>
                <Pressable  style={{flex:1, flexDirection:'row', alignSelf:'center'}} onPress={() => {roll();}}>
                    <Die face = {die1}></Die>
                    <Die face = {die2}></Die>
                </Pressable>
            </View>
            
        )
    }

    const comprobarAsignatura = useCallback(() => {
        console.log("comprobando casilla para el turno", turnoActual);
        console.log(tokensJugadores[0]);
        let found = casillas_suerte.find(element => element.horizontal===tokensJugadores[turnoActual].h && element.vertical===tokensJugadores[turnoActual].v);
        if(found === undefined){
            let found = casillas_boletin.find(element => element.horizontal===tokensJugadores[turnoActual].h && element.vertical===tokensJugadores[turnoActual].v);
            if(found === undefined){
                let found = casillas_esquinas.find(element => element.horizontal===tokensJugadores[turnoActual].h && element.vertical===tokensJugadores[turnoActual].v);
                if( found === undefined){
                    let found = casillas_pagos.find(element => element.horizontal===tokensJugadores[turnoActual].h && element.vertical===tokensJugadores[turnoActual].v);
                    if( found === undefined){
                        console.log("comprobando asignatura", tokensJugadores[turnoActual].h, tokensJugadores[turnoActual].v);
                        socket.emit('casilla', {
                            coordenadas: {h: tokensJugadores[turnoActual].h, v: tokensJugadores[turnoActual].v},
                            socketId: socket.id
                        },
                        (ack)=>{
                            if(ack.cod == 5){
                                console.log("comprada");
                                console.log(ack.msg);
                                setPropietario(ack.msg.jugador);
                                setPago(ack.msg.dinero);
                                setModalAsignaturaCompradaVisible(true);
                            }
                            else if(ack.cod == 6){
                                console.log("es mia");
                                infoCasilla(true, true);
                            }
                            else if(ack.cod == 7){
                                console.log("es mia");
                                infoCasilla(true, false);
                            }
                            else if(ack.cod == 8){
                                console.log("no comprada");                
                                infoCasilla(false, false);
                            }
                            else if(ack.cod == 2){
                                comprobarAsignatura();
                            }
                        })
                    }
                    else{
                        console.log("pagos");
                        //accion
                    }
                }else{
                    console.log("esquina");
                    //accion
                    if(tokensJugadores[turnoActual].h==10 && tokensJugadores[turnoActual].v==0 ){
                        console.log("carcel");
                        alert("Te toca ir a Julio");
                        //cambiar lo siguiente por llamada al back cuando este 
                        let aux = tokensJugadores;
                        aux[turnoActual].h = 0;
                        aux[turnoActual].v = 10;
                        console.log(aux);
                        setTokensJugador(aux);
                        setCarcel(true);
                    }
                }
            }else{
                //console.log("boletin");
                console.log("obteniendo boletín");
                socket.emit('boletin',{
                    socketId: socket.id
                },
                (ack)=>{
                    if(ack.cod == 0){
                        let aux = {nombre: ack.msg.nombre, descripcion: ack.msg.descripcion};
                        console.log(aux);
                        setBoletin(aux);
                        setModalBoletinVisible(true);
                    }
                    else if(ack.cod == 2){
                        comprobarAsignatura();
                    }
                })
               
            }
        }else{
            // console.log("obteniendo suerte", tarjetaAleatoria);
            socket.emit('suerte',{
                socketId: socket.id
            },
            (ack)=>{
                if(ack.cod == 0){
                    let aux = {nombre: ack.msg.nombre, descripcion: ack.msg.descripcion};
                    console.log(aux);
                    setSuerte(aux);
                    setModalSuerteVisible(true);
                }
                else if(ack.cod == 2){
                    comprobarAsignatura();
                }
            }) 
        }
    });

    const infoCasilla= useCallback((esMia, aumento) => {
        socket.emit('infoAsignatura',{
            coordenadas:{h: tokensJugadores[turnoActual].h,v: tokensJugadores[turnoActual].v} 
        },
        (ack)=> {
            if(ack.msg.tipo == 'A'){
                console.log("asignatura ", ack.msg.cuatrimestre);
                switch(ack.msg.cuatrimestre){
                    case 1:
                        setCarta(<Asignatura_1
                            title={ack.msg.nombre}
                            coste={ack.msg.precioCompra}
                            matricula={ack.msg.matricula}
                            precio1C={ack.msg.precio1C}
                            precio2C={ack.msg.precio2C}
                            precio3C={ack.msg.precio3C}
                            precio4C={ack.msg.precio4C}
                            optatividad={ack.msg.devolucionMatricula}
                            precioCredito={ack.msg.precioCompraCreditos}
                        />);
                        break; 
                    case 2:
                        setCarta(<Asignatura_2
                            title={ack.msg.nombre}
                            coste={ack.msg.precioCompra}
                            matricula={ack.msg.matricula}
                            precio1C={ack.msg.precio1C}
                            precio2C={ack.msg.precio2C}
                            precio3C={ack.msg.precio3C}
                            precio4C={ack.msg.precio4C}
                            optatividad={ack.msg.devolucionMatricula}
                            precioCredito={ack.msg.precioCompraCreditos}
                        />);
                        break; 
                    case 3:
                        setCarta(
                        <Asignatura_3
                            title={ack.msg.nombre}
                            coste={ack.msg.precioCompra}
                            matricula={ack.msg.matricula}
                            precio1C={ack.msg.precio1C}
                            precio2C={ack.msg.precio2C}
                            precio3C={ack.msg.precio3C}
                            precio4C={ack.msg.precio4C}
                            optatividad={ack.msg.devolucionMatricula}
                            precioCredito={ack.msg.precioCompraCreditos}
                        />);
                        break; 
                    case 4:
                        setCarta(                                            
                        <Asignatura_4
                            title={ack.msg.nombre}
                            coste={ack.msg.precioCompra}
                            matricula={ack.msg.matricula}
                            precio1C={ack.msg.precio1C}
                            precio2C={ack.msg.precio2C}
                            precio3C={ack.msg.precio3C}
                            precio4C={ack.msg.precio4C}
                            optatividad={ack.msg.devolucionMatricula}
                            precioCredito={ack.msg.precioCompraCreditos}
                        />);
                        break; 
                    case 5:
                        setCarta(                                            
                        <Asignatura_5
                           title={ack.msg.nombre}
                            coste={ack.msg.precioCompra}
                            matricula={ack.msg.matricula}
                            precio1C={ack.msg.precio1C}
                            precio2C={ack.msg.precio2C}
                            precio3C={ack.msg.precio3C}
                            precio4C={ack.msg.precio4C}
                            optatividad={ack.msg.devolucionMatricula}
                            precioCredito={ack.msg.precioCompraCreditos}
                        />);
                        break;  
                    case 6:
                        setCarta(                                            
                        <Asignatura_6
                            title={ack.msg.nombre}
                            coste={ack.msg.precioCompra}
                            matricula={ack.msg.matricula}
                            precio1C={ack.msg.precio1C}
                            precio2C={ack.msg.precio2C}
                            precio3C={ack.msg.precio3C}
                            precio4C={ack.msg.precio4C}
                            optatividad={ack.msg.devolucionMatricula}
                            precioCredito={ack.msg.precioCompraCreditos}
                        />);
                        break; 
                    case 7:
                        setCarta(                                            
                        <Asignatura_7
                            title={ack.msg.nombre}
                            coste={ack.msg.precioCompra}
                            matricula={ack.msg.matricula}
                            precio1C={ack.msg.precio1C}
                            precio2C={ack.msg.precio2C}
                            precio3C={ack.msg.precio3C}
                            precio4C={ack.msg.precio4C}
                            optatividad={ack.msg.devolucionMatricula}
                            precioCredito={ack.msg.precioCompraCreditos}
                        />);
                        break; 
                    case 8:
                        setCarta(                                            
                        <Asignatura_8
                            title={ack.msg.nombre}
                            coste={ack.msg.precioCompra}
                            matricula={ack.msg.matricula}
                            precio1C={ack.msg.precio1C}
                            precio2C={ack.msg.precio2C}
                            precio3C={ack.msg.precio3C}
                            precio4C={ack.msg.precio4C}
                            optatividad={ack.msg.devolucionMatricula}
                            precioCredito={ack.msg.precioCompraCreditos}
                        />);
                        break; 
                }
                if(esMia && aumento){
                    console.log("aumentar creditos");
                    setAumentoCreditos(true);
                }
                else if(esMia && !aumento){
                    setModalEsMiaVisible(true);
                }else if(!esMia){
                    setCompra(true);
                }
            }
            else if(ack.msg.tipo == 'F'){
                //console.log("evento");
                setCarta(                                    
                <Evento
                    title={ack.msg.nombre}
                    coste={ack.msg.precioCompra}
                    matricula={ack.msg.matricula}
                    precio1C={ack.msg.precio1C}
                    precio2C={ack.msg.precio2C}
                    precio3C={ack.msg.precio3C}
                    optatividad={ack.msg.devolucionMatricula}
                    imageSource={require('../../assets/bob.png')}
                />);
                if(!esMia){
                    setCompra(true);
                }
            }
            else if(ack.msg.tipo == 'I'){
                //console.log("recurso");
                setCarta(                                   
                <Recurso
                    title={ack.msg.nombre}
                    coste={ack.msg.precioCompra}
                    optatividad={ack.msg.devolucionMatricula}
                    imageSource={require('../../assets/bob.png')}
                />);
                if(!esMia){
                    setCompra(true);
                }
            }
            //console.log(carta);
        })
    });

    const cambiarTurno = useCallback(() => {
        socket.emit('siguienteTurno', {
            socketId: socket.id
          }, (ack) => {
            console.log('Server acknowledged siguiente turno:', ack);
            if(ack.cod == 0){
                console.log("TURNO:",ack.msg);
                setTurnoActual(ack.msg.posicion);
                // setDetenidoActualizaInfo(false);
                setContadorDobles(0);
                // setActualizarPlayers(true);
                //console.log("Turno " + turnoActual +". Le toca a "+jugadores[turnoActual] +". Total jugadores: "+totalJugadores);
                //console.log(data);
            }
            else if(ack.cod == 2){
                cambiarTurno();
            }
          });
    })

    useEffect(() =>{
        socket.on('infoPartida',(mensaje) => {
            console.log('Mensaje recibido infoPartida: ' + mensaje);
            console.log(mensaje);
            setDinero(mensaje.dineroJugadores);
            let aux = tokensJugadores;
            // console.log(aux);
            
            for(var i=0; i<mensaje.posicionJugadores.length; i++){
                aux[i].h = mensaje.posicionJugadores[i].h;
                aux[i].v = mensaje.posicionJugadores[i].v;
                console.log(aux[i]);
            }
            setTokensJugador(aux);
        });
            
        socket.on('turnoActual',(mensaje) => {
            console.log('Mensaje recibido turno: ' + mensaje);
            console.log(mensaje);
            setTurnoActual(mensaje.posicion);
            if(mensaje.jugador == username){
                // setDetenidoActualizaInfo(true);
                if(jugadores[turnoActual] == username){
                    // socket.emit('estaJulio',{
                    //     socketId: socket.id
                    // },
                    // (ack) => {
                    //     console.log("Server acknowledge estaJulio "+ mensaje);
                    //     if(ack.carcel){
                    //         setModalCarcelVisible(true);
                    //     }
                    //     if(ack.carta != null){
                    //         setCartaJulio(true);
                    //     }
                    //     if(ack.puedePagar){
                    //         setPagarJulio(true);
                    //     }
                    // })
                    setReiniciarContador(true);
                    // setDetenidoContador(false);
                }
                
            }
        });

        socket.on('hayPuja',(mensaje)=>{
            console.log("Mensaje recibido puja: " + mensaje);
            setAsignaturaPuja(mensaje);
            setModalPujaVisible(true);
        });

        socket.on('actualizarPuja',(mensaje)=>{

        });

        socket.on('ofertaRecibida',(mensaje) =>{
            console.log("Mensaje recibido oferta: " + mensaje);
            setModalOfertaVisible(true);
        });

        console.log(jugadores[turnoActual], username);

    },[])

    useEffect(() =>{
        console.log("contador cambiado ", contador);
        if(contador == 0){
            setDetenidoContador(true);
            setModalTimeoutVisible(true);
        }
    }, [contador])

    useEffect(() =>{
        if(reiniciarContador){
            setContador(90000);
            setReiniciarContador(false);
        }
    },[reiniciarContador]);

    useEffect(() =>{
        if(detenidoContador){
            clearInterval(intervalContador);
            setIntervalContador(null);
            // setContadorEnEjecucion(false);
        }else{
            const id = setInterval(() => {
            setContador(contador => contador - 1000);
            }, 1000);
        
            setIntervalContador(id);
        }

        return () => {
            clearInterval(intervalContador); // Limpiar intervalo al desmontar el componente
            setIntervalContador(null); // Actualizar estado del intervalo a null
          };
    },[detenidoContador]);

    useEffect(() => {
        if(comprobar){
            setComprobar(false);
            comprobarAsignatura();
        }
    },[comprobar]);

    useEffect(() => {
        if(info){
            setInfo(false);
            infoCasilla();
        }
    },[info]);

    useEffect(() => {
        if(compra){
            setCompra(false);
            setModalCompraVisible(true);
        }
    },[compra]);

    useEffect(() =>{
        if(aumentoCreditos){
            setAumentoCreditos(false);
            setModalCreditosVisible(true);
        }
    },[aumentoCreditos]);
    
    // useEffect (() => {
    //     console.log("TURNO ACTUAL CAMBIADO")
    //     if(detenidoActualizarInfo){
    //         clearInterval(intervalActualizarInfo);
    //         setIntervalActualizarInfo(null);
    //     }else{
    //         const id = setInterval(() => {
    //             console.log("TURNO ACTUAL: ", turnoActual);
    //             actualizarDinero();
    //             console.log("JUGADORES: ", jugadores);
    //             console.log("JUGADOR: ",jugadores[turnoActual]);
    //         },3000);
    //         setIntervalActualizarInfo(id);
    //     }
    //     return () => {clearInterval(intervalActualizarInfo);setIntervalActualizarInfo(null);}
    // },[detenidoActualizarInfo]);

    useEffect(() =>{
        if(cambio){
            setCambio(false);
            cambiarTurno();
        }
    },[cambio]);

    return (
        <View style={styles.pantalla}>
        <View style={styles.header}>
            <StyledText bold big> PARTIDA #{idPartida} </StyledText>
        </View>
        <View style={styles.tablero}>
            <View style={styles.curso2}>
                <View style={styles.casilla_esquina}>
                    <Ionicons name="school" size={26} color="black" style={{marginLeft:'22%', marginTop:'5%'}} />
                    <StyledText titulo_casilla>BECA</StyledText>
                </View>
                <View style={[styles.casilla_vertical, styles.grupo_4]}>
                    <StyledText titulo_casilla>AOC 2</StyledText>
                    <StyledText precio_casilla style={styles.precio_horizontal_1linea}>267€</StyledText>
                </View>
                <View style={[styles.casilla_vertical, styles.grupo_4]}>
                    <StyledText titulo_casilla>IPO</StyledText>
                    <StyledText precio_casilla style={styles.precio_horizontal_1linea}>240€</StyledText>
                </View>
                <View style={styles.casilla_vertical}>
                    <FontAwesome name="newspaper-o" size={26} color="grey" style={{marginLeft:'15%', marginTop:'5%'}}/>
                </View>
                <View style={[styles.casilla_vertical, styles.grupo_4]}>
                    <StyledText titulo_casilla>TPROG</StyledText>
                    <StyledText precio_casilla style={styles.precio_horizontal_1linea}>240€</StyledText>
                </View>
                <View style={[styles.casilla_vertical, {flexDirection:'row'}]}>
                    <MaterialCommunityIcons name="party-popper" size={24} color="black" style={{flex:1}}/>
                    <View style={{flex:1}}>
                        <StyledText casillas_fiesta>PASO</StyledText>
                        <StyledText casillas_fiesta>ECUADOR</StyledText>  
                    </View>
                </View>
                <View style={[styles.casilla_vertical, styles.grupo_3]}>
                    <StyledText titulo_casilla>REDES</StyledText>
                    <StyledText precio_casilla style={styles.precio_horizontal_1linea}>213€</StyledText>
                </View>
                <View style={[styles.casilla_vertical, styles.grupo_3]}>
                    <StyledText titulo_casilla>EDA</StyledText>
                    <StyledText precio_casilla style={styles.precio_horizontal_1linea}>187€</StyledText>
                </View>
                <View style={[styles.casilla_vertical, {flexDirection:'row'}]}>
                    <MaterialIcons name="electrical-services" size={26} color="black" />
                    <StyledText precio_casilla>ELE</StyledText>
                </View>
                <View style={[styles.casilla_vertical, styles.grupo_3]}>
                    <StyledText titulo_casilla>SO</StyledText>
                    <StyledText precio_casilla style={styles.precio_horizontal_1linea}>187€</StyledText>
                </View>
                <View style={[styles.casilla_esquina, {flexDirection:'column'}]}>
                    <View style={{flexDirection:'row', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <View style={{flexDirection:'column'}}>
                            <StyledText titulo_casilla>D</StyledText>
                            <StyledText titulo_casilla>E</StyledText>
                        </View>
                        <View style={styles.julio}>
                            <StyledText titulo_casilla style={{marginTop:'25%'}}>JULIO</StyledText>
                        </View>
                    </View>
                    <StyledText titulo_casilla>PASO</StyledText>
                </View>
            </View>
            <View style={styles.cursos3_1}>
                <View style={styles.curso3}>
                    <View style={[styles.casilla_horizontal, styles.grupo_5]}>
                    <StyledText titulo_casilla>IA</StyledText>
                        <StyledText precio_casilla style={styles.precio_vertical_1linea}>293€</StyledText>
                    </View>
                    <View style={styles.casilla_horizontal}>
                    <FontAwesome5 name="question" size={26} color="grey" style={{marginLeft:'18%', marginTop:'30%'}}/>
                    </View>
                    <View style={[styles.casilla_horizontal, styles.grupo_5]}>
                    <StyledText titulo_casilla>SSDD</StyledText>
                        <StyledText precio_casilla style={styles.precio_vertical_1linea}>293€</StyledText>
                    </View>
                    <View style={[styles.casilla_horizontal, styles.grupo_5]}>
                    <StyledText titulo_casilla>PH</StyledText>
                        <StyledText precio_casilla style={styles.precio_vertical_1linea}>320€</StyledText>
                    </View>
                    <View style={styles.casilla_horizontal}>
                    <MaterialCommunityIcons name="party-popper" size={24} color="black" style={{marginLeft:'15%'}}/>
                        <StyledText casillas_fiesta>SAN</StyledText>
                        <StyledText casillas_fiesta>PEPE</StyledText>
                    </View>
                    <View style={[styles.casilla_horizontal, styles.grupo_6]}>
                    <StyledText titulo_casilla>SIS INF 2</StyledText>
                        <StyledText precio_casilla style={styles.precio_vertical_2lineas}>347€</StyledText>
                    </View>
                    <View style={[styles.casilla_horizontal, styles.grupo_6]}>
                        <StyledText titulo_casilla>PROC LEN</StyledText>
                        <StyledText precio_casilla style={styles.precio_vertical_2lineas}>347€</StyledText>
                    </View>
                    <View style={styles.casilla_horizontal}>
                        <MaterialCommunityIcons name="air-conditioner" size={26} color="black" style={{marginLeft:'10%', marginTop:'5%'}} />
                        <StyledText precio_casilla style={{marginTop:'15%'}}>CALEF</StyledText>
                    </View>
                    <View style={[styles.casilla_horizontal, styles.grupo_6]}>
                        <StyledText titulo_casilla>PS</StyledText>
                        <StyledText precio_casilla style={styles.precio_vertical_1linea}>373€</StyledText>
                    </View>
                </View>
                <View style={styles.dados}>
                    {jugadores[turnoActual]==username && 
                    <Text style={{fontSize:16, textAlign: 'center'}}>
                    {`Tiene ${Math.floor(contador/60000)} minutos y ${Math.floor((contador%60000)/1000)} segundos\n para jugar.`}
                    </Text>
                    } 
                    {jugadores[turnoActual]!=username &&
                    <StyledText medium style={{textAlign: 'center'}}>
                        Es el turno de {jugadores[turnoActual]}
                    </StyledText>
                    }
                    <Dice></Dice>
                    <Spinner
                        visible={isLoading}
                        textContent={''}
                        textStyle={styles.spinnerText}
                        overlayColor={'transparent'}
                    />
                </View>
                <View style={styles.curso1}>
                    <View style={[styles.casilla_horizontal, styles.grupo_2]}>
                        <StyledText titulo_casilla>AOC1</StyledText>
                        <StyledText precio_casilla style={styles.precio_vertical_1linea}>160€</StyledText>
                    </View>
                    <View style={[styles.casilla_horizontal, styles.grupo_2]}>
                        <StyledText titulo_casilla style>FIS</StyledText>
                        <StyledText precio_casilla style={styles.precio_vertical_1linea}>133€</StyledText>
                    </View>
                    <View style={styles.casilla_horizontal}>
                    <FontAwesome5 name="question" size={26} color="grey" style={{marginLeft:'18%', marginTop:'30%'}}/>
                    </View>
                    <View style={[styles.casilla_horizontal, styles.grupo_2]}>
                        <StyledText titulo_casilla>PROG2</StyledText>
                        <StyledText precio_casilla style={styles.precio_vertical_2lineas}>133€</StyledText>
                    </View>
                    <View style={styles.casilla_horizontal}>
                        <MaterialCommunityIcons name="party-popper" size={24} color="black" style={{marginLeft:'15%'}}/>
                        <StyledText casillas_fiesta>SAN</StyledText>
                        <StyledText casillas_fiesta>BRAU.</StyledText>
                    </View>
                    <View style={styles.casilla_horizontal}>
                        <StyledText casillas_fiesta style={{marginTop:'35%'}}>ABRIR</StyledText>
                        <StyledText casillas_fiesta>EXPDTE</StyledText>
                    </View>
                    <View style={[styles.casilla_horizontal, styles.grupo_1]}>
                        <StyledText titulo_casilla>IC</StyledText>
                        <StyledText precio_casilla style={styles.precio_vertical_1linea}>80€</StyledText>
                    </View>
                    <View style={styles.casilla_horizontal}>
                        <FontAwesome name="newspaper-o" size={26} color="grey" style={{marginTop:'35%'}}/>
                    </View>
                    <View style={[styles.casilla_horizontal, styles.grupo_1]}>
                        <StyledText titulo_casilla>PROG 1</StyledText>
                        <StyledText precio_casilla style={styles.precio_vertical_2lineas}>80€</StyledText>
                    </View>
                </View>
            </View>
            <View style={styles.curso4}>
                <View style={styles.casilla_esquina}>
                    <MaterialCommunityIcons name="file-remove-outline" size={26} color="black" style={{marginLeft:'25%', marginTop:'5%'}} />
                    <StyledText titulo_casilla style={{marginTop:'2%'}}>A JULIO</StyledText>
                </View>
                <View style={[styles.casilla_vertical, styles.grupo_7]}>
                    <StyledText titulo_casilla>ROB</StyledText>
                    <StyledText precio_casilla style={styles.precio_horizontal_1linea}>400€</StyledText>
                </View>
                <View style={[styles.casilla_vertical, styles.grupo_7]}>
                    <StyledText titulo_casilla>STW</StyledText>
                    <StyledText precio_casilla style={styles.precio_horizontal_1linea}>400€</StyledText>
                </View>
                <View style={styles.casilla_vertical}>
                    <FontAwesome name="newspaper-o" size={26} color="grey" style={{marginLeft:'20%', marginTop:'5%'}}/>
                </View>
                <View style={[styles.casilla_vertical, styles.grupo_7]}>
                <StyledText titulo_casilla>SEGUR</StyledText>
                    <StyledText precio_casilla style={styles.precio_horizontal_1linea}>427€</StyledText>
                </View>
                <View style={[styles.casilla_vertical, {flexDirection:'row'}]}>
                    <MaterialCommunityIcons name="party-popper" size={24} color="black" style={{flex:1}}/>
                    <View style={{flex:1}}>
                        <StyledText casillas_fiesta>FIN</StyledText>
                        <StyledText casillas_fiesta>CARRERA</StyledText>  
                    </View>
                </View>
                <View style={styles.casilla_vertical}>
                    <FontAwesome5 name="question" size={26} color="grey" style={{marginLeft:'25%', marginTop:'5%'}}/>
                </View>
                <View style={[styles.casilla_vertical, styles.grupo_8]}>
                    <StyledText titulo_casilla>PRACTS</StyledText>
                    <StyledText precio_casilla style={styles.precio_horizontal_1linea}>467€</StyledText>
                </View>
                <View style={styles.casilla_vertical}>
                    <StyledText casillas_fiesta style={{marginTop:'10%'}}>SEGURO</StyledText>
                    <StyledText casillas_fiesta>ESCOLAR</StyledText>
                </View>
                <View style={[styles.casilla_vertical, styles.grupo_8]}>
                    <StyledText titulo_casilla>TFG</StyledText>
                    <StyledText precio_casilla style={styles.precio_horizontal_1linea}>533€</StyledText>
                </View>
                <View style={styles.casilla_esquina}>
                    <StyledText titulo_casilla style={{marginTop:'10%'}}>SALIDA</StyledText>
                    <MaterialCommunityIcons name="arrow-left-bottom-bold" size={24} color="red" style={{marginLeft:'20%'}} />
                </View>
            </View>
            {/* funciona bien, muestra tantos tokens de jugadores como hay */}
            {
                jugadores.map((value, index) => (
                <Image
                key={index}
                style={stylestoken[`token${index+1}`]}
                source={tokens[`token${index+1}`]}  
                />
            ))
            }
        </View>

        <View style={styles.info}>
            <View style={styles.jugadores}>
                <View style={styles.jugador}>
                    {jugadores.map((jugador, i) =>(
                        <StyledText key={i+1} style={{marginLeft:'2%'}}>{jugador} {dinero[i]}</StyledText>
                    ))}
                </View>
            </View>
            <View style={styles.asignaturas}>
            <StyledModalAsignaturas
                title="MIS ASIGNATURAS"
                asignaturas={asignaturas}
                username={username}
                idPartida={idPartida}   
                onClose = { () => {setModalAsignaturasVisible({modalAsignaturasVisible: !modalAsignaturasVisible})}}
                visible={modalAsignaturasVisible}
                miTurno={jugadores[turnoActual]==username}
                onRequestClose={() => {
                    setModalAsignaturasVisible({modalAsignaturasVisible: !modalAsignaturasVisible});
                }} 
                />
                <StyledButton
                style={styles.botones}
                purple
                small
                title="Asignaturas"
                onPress={() => {
                    setReiniciarContador(true);
                    socket.emit('listaAsignaturasC',{
                        socketId: socket.id
                    },
                    (ack) => {
                        if(ack.cod==0){
                            console.log("Asignaturas:\n ",ack.msg);
                            let vector = new Array();
                            for(let i = 0; i<ack.msg.length; i++) {
                                let aux = { nombre: ack.msg[i].nombre,
                                            h: ack.msg[i].coordenadas.h, 
                                            v: ack.msg[i].coordenadas.v,
                                            disminuir: true,
                                            hipotecar: true}
                                vector.push(aux);
                            }
                            console.log(vector);
                            setAsignaturas(vector);
                            setModalAsignaturasVisible(true);
                        }
                        else if(ack.cod == 2){
                            alert("Se ha producido un error en el servidor. Por favor vuelva a intentarlo");
                        }
                    })
                    // const response =  fetch(listarAsignaturas, {
                    // method: 'PUT',
                    // headers: {'Content-Type': 'application/json'},
                    // body: JSON.stringify({  "username": username,
                    //                         "idPartida": idPartida})
                    // })
                    // .then((response) => {
                    // if(response.status != 200){
                    //     throw new Error('Error de estado: '+ response.status+ ' en la función de listar asignaturas');
                    // }
                    // return response.json();
                    // })
                    // .then(data => {
                    //     console.log("Asignaturas:\n ",data);
                    //     let vector = new Array();
                    //     for(let i = 0; i<data.casillas.length; i++) {
                    //         let aux = { nombre: data.casillas[i].nombre,
                    //                     h: data.casillas[i].coordenadas.h, 
                    //                     v: data.casillas[i].coordenadas.v }
                    //         vector.push(aux);
                    //     }
                    //     console.log(vector);
                    //     setAsignaturas(vector);
                    //     setModalAsignaturasVisible(true);
                    // })
                    // .catch((error) => {
                    // //Error
                    // //alert(JSON.stringify(error));
                    // console.error(error);
                    // });
                    }}
                /><StyledButton
                style={styles.botones}
                red
                small
                title="Bancarrota"
                onPress={() => {
                    setReiniciarContador(true);
                    console.log("Bancarrota");
                    socket.emit('bancarrota',{},
                    (ack) => {
                        if(ack.cod == 0){
                            //navegar
                        }
                        else if(ack.cod == 2){
                            alert("Se ha producido un error. Por favor vuelva a intentarlo");
                        }
                    })}}
                    // const response = fetch(bancarrota,{
                    //     method: 'POST',
                    //     headers: {'Content-Type': 'application/json'},
                    //     body: JSON.stringify({  "idPartida": idPartida, 
                    //                             "username": username})
                    //     .then((response) => {
                    //         if(response.status!= 200){
                    //             throw new Error('Error de estado: '+ response.status + ' en la función de bancarrota');
                    //         }

                    //     })
                    //     .catch((error) => {
                    //         console.log(error);
                    //     })
                    // })}}
                />
            </View>
        </View>
        <StyledModalCompra
            doubles={dobles}
            title="Comprar"
            text="¿Desea comprar la carta?"
            aumentarCreditos={false}
            esMia={false}
            jugadores={jugadores}
            c_hor={tokensJugadores[turnoActual].h}
            c_ver={tokensJugadores[turnoActual].v}
            username={username}
            idPartida={idPartida}
            InfoCarta = {carta}
            puja={normas.puja}
            onClose={() => {
                setReiniciarContador(true);
                setCompra(false);
                setModalCompraVisible({modalCompraVisible: !modalCompraVisible});
                console.log("cerrado");
                // setModalIntercambiosVisible(true);
                // setActualizarPlayers(true);                      
            }}
            acabarTurno={()=>{
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
            }}
            visible={modalCompraVisible}
            onRequestClose={() =>{
                setReiniciarContador(true);
                setCompra(false);
                setModalCompraVisible({modalCompraVisible: !modalCompraVisible});
                console.log("cerrado");
            }}
        />
        <StyledModalCompra
            doubles={dobles}
            title="Aumentar créditos"
            text="¿Desea aumentar los créditos?"
            aumentarCreditos={true}
            esMia={true}
            jugadores={jugadores}
            c_hor={tokensJugadores[turnoActual].h}
            c_ver={tokensJugadores[turnoActual].v}
            username={username}
            idPartida={idPartida}
            InfoCarta = {carta}
            puja={normas.puja}
            onClose={() => {
                setReiniciarContador(true);
                setAumentoCreditos(false);
                setModalCreditosVisible({modalCreditosVisible: !modalCreditosVisible});
                console.log("cerrado");                       
            }} 
            acabarTurno={()=>{
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
            }}
            visible={modalCreditosVisible}
            onRequestClose={() =>{
                setReiniciarContador(true);
                setAumentoCreditos(false);
                setModalCreditosVisible({modalCreditosVisible: !modalCreditosVisible});
                console.log("cerrado");
            }}
        />
        <StyledModalCompra
            doubles={dobles}
            title="Realizar intercambio"
            text={`La casilla en la que ha caído es suya pero no puede aumentarle los créditos hasta que no consiga todas las del mismo cuatrimestre.\n\n¿Desea terminar su turno ya o quiere realizar algún intercambio?`}
            aumentarCreditos={false}
            esMia={true}
            jugadores={jugadores}
            c_hor={tokensJugadores[turnoActual].h}
            c_ver={tokensJugadores[turnoActual].v}
            username={username}
            idPartida={idPartida}
            InfoCarta = {carta}
            puja={normas.puja}
            onClose={() => {
                setReiniciarContador(true);
                setModalEsMiaVisible({modalEsMiaVisible: !modalEsMiaVisible});
                console.log("cerrado");                       
            }}         
            acabarTurno={()=>{
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
            }}
            visible={modalEsMiaVisible}
            onRequestClose={() =>{
                setReiniciarContador(true);
                setModalEsMiaVisible({modalEsMiaVisible: !modalEsMiaVisible});
                console.log("cerrado");
            }}
        />
        <StyledModal
            style={{height: '30%'}}
            title="Casilla comprada"
            text={"La casilla en la que ha caído pertenece a "+propietario+". Le debe pagar "+pago+"€."}
            onClose = { () => {
                setReiniciarContador(true);
                setModalAsignaturaCompradaVisible({modalAsignaturaCompradaVisible: !modalAsignaturaCompradaVisible})
                // setActualizarPlayers(true);
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
            }}
            visible={modalAsignaturaCompradaVisible}
            onRequestClose={() => {
                setReiniciarContador(true);
                setModalAsignaturaCompradaVisible({modalAsignaturaCompradaVisible: !modalAsignaturaCompradaVisible});
                // setActualizarPlayers(true);
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
            }} 
        />
        <StyledModal
            style={{height: '30%'}}
            title={suerte.nombre}
            text={suerte.descripcion}
            onClose = { () => {
                setReiniciarContador(true);
                setModalSuerteVisible({modalSuerteVisible: !modalSuerteVisible})
                // setActualizarPlayers(true);
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
            }}
            visible={modalSuerteVisible}
            onRequestClose={() => {
                setReiniciarContador(true);
                setModalSuerteVisible({modalSuerteVisible: !modalSuerteVisible});
                // setActualizarPlayers(true);
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
            }} 
        />
        <StyledModal
            style={{height: '30%'}}
            title={boletin[0]}
            text={boletin[1]}
            onClose = { () => {
                setReiniciarContador(true);
                setModalBoletinVisible({modalBoletinVisible: !modalBoletinVisible});
                // setActualizarPlayers(true);
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
            }}
            visible={modalBoletinVisible}
            onRequestClose={() => {
                console.log("cerrando modal boletín");
                setReiniciarContador(true);
                setModalBoletinVisible({modalBoletinVisible: !modalBoletinVisible});
                // setActualizarPlayers(true);
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
            }} 
        />
        <StyledModalTimeout
            visible={modalTimeoutVisible}
            onClose = { () => {
                setReiniciarContador(true);
                setModalTimeoutVisible({modalTimeoutVisible: !modalTimeoutVisible});
                // setActualizarPlayers(true);
            }}
            onRequestClose = { () => {
                setReiniciarContador(true);
                setModalTimeoutVisible({modalTimeoutVisible: !modalTimeoutVisible});
                // setActualizarPlayers(true);
            }}
        />
        <Modal style={styles.modalView} visible={modalOfertaVisible}>
                <View style={styles.centeredView}>
                    <Pressable
                        onPress={() => setModalOfertaVisible(false)}>
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
                        onPress={() => {setModalOfertaVisible(false),
                                        console.log("ACEPTAR OFERTA ") }}/>

                <StyledButton style={{marginLeft: '0%', marginRight: '15%'}} 
                title="RECHAZAR" lightblue 
                        onPress={() => {setModalOfertaVisible(false),
                            console.log("RECHAZAR OFERTA ") }}/>
                </View>

                <StyledButton style={{marginLeft: '15%', marginRight: '15%'}} 
                title="ENVIAR OFERTA" lightblue 
                        onPress={() => {setModalOfertaVisible(false),
                                        console.log("CONTRA oferta: " + precioTrade) }}/>
                </View>
 
            </Modal>
            <StyledModalCarcel
            title={"Estás en la cárcel"}
            text={"¿Como quieres salir?"}
            cartaJulio={cartaJulio}
            pagarJulio={pagarJulio}
            onClose = { () => {
                setModalCarcelVisible({modalCarcelVisible: !modalCarcelVisible});
                setCambio(true);
            }}
            onCloseRoll={() => {
                setModalCarcelVisible({modalCarcelVisible: !modalCarcelVisible});
                roll();
            }}
            visible={modalCarcelVisible}
            onRequestClose={() => {
                setModalCarcelVisible({modalCarcelVisible: !modalCarcelVisible});
                setCambio(true);
            }} 
            /> 
        <StyledModalPuja
            visible={modalPujaVisible}
            onClose={() => {setModalPujaVisible({modalPujaVisible: !modalPujaVisible});}}
            onRequestClose={() => {setModalPujaVisible({modalPujaVisible: !modalPujaVisible});}}
            infoAsignatura={asignaturaPuja}
        />
    </View>
    );
}
