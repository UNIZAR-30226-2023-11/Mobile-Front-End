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

import { lanzarDados, listaJugadores, infoAsignatura, casillaComprada } from '../url/partida';

import StyledText from '../components/StyledText';
import StyledModal from '../components/StyledModal';
import StyledModalCompra from '../components/StyledModalCompra';
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
        alignItems:'center',
    },
    tablero:{
        flex:3.5,
        flexDirection: 'column',
        marginTop:'10%'
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
    const [idPartida, setIdPartida] = React.useState(route.params.idPartida);

    const [die1, setDie1] = React.useState(1);
    const [die2, setDie2] = React.useState(1);
    const [casilla_horizontal, setCasillaHorizontal]=React.useState(10);
    const [casilla_vertical, setCasillaVertical]=React.useState(10);
    const [curso, setCurso] = React.useState(1);
    const [rolling, setRolling] = React.useState(false);
    const [dobles, setDobles] = React.useState(false);
    let tokensJugadores = [(10,10), (10,10), (10,10), (10,10), (10,10), (10, 10)]
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
    const [compra, setCompra] = React.useState(false);
    const [actualizarPlayers, setActualizarPlayers] = React.useState(true);
    const [comprobar, setComprobar] = React.useState(false);
    const [info, setInfo] = React.useState(false);
    const [jugadores, setJugadores] = React.useState([""]);
    const [dinero, setDinero] = React.useState([""]);
    const [carta,setCarta] = React.useState();
    const [propietario, setPropietario] = React.useState("");
    const [pago, setPago] = React.useState(0);

    const stylestoken = StyleSheet.create({
        token1:{
            position: 'absolute',
            width:ancho-10,
            height:ancho-10,
            marginLeft: casilla_horizontal*ancho + ancho*0.4,
            marginTop: casilla_vertical*ancho + ancho*0.4
        },
        token2:{
            position: 'absolute',
            width:ancho-10,
            height:ancho-10,
            marginLeft: casilla_horizontal*ancho + ancho*0.4,
            marginTop: casilla_vertical*ancho + ancho*0.75
        },
        token3:{
            position: 'absolute',
            width:ancho-10,
            height:ancho-10,
            marginLeft: casilla_horizontal*ancho + ancho*0.4,
            marginTop: casilla_vertical*ancho + ancho*1.05
        },
        token4:{
            position: 'absolute',
            width:ancho-10,
            height:ancho-10,
            marginLeft: casilla_horizontal*ancho + ancho*0.4,
            marginTop: casilla_vertical*ancho + ancho*1.35
        },
        token5:{
            position: 'absolute',
            width:ancho-10,
            height:ancho-10,
            marginLeft: casilla_horizontal*ancho + ancho*0.82,
            marginTop: casilla_vertical*ancho + ancho*0.4
        },
        token6:{
            position: 'absolute',
            width:ancho-10,
            height:ancho-10,
            marginLeft: casilla_horizontal*ancho + ancho*0.82,
            marginTop: casilla_vertical*ancho + ancho*0.75
        },
        token7:{
            position: 'absolute',
            width:ancho-10,
            height:ancho-10,
            marginLeft: casilla_horizontal*ancho + ancho*0.82,
            marginTop: casilla_vertical*ancho + ancho*1.05
        },
        token8:{
            position: 'absolute',
            width:ancho-10,
            height:ancho-10,
            marginLeft: casilla_horizontal*ancho + ancho*0.82,
            marginTop: casilla_vertical*ancho + ancho*1.35
        }
    })

    function Dice(){

        function roll(){
            console.log("rolling dice...");
            setDobles(false);
            const response =  fetch(lanzarDados, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({"idPartida": idPartida})
                })
                .then((response) => {
                  if(response.status != 200){
                    throw new Error('Error de estado: '+ response.status+ ' en la función de lanzar dados');
                  }
                  return response.json();
                })
                .then(data => {
                    console.log(data);
                    setDie1(data.dado1);
                    setDie2(data.dado2);
                    setRolling(true);
                })
                .catch((error) => {
                //Error
                //alert(JSON.stringify(error));
                console.error(error);
                });
        }
        
        const avanzar = useCallback(() => {
            if(die1==die2){
                setDobles(true);
            }
            switch (curso) {
                case 1:
                    if (casilla_horizontal-(die1+die2)<=0){
                        setCasillaHorizontal(0)
                        setCasillaVertical(10-Math.abs(casilla_horizontal-(die1+die2)))
                        setCurso(2);
                    }
                    else{
                        setCasillaHorizontal(casilla_horizontal-(die1+die2));
                    }
                    break;
            
                case 2:
                    if (casilla_vertical-(die1+die2)<=0){
                        setCasillaVertical(0);
                        setCasillaHorizontal(Math.abs(casilla_vertical-(die1+die2)));
                        setCurso(3);
                    }
                    else{
                        setCasillaVertical(casilla_vertical-(die1+die2));
                    }
                    break;
                
                case 3:
                    if(casilla_horizontal+(die1+die2)>=10){
                        setCasillaHorizontal(10);
                        setCasillaVertical(Math.abs(casilla_horizontal+(die1+die2)-10));
                        setCurso(4);
                    }
                    else{
                        setCasillaHorizontal(casilla_horizontal+(die1+die2));
                    }
                    break;

                case 4:
                    if(casilla_vertical+(die1+die2)>=10){
                        setCasillaVertical(10);
                        setCasillaHorizontal(10-Math.abs(casilla_vertical+(die1+die2)-10));
                        setCurso(1);
                    }
                    else{
                        setCasillaVertical(casilla_vertical+(die1+die2));
                    }
                    break;
            }
            setComprobar(true);
        },[]);

        const actualizarDinero = useCallback(() => {
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
                console.log(data);
                setJugadores(data.listaJugadores);
                setDinero(data.listaDineros);
    
            })
            .catch((error) => {
            //Error
            //alert(JSON.stringify(error));
            console.error(error);
            });},[]);

        const comprobarAsignatura = useCallback(() => {
            const response = fetch(casillaComprada,{
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({  "username": username,
                                        "coordenadas":{"h": casilla_horizontal,"v": casilla_vertical},
                                        "idPartida": idPartida})
            })
            .then((response) => {
                if(response.status != 200){
                    throw new Error('Error de estado: '+ response.status+ ' en la funcion de obtener la info de las asignaturas');
                }
                return response.json();
            })
            .then(data => {
                console.log(data.jugador);
                console.log(data.dinero)
                if(data.jugador!=null && data.dinero!=null){
                    console.log("comprada");
                    console.log(data);
                    setPropietario(data.jugador);
                    setPago(data.dinero);
                    setModalAsignaturaCompradaVisible(true);
                }
                else{
                    console.log("no comprada");                
                    setInfo(true);
                }
            })
        });

        const infoCasilla = useCallback(() => {
            let found = casillas_suerte.find(element => element.horizontal===casilla_horizontal && element.vertical===casilla_vertical);
            if(found === undefined){
                let found = casillas_boletin.find(element => element.horizontal===casilla_horizontal && element.vertical===casilla_vertical);
                if(found === undefined){
                    let found = casillas_esquinas.find(element => element.horizontal===casilla_horizontal && element.vertical===casilla_vertical);
                    if( found === undefined){
                        let found = casillas_pagos.find(element => element.horizontal===casilla_horizontal && element.vertical===casilla_vertical);
                        if( found === undefined){
                            //console.log("casilla normal");
                            const response = fetch(infoAsignatura,{
                                method: 'PUT',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify({"coordenadas":{"h": casilla_vertical,"v": casilla_horizontal}})
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
                                                description={""}
                                            />);
                                            break; 
                                        case 2:
                                            setCarta(<Asignatura_2
                                                title={data.casillaInfo.nombre}
                                                coste={data.casillaInfo.precioCompra}
                                                description={""}
                                            />);
                                            break; 
                                        case 3:
                                            setCarta(
                                            <Asignatura_3
                                                title={data.casillaInfo.nombre}
                                                coste={data.casillaInfo.precioCompra}
                                                description={""}
                                            />);
                                            break; 
                                        case 4:
                                            setCarta(                                            <Asignatura_4
                                                title={data.casillaInfo.nombre}
                                                coste={data.casillaInfo.precioCompra}
                                                description={""}
                                            />);
                                            break; 
                                        case 5:
                                            setCarta(                                            <Asignatura_5
                                                title={data.casillaInfo.nombre}
                                                coste={data.casillaInfo.precioCompra}
                                                description={""}
                                            />);
                                            break;  
                                        case 6:
                                            setCarta(                                            <Asignatura_6
                                                title={data.casillaInfo.nombre}
                                                coste={data.casillaInfo.precioCompra}
                                                description={""}
                                            />);
                                            break; 
                                        case 7:
                                            setCarta(                                            <Asignatura_7
                                                title={data.casillaInfo.nombre}
                                                coste={data.casillaInfo.precioCompra}
                                                description={""}
                                            />);
                                            break; 
                                        case 8:
                                            setCarta(                                            <Asignatura_8
                                                title={data.casillaInfo.nombre}
                                                coste={data.casillaInfo.precioCompra}
                                                description={""}
                                            />);
                                            break; 
                                    }
                                }
                                else if(data.casillaInfo.tipo == 'F'){
                                    //console.log("evento");
                                    setCarta(                                    <Evento
                                        title={data.casillaInfo.nombre}
                                        coste={data.casillaInfo.precioCompra}
                                        description={""}
                                        imageSource={require('../../assets/bob.png')}
                                    />);
                                }
                                else if(data.casillaInfo.tipo == 'I'){
                                    //console.log("recurso");
                                    setCarta(                                   <Recurso
                                        title={data.casillaInfo.nombre}
                                        coste={data.casillaInfo.precioCompra}
                                        description={""}
                                        imageSource={require('../../assets/bob.png')}
                                    />);
                                }
                                setCompra(true);
                                //console.log(carta);
                            })
                            .catch((error) => {
                                //Error
                                //alert(JSON.stringify(error));
                                console.error(error);
                            });
                        }else{
                            //console.log("pagos");
                            //accion
                        }
                    }else{
                        //console.log("esquina");
                        //accion
                    }
                }else{
                    //console.log("boletin");
                    //Obtener carta boletin
                }
            }else{
                //console.log("suerte");
                //Obtener carta suerte  
            }
        },[]);

        useEffect(() => {
            if(rolling){
                setRolling(false);
                avanzar();
            };            
        },[rolling]);

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

        useEffect (() => {
            if(actualizarPlayers){
                setActualizarPlayers(false);
                actualizarDinero();
            }
        },[actualizarPlayers]);
    
        return(
            <View>
                <Pressable  style={{flex:1, flexDirection:'row'}} onPress={() => {roll();}}>
                    <Die face = {die1}></Die>
                    <Die face = {die2}></Die>
                </Pressable>
            </View>
            
        )
    }

    return (
        <View style={styles.pantalla}>
        <View style={styles.header}>
            <StyledText bold big purple> MONOPOLY </StyledText>
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
                <StyledModal
                title="MIS ASIGNATURAS"
                text="Aquí se mostratá la lista de asignaturas de las que eres dueño."   
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
                onPress={() => setModalAsignaturasVisible(true)}
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
            text="¿Desea comprar la asignatura?"
            c_hor={casilla_horizontal}
            c_ver={casilla_vertical}
            username={username}
            idPartida={idPartida}
            InfoCarta = {carta}
            onClose={() => {
                setCompra(false);
                setModalCompraVisible({modalCompraVisible: !modalCompraVisible});
                console.log("cerrado");
                setActualizarPlayers(true);
            }}
            visible={modalCompraVisible}
            onRequestClose={() =>{
                setCompra(false);
                setModalCompraVisible({modalCompraVisible: !modalCompraVisible});
                console.log("cerrado");
                setActualizarPlayers(true);
            }}
        />
        <StyledModal
            style={{height: '30%'}}
            title="Casilla comprada"
            text={"La casilla en la que ha caído pertenece a "+{propietario}+". Le debe pagar "+{pago}+"."}
            onClose = { () => {setModalAsignaturaCompradaVisible({modalAsignaturaCompradaVisible: !modalAsignaturaCompradaVisible})}}
            visible={modalAsignaturaCompradaVisible}
            onRequestClose={() => {
                //Alert.alert('Modal has been closed.');
                console.log("cerrando modal asignatura comprada");
                setModalAsignaturaCompradaVisible({modalAsignaturaCompradaVisible: !modalAsignaturaCompradaVisible});
            }} 
        />
    </View>
    );
}
