import React, { useCallback, useEffect } from 'react';
import { View, Image, StyleSheet, Pressable } from'react-native';
import 
{   FontAwesome, 
    FontAwesome5, 
    MaterialCommunityIcons, 
    Ionicons,
    MaterialIcons,
    AntDesign 
} from '@expo/vector-icons';

import { 
    lanzarDados, 
    listaJugadores, 
    infoAsignatura, 
    casillaComprada, 
    tarjetaAleatoria, 
    listarAsignaturas, 
    siguienteTurno,
    obtenerTurnoActual
} from '../url/partida';

import StyledText from '../components/StyledText';
import StyledModal from '../components/StyledModal';
import StyledModalCompra from '../components/StyledModalCompra';
import StyledModalAsignaturas from '../components/StyledModalAsignaturas';
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

const ancho = 34.3;

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
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginTop: ancho*9 + (ancho*1.5)
    },
    curso2: {
        position: 'absolute',
        justifyContent: 'center',
        flex: 1,
        flexDirection:'column',
    },
    curso3:{
        position: 'absolute',
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    curso4:{
        position: 'absolute',
        alignItems: 'flex-end',
        flex: 1,
        flexDirection:'column',
        marginLeft: '88%'
    },
    dados:{
        flex:1,
        position: 'absolute',
        alignItems: 'center',
        marginTop:'40%'
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
    julio:{
        width: ancho*1.1,
        height: ancho*1.1,
        borderColor:'#000000',
        borderWidth:1,
        alignSelf:'flex-end'
    }
});


export default function TableroScreen({route}) {

    //const idPartida = route.params.idPartida;
    const username = route.params.user;
    const idPartida = route.params.idPartida;
    const jugadores = route.params.jugadores;

    const [die1, setDie1] = React.useState(1);
    const [die2, setDie2] = React.useState(1);
    const [dobles, setDobles] = React.useState(false);
    const [tokensJugadores, setTokensJugador] = React.useState([
        {horizontal: 10, vertical: 10}, 
        {horizontal: 10, vertical: 10}, 
        {horizontal: 10, vertical: 10}, 
        {horizontal: 10, vertical: 10},
        {horizontal: 10, vertical: 10},
        {horizontal: 10, vertical: 10},
        {horizontal: 10, vertical: 10},
        {horizontal: 10, vertical: 10}]);
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

    const [compra, setCompra] = React.useState(false);
    const [aumentoCreditos, setAumentoCreditos] = React.useState(false);
    const [actualizarPlayers, setActualizarPlayers] = React.useState(false);
    const [comprobar, setComprobar] = React.useState(false);
    const [cambio, setCambio] = React.useState(false);
    const [info, setInfo] = React.useState(false);

    //variables para la info de los jugadores
    // const [jugadores, setJugadores] = React.useState([""]);
    const [dinero, setDinero] = React.useState([""]);

    const [carta,setCarta] = React.useState();
    const [propietario, setPropietario] = React.useState("");
    const [pago, setPago] = React.useState(0);
    const [boletin, setBoletin] = React.useState([""]);
    const [suerte, setSuerte] = React.useState([""]);

    //variable para guardar las asignaturas del jugador
    const [asignaturas, setAsignaturas] = React.useState([{nombre:"", h:"", v:""}]);

    //variable para registrar el turno del jugador
    const [turnoActual, setTurnoActual] = React.useState(0);

    const stylestoken = StyleSheet.create({
        token1:{
            position: 'absolute',
            width:ancho-10,
            height:ancho-10,
            marginLeft: tokensJugadores[0].horizontal*ancho + ancho*0.4,
            marginTop: tokensJugadores[0].vertical*ancho + ancho*0.4
        },
        token2:{
            position: 'absolute',
            width:ancho-10,
            height:ancho-10,
            marginLeft: tokensJugadores[1].horizontal*ancho + ancho*0.4,
            marginTop: tokensJugadores[1].vertical*ancho + ancho*0.75
        },
        token3:{
            position: 'absolute',
            width:ancho-10,
            height:ancho-10,
            marginLeft: tokensJugadores[2].horizontal*ancho + ancho*0.4,
            marginTop: tokensJugadores[2].vertical*ancho + ancho*1.05
        },
        token4:{
            position: 'absolute',
            width:ancho-10,
            height:ancho-10,
            marginLeft: tokensJugadores[3].horizontal*ancho + ancho*0.4,
            marginTop: tokensJugadores[3].vertical*ancho + ancho*1.35
        },
        token5:{
            position: 'absolute',
            width:ancho-10,
            height:ancho-10,
            marginLeft: tokensJugadores[4].horizontal*ancho + ancho*0.82,
            marginTop: tokensJugadores[4].vertical*ancho + ancho*0.4
        },
        token6:{
            position: 'absolute',
            width:ancho-10,
            height:ancho-10,
            marginLeft: tokensJugadores[5].horizontal*ancho + ancho*0.82,
            marginTop: tokensJugadores[5].vertical*ancho + ancho*0.75
        },
        token7:{
            position: 'absolute',
            width:ancho-10,
            height:ancho-10,
            marginLeft: tokensJugadores[6].horizontal*ancho + ancho*0.82,
            marginTop: tokensJugadores[6].vertical*ancho + ancho*1.05
        },
        token8:{
            position: 'absolute',
            width:ancho-10,
            height:ancho-10,
            marginLeft: tokensJugadores[7].horizontal*ancho + ancho*0.82,
            marginTop: tokensJugadores[7].vertical*ancho + ancho*1.35
        }
    })

    function Dice(){

        function roll(){
            //si no es el turno del jugador
            if (jugadores[turnoActual] != username){
                alert("¡No es tu turno de lanzar los dados! Le toca a "+jugadores[turnoActual]);
                return;
            }
            console.log("rolling dice...");
            setDobles(false);
            const response =  fetch(lanzarDados, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({  "username": username,
                                        "idPartida": idPartida})
                })
                .then((response) => {
                  if(response.status != 200){
                    throw new Error('Error de estado: '+ response.status+ ' en la función de lanzar dados');
                  }
                  return response.json();
                })
                .then(data => {
                    console.log("DADOS:",data);
                    setDie1(data.dado1);
                    setDie2(data.dado2);
                    //setRolling(true);
                    let aux = tokensJugadores;
                    aux[turnoActual].horizontal = data.coordenadas.h;
                    aux[turnoActual].vertical = data.coordenadas.v;
                    // aux[turnoActual].horizontal = 4;
                    // aux[turnoActual].vertical = 10;
                    console.log(aux);
                    setTokensJugador(aux);
                    setComprobar(true);
                    if(data.dado1 == data.dado2){
                        setDobles(true);
                    }
                })
                .catch((error) => {
                //Error
                //alert(JSON.stringify(error));
                console.error(error);
                });
        }
    
        return(
            <View>
                {/* como pasar info del jugador ??? */}
                <Pressable  style={{flex:1, flexDirection:'row'}} onPress={() => {roll();}}>
                    <Die face = {die1}></Die>
                    <Die face = {die2}></Die>
                </Pressable>
            </View>
            
        )
    }

    const actualizarDinero = useCallback(() =>{
        console.log("ACTUALIZAR DINERO");
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
            // setJugadores(data.listaJugadores);
            setDinero(data.listaDineros);
            
            let aux = tokensJugadores;
            // console.log(aux);
            
            for(var i=0; i<data.listaPosiciones.length; i++){
                aux[i].horizontal = data.listaPosiciones[i].h;
                aux[i].vertical = data.listaPosiciones[i].v;
                console.log(aux[i]);
            }
            setTokensJugador(aux);
            
            // actualizarTurno();
        })
        .catch((error) => {
        //Error
        //alert(JSON.stringify(error));
        console.error(error);
        });
    },[])

    const actualizarTurno = useCallback(() =>{
        console.log("Obteniendo turno");
        const response = fetch(obtenerTurnoActual,{
            method: 'PUT',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify({"idPartida": idPartida})
        })
        .then((response) => {
            if(response.status != 200){
                throw new Error('Error de estado: ' + response.status+ ' en la función de obtener turno actual');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setTurnoActual(data.posicion);
        })
        .catch((error) => {
            console.error(error);
        })
    })

    const comprobarAsignatura = useCallback(() => {
        console.log("comprobando casilla para el turno", turnoActual);
        console.log(tokensJugadores[0]);
        let found = casillas_suerte.find(element => element.horizontal===tokensJugadores[turnoActual].horizontal && element.vertical===tokensJugadores[turnoActual].vertical);
        if(found === undefined){
            let found = casillas_boletin.find(element => element.horizontal===tokensJugadores[turnoActual].horizontal && element.vertical===tokensJugadores[turnoActual].vertical);
            if(found === undefined){
                let found = casillas_esquinas.find(element => element.horizontal===tokensJugadores[turnoActual].horizontal && element.vertical===tokensJugadores[turnoActual].vertical);
                if( found === undefined){
                    let found = casillas_pagos.find(element => element.horizontal===tokensJugadores[turnoActual].horizontal && element.vertical===tokensJugadores[turnoActual].vertical);
                    if( found === undefined){
                        console.log("comprobando asignatura", tokensJugadores[turnoActual].horizontal, tokensJugadores[turnoActual].vertical);
                        const response = fetch(casillaComprada,{
                            method: 'PUT',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({  "username": username,
                                                    "coordenadas":{"h": tokensJugadores[turnoActual].horizontal,"v": tokensJugadores[turnoActual].vertical},
                                                    "idPartida": idPartida})
                        })
                        .then((response) => {
                            if(response.status != 200){
                                throw new Error('Error de estado: '+ response.status+ ' en la funcion de obtener la info de las asignaturas');
                            }
                            return response.json();
                        })
                        .then(data => {
                            console.log("COMPROBAR ASIGNATURA");
                            console.log(data.jugador);
                            console.log(data.dinero)
                            if(data.jugador!=null){
                                if(data.jugador==username){
                                    console.log("es mia");
                                    infoCasilla(true, data.aumento);
                                }
                                else{
                                console.log("comprada");
                                console.log(data);
                                setPropietario(data.jugador);
                                setPago(data.dinero);
                                setModalAsignaturaCompradaVisible(true);
                                }
                            }
                            else{
                                console.log("no comprada");                
                                infoCasilla(false, false);
                        }})
                        .catch((error) => {
                            //Error
                            //alert(JSON.stringify(error));
                            console.error(error);
                        });
                    }
                    else{
                        console.log("pagos");
                        //accion
                    }
                }else{
                    console.log("esquina");
                    //accion
                    if(tokensJugadores[turnoActual].horizontal==10 && tokensJugadores[turnoActual].vertical==0 ){
                        console.log("carcel");
                        alert("Te toca ir a Julio");
                        let aux = tokensJugadores;
                        aux[turnoActual].horizontal = 0;
                        aux[turnoActual].vertical = 10;
                        console.log(aux);
                        setTokensJugador(aux);
                    }
                }
            }else{
                //console.log("boletin");
                console.log("obteniendo boletín");
                const response = fetch(tarjetaAleatoria,{
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({  "idPartida": idPartida,
                                            "username": username,
                                            "tipo": "boletin"        
                                        })
                })
                .then((response) => {
                    if(response.status != 200){
                        throw new Error('Error de estado: '+ response.status+ ' en la funcion de obtener tarjeta de boletín');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("BOLETIN");
                    console.log(data[0]);
                    let aux = [data[0].nombre, data[0].descripcion];
                    console.log(aux);
                    setBoletin(aux);
                    setModalBoletinVisible(true);
                })
                .catch((error) => {
                    //Error
                    //alert(JSON.stringify(error));
                    console.error(error);
                });
            }
        }else{
            console.log("obteniendo suerte", tarjetaAleatoria);
            const response = fetch(tarjetaAleatoria,{
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({  "idPartida": idPartida,
                                        "username": username,
                                        "tipo": "suerte"        
                                    })
            })
            .then((response) => {
                if(response.status != 200){
                    throw new Error('Error de estado: '+ response.status+ ' en la funcion de obtener tarjeta de suerte');
                }
                return response.json();
            })
            .then(data => {
                console.log("SUERTE");
                console.log(data[0]);
                let aux = [data[0].nombre, data[0].descripcion];
                console.log(aux);
                setSuerte(aux);
                setModalSuerteVisible(true);
            })
            .catch((error) => {
                //Error
                //alert(JSON.stringify(error));
                console.error(error);
            }); 
        }
    });

    const infoCasilla= useCallback((esMia, aumento) => {
        const response = fetch(infoAsignatura,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"coordenadas":{"h": tokensJugadores[turnoActual].horizontal,"v": tokensJugadores[turnoActual].vertical}})
        })
        .then((response) => {
            if(response.status != 200){
                throw new Error('Error de estado: '+ response.status+ ' en la funcion de obtener la info de las asignaturas');
            }
            return response.json();
        })
        .then(data => {
            //console.log(data);
            if(data.casillaInfo.tipo == 'A'){
                console.log("asignatura ", data.casillaInfo.cuatrimestre);
                switch(data.casillaInfo.cuatrimestre){
                    case 1:
                        setCarta(<Asignatura_1
                            title={data.casillaInfo.nombre}
                            coste={data.casillaInfo.precioCompra}
                            matricula={data.casillaInfo.matricula}
                            precio1C={data.casillaInfo.precio1C}
                            precio2C={data.casillaInfo.precio2C}
                            precio3C={data.casillaInfo.precio3C}
                            precio4C={data.casillaInfo.precio4C}
                            optatividad={data.casillaInfo.devolucionMatricula}
                            precioCredito={data.casillaInfo.precioCompraCreditos}
                        />);
                        break; 
                    case 2:
                        setCarta(<Asignatura_2
                            title={data.casillaInfo.nombre}
                            coste={data.casillaInfo.precioCompra}
                            matricula={data.casillaInfo.matricula}
                            precio1C={data.casillaInfo.precio1C}
                            precio2C={data.casillaInfo.precio2C}
                            precio3C={data.casillaInfo.precio3C}
                            precio4C={data.casillaInfo.precio4C}
                            optatividad={data.casillaInfo.devolucionMatricula}
                            precioCredito={data.casillaInfo.precioCompraCreditos}
                        />);
                        break; 
                    case 3:
                        setCarta(
                        <Asignatura_3
                            title={data.casillaInfo.nombre}
                            coste={data.casillaInfo.precioCompra}
                            matricula={data.casillaInfo.matricula}
                            precio1C={data.casillaInfo.precio1C}
                            precio2C={data.casillaInfo.precio2C}
                            precio3C={data.casillaInfo.precio3C}
                            precio4C={data.casillaInfo.precio4C}
                            optatividad={data.casillaInfo.devolucionMatricula}
                            precioCredito={data.casillaInfo.precioCompraCreditos}
                        />);
                        break; 
                    case 4:
                        setCarta(                                            
                        <Asignatura_4
                            title={data.casillaInfo.nombre}
                            coste={data.casillaInfo.precioCompra}
                            matricula={data.casillaInfo.matricula}
                            precio1C={data.casillaInfo.precio1C}
                            precio2C={data.casillaInfo.precio2C}
                            precio3C={data.casillaInfo.precio3C}
                            precio4C={data.casillaInfo.precio4C}
                            optatividad={data.casillaInfo.devolucionMatricula}
                            precioCredito={data.casillaInfo.precioCompraCreditos}
                        />);
                        break; 
                    case 5:
                        setCarta(                                            
                        <Asignatura_5
                            title={data.casillaInfo.nombre}
                            coste={data.casillaInfo.precioCompra}
                            matricula={data.casillaInfo.matricula}
                            precio1C={data.casillaInfo.precio1C}
                            precio2C={data.casillaInfo.precio2C}
                            precio3C={data.casillaInfo.precio3C}
                            precio4C={data.casillaInfo.precio4C}
                            optatividad={data.casillaInfo.devolucionMatricula}
                            precioCredito={data.casillaInfo.precioCompraCreditos}
                        />);
                        break;  
                    case 6:
                        setCarta(                                            
                        <Asignatura_6
                            title={data.casillaInfo.nombre}
                            coste={data.casillaInfo.precioCompra}
                            matricula={data.casillaInfo.matricula}
                            precio1C={data.casillaInfo.precio1C}
                            precio2C={data.casillaInfo.precio2C}
                            precio3C={data.casillaInfo.precio3C}
                            precio4C={data.casillaInfo.precio4C}
                            optatividad={data.casillaInfo.devolucionMatricula}
                            precioCredito={data.casillaInfo.precioCompraCreditos}
                        />);
                        break; 
                    case 7:
                        setCarta(                                            
                        <Asignatura_7
                            title={data.casillaInfo.nombre}
                            coste={data.casillaInfo.precioCompra}
                            matricula={data.casillaInfo.matricula}
                            precio1C={data.casillaInfo.precio1C}
                            precio2C={data.casillaInfo.precio2C}
                            precio3C={data.casillaInfo.precio3C}
                            precio4C={data.casillaInfo.precio4C}
                            optatividad={data.casillaInfo.devolucionMatricula}
                            precioCredito={data.casillaInfo.precioCompraCreditos}
                        />);
                        break; 
                    case 8:
                        setCarta(                                            
                        <Asignatura_8
                            title={data.casillaInfo.nombre}
                            coste={data.casillaInfo.precioCompra}
                            matricula={data.casillaInfo.matricula}
                            precio1C={data.casillaInfo.precio1C}
                            precio2C={data.casillaInfo.precio2C}
                            precio3C={data.casillaInfo.precio3C}
                            precio4C={data.casillaInfo.precio4C}
                            optatividad={data.casillaInfo.devolucionMatricula}
                            precioCredito={data.casillaInfo.precioCompraCreditos}
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
            else if(data.casillaInfo.tipo == 'F'){
                //console.log("evento");
                setCarta(                                    <Evento
                    title={data.casillaInfo.nombre}
                    coste={data.casillaInfo.precioCompra}
                    matricula={data.casillaInfo.matricula}
                    precio1C={data.casillaInfo.precio1C}
                    precio2C={data.casillaInfo.precio2C}
                    precio3C={data.casillaInfo.precio3C}
                    optatividad={data.casillaInfo.devolucionMatricula}
                    imageSource={require('../../assets/bob.png')}
                />);
                if(!esMia){
                    setCompra(true);
                }
            }
            else if(data.casillaInfo.tipo == 'I'){
                //console.log("recurso");
                setCarta(                                   <Recurso
                    title={data.casillaInfo.nombre}
                    coste={data.casillaInfo.precioCompra}
                    optatividad={data.casillaInfo.devolucionMatricula}
                    imageSource={require('../../assets/bob.png')}
                />);
                if(!esMia){
                    setCompra(true);
                }
            }
            //console.log(carta);
        })
        .catch((error) => {
            //Error
            //alert(JSON.stringify(error));
            console.error(error);
        });
    });

    const cambiarTurno = useCallback(() => {
        const response =  fetch(siguienteTurno, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"idPartida": idPartida})
            })
            .then((response) => {
            if(response.status != 200){
                throw new Error('Error de estado: '+ response.status+ ' en la función de siguiente turno');
            }
            return response.json();
            })
            .then(data => {
                console.log("TURNO:",data);
                setTurnoActual(data.posicion);
                setActualizarPlayers(true);
                //console.log("Turno " + turnoActual +". Le toca a "+jugadores[turnoActual] +". Total jugadores: "+totalJugadores);
                //console.log(data);
            })
            .catch((error) => {
            //Error
            //alert(JSON.stringify(error));
            console.error(error);
            });
    })

    useEffect(() =>{
        actualizarDinero();
    },[])

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
    
    useEffect (() => {
        if(actualizarPlayers){
                interval = setInterval(() => {
                    actualizarDinero();
                    console.log("JUGADORES: ", jugadores);
                    console.log("JUGADOR: ",jugadores[turnoActual]);
                    if(jugadores[turnoActual] == username){
                        console.log("ME TOCA: ",jugadores[turnoActual]);
                        setActualizarPlayers(false);
                        clearInterval(interval);
                    }
                },3000);
            return () => clearInterval(interval);
        }

    },[actualizarPlayers]);

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
                <View style={[styles.casilla_esquina, {flex:1, flexDirection:'column'}]}>
                    <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex:1, flexDirection:'column'}}>
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
                    <Dice></Dice>
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
                    const response =  fetch(listarAsignaturas, {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({  "username": username,
                                            "idPartida": idPartida})
                    })
                    .then((response) => {
                    if(response.status != 200){
                        throw new Error('Error de estado: '+ response.status+ ' en la función de listar asignaturas');
                    }
                    return response.json();
                    })
                    .then(data => {
                        console.log("Asignaturas:\n ",data);
                        let vector = new Array();
                        for(let i = 0; i<data.casillas.length; i++) {
                            let aux = { nombre: data.casillas[i].nombre,
                                        h: data.casillas[i].coordenadas.h, 
                                        v: data.casillas[i].coordenadas.v }
                            vector.push(aux);
                        }
                        console.log(vector);
                        setAsignaturas(vector);
                        setModalAsignaturasVisible(true);
                    })
                    .catch((error) => {
                    //Error
                    //alert(JSON.stringify(error));
                    console.error(error);
                    });
                    }}
                /><StyledButton
                style={styles.botones}
                red
                small
                title="Bancarrota"
                onPress={() => console.log("Bancarrota")}
                />
            </View>
        </View>
        <StyledModalCompra
            doubles={dobles}
            title="Comprar"
            text="¿Desea comprar la carta?"
            aumentarCreditos={false}
            esMia={false}
            c_hor={tokensJugadores[turnoActual].horizontal}
            c_ver={tokensJugadores[turnoActual].vertical}
            username={username}
            idPartida={idPartida}
            InfoCarta = {carta}
            onClose={() => {
                setCompra(false);
                setModalCompraVisible({modalCompraVisible: !modalCompraVisible});
                console.log("cerrado");
                // setActualizarPlayers(true);
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
                       
            }}
            visible={modalCompraVisible}
            onRequestClose={() =>{
                setCompra(false);
                setModalCompraVisible({modalCompraVisible: !modalCompraVisible});
                console.log("cerrado");
                // setActualizarPlayers(true);
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
            }}
        />
        <StyledModalCompra
            doubles={dobles}
            title="Aumentar créditos"
            text="¿Desea aumentar los créditos?"
            aumentarCreditos={true}
            esMia={true}
            c_hor={tokensJugadores[turnoActual].horizontal}
            c_ver={tokensJugadores[turnoActual].vertical}
            username={username}
            idPartida={idPartida}
            InfoCarta = {carta}
            onClose={() => {
                setAumentoCreditos(false);
                setModalCreditosVisible({modalCreditosVisible: !modalCreditosVisible});
                console.log("cerrado");
                // setActualizarPlayers(true);
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
                       
            }}
            visible={modalCreditosVisible}
            onRequestClose={() =>{
                setAumentoCreditos(false);
                setModalCreditosVisible({modalCreditosVisible: !modalCreditosVisible});
                console.log("cerrado");
                // setActualizarPlayers(true);
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
            }}
        />
        <StyledModalCompra
            doubles={dobles}
            title="Realizar intercambio"
            text={`La casilla en la que ha caído es suya pero no puede aumentarle los créditos hasta que no consiga todas las del mismo cuatrimestre.\n\n¿Desea terminar su turno ya o quiere realizar algún intercambio?`}
            aumentarCreditos={false}
            esMia={true}
            c_hor={tokensJugadores[turnoActual].horizontal}
            c_ver={tokensJugadores[turnoActual].vertical}
            username={username}
            idPartida={idPartida}
            InfoCarta = {carta}
            onClose={() => {
                setModalEsMiaVisible({modalEsMiaVisible: !modalEsMiaVisible});
                console.log("cerrado");
                // setActualizarPlayers(true);
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
                       
            }}
            visible={modalEsMiaVisible}
            onRequestClose={() =>{
                setModalEsMiaVisible({modalEsMiaVisible: !modalEsMiaVisible});
                console.log("cerrado");
                // setActualizarPlayers(true);
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
            }}
        />
        <StyledModal
            style={{height: '30%'}}
            title="Casilla comprada"
            text={"La casilla en la que ha caído pertenece a "+propietario+". Le debe pagar "+pago+"€."}
            onClose = { () => {
                setModalAsignaturaCompradaVisible({modalAsignaturaCompradaVisible: !modalAsignaturaCompradaVisible})
                // setActualizarPlayers(true);
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
            }}
            visible={modalAsignaturaCompradaVisible}
            onRequestClose={() => {
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
            title={suerte[0]}
            text={suerte[1]}
            onClose = { () => {
                setModalSuerteVisible({modalSuerteVisible: !modalSuerteVisible})
                // setActualizarPlayers(true);
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
            }}
            visible={modalSuerteVisible}
            onRequestClose={() => {
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
                setModalBoletinVisible({modalBoletinVisible: !modalBoletinVisible});
                // setActualizarPlayers(true);
                if(!dobles){
                    console.log("cambiando turno");
                    setCambio(true);
                }
            }} 
        />
    </View>
    );
}
