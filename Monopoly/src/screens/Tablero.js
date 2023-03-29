import React, { useCallback, useEffect } from 'react';
import { View, Image, StyleSheet, Text, Pressable } from'react-native';
import 
{   FontAwesome, 
    FontAwesome5, 
    MaterialCommunityIcons, 
    Ionicons,
    MaterialIcons 
} from '@expo/vector-icons';

import StyledText from '../components/StyledText';
import Die from '../components/Die';

const ancho = 34.3;

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
        flex:5,
        flexDirection: 'column',
        marginTop:'5%'
    },
    info:{
        flex:1,
        flexDirection:'row'
    },
    jugador:{
        flex:0.5,
        marginLeft:'5%',
        justifyContent: 'flex-start'
    },
    asignaturas:{
        flex:0.5,
        marginLeft:'40%',
        justifyContent: 'flex-start'
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


export default function TableroScreen() {

    const [die1, setDie1] = React.useState(1);
    const [die2, setDie2] = React.useState(1);
    const [casilla_horizontal, setCasillaHorizontal]=React.useState(10);
    const [casilla_vertical, setCasillaVertical]=React.useState(10);
    const [curso, setCurso] = React.useState(1);
    const [rolling, setRolling] = React.useState(false);
    const [jugador3, setJugador3] = React.useState(true);
    const [jugador4, setJugador4] = React.useState(true);
    const [jugador5, setJugador5] = React.useState(false);
    const [jugador6, setJugador6] = React.useState(false);
    const [jugador7, setJugador7] = React.useState(false);
    const [jugador8, setJugador8] = React.useState(false);

    const stylestoken = StyleSheet.create({
        token1:{
            position: 'absolute',
            width:ancho,
            height:ancho,
            marginLeft: casilla_horizontal*ancho + ancho*0.5,
            marginTop: casilla_vertical*ancho + ancho*0.5
        }
    })

    function Dice(){
        const sides = [
            1, 2, 3, 
            4, 5, 6
        ]

        function roll(){
            setDie1(sides[Math.floor(Math.random() * sides.length)])
            setDie2(sides[Math.floor(Math.random() * sides.length)])
        }
        
        const avanzar = useCallback(() => {
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
        },[]);

        useEffect(() => {
            if(rolling){
                setRolling(false);
                avanzar();
            };
        },[rolling]);

        
    
        return(
            <View>
                <Pressable  style={{flex:1, flexDirection:'row'}} onPress={() => {setRolling(true);roll();}}>
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
            <Image
            style={stylestoken.token1}
            source={require('../../assets/token.png')}   
            />
        </View>
        <View style={styles.info}>
            <View style={styles.jugador}>
                <Text>PLAYER1 XXXX€</Text>
                <Text>PLAYER2 XXXX€</Text>
                {jugador3 ? <Text>PLAYER3 XXXX€</Text> : null}
                {jugador4 ? <Text>PLAYER4 XXXX€</Text> : null}
                {jugador5 ? <Text>PLAYER5 XXXX€</Text> : null}
                {jugador6 ? <Text>PLAYER6 XXXX€</Text> : null}
                {jugador7 ? <Text>PLAYER7 XXXX€</Text> : null}
                {jugador8 ? <Text>PLAYER8 XXXX€</Text> : null}
            </View>
            <View style={styles.asignaturas}>
                <Text>ASIGNATURAS</Text>
            </View>
        </View>
    </View>
    );
}