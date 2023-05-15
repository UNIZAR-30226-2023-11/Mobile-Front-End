import React from 'react';
import { Modal, ScrollView, StyleSheet, View, Pressable, Text } from 'react-native';
import { Entypo, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import StyledButton from './StyledButton';

import { infoAsignatura, venderAsignatura } from '../url/partida';

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
import { SocketContext } from './SocketContext';

const styles = StyleSheet.create({
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
        width:'85%',
        height: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        }
    },
    modalViewVender: {
        marginTop: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        width:'60%',
        height: '40%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        }
    },
    botones:{
        flex:0.5,
        marginTop:'5%',
        flexDirection:'row', 
        justifyContent:'space-between',
    },
    button:{
        marginLeft: '80%',
        marginTop: '5%'
    },
    boton :{
        marginTop: '5%',
    },
    modalText: {
        fontSize: 18,
        alignSelf: 'flex-start',
        color: '#000',
    },
    modalTextVender: {
        fontSize: 20,
        alignSelf: 'flex-start',
        textAlign: 'center',
        marginTop: '10%',
        color: '#000',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginBottom:'5%'
    }
});

export default function StyledModalAsignaturas({style={}, onClose, visible, onRequestClose, title, asignaturas, miTurno}){

    const modalStyles = [
        styles.modalView,
        style
    ]
    const {socket} = React.useContext(SocketContext);
    const [modalCartaVisible, setModalCartaVisible] = React.useState(false);
    const [modalVenderVisible, setModalVenderVisible] = React.useState(false);
    const [modalDisminuirVisible, setModalDisminuirVisible] = React.useState(false);
    const [modalHipotecarVisible, setModalHipotecarVisible] = React.useState(false);

    const [carta,setCarta] = React.useState();
    const [coordenadas, setCoordenadas] = React.useState({h: 0, v: 0});

    return(
        <View>
        <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={onRequestClose}
        transparent={true}
        props>
        <View style={styles.centeredView}>
            <View style={modalStyles}>
            <Pressable
                onPress={onClose}>
                <Entypo name="circle-with-cross" size={35} color="red" style={styles.button}/>
            </Pressable>
            <Text style={styles.modalTitle}>{title}</Text>
            <ScrollView>
            { 
                asignaturas.map((value, index) => (
                <View key={index}  style={{flex:1, flexDirection:'row', marginTop: '10%', justifyContent:'space-between'}}>
                    <Pressable
                        onPress={() => {
                            socket.emit('infoCasilla',{
                                coordenadas:{h: tokensJugadores[turnoActual].horizontal,v: tokensJugadores[turnoActual].vertical} 
                            },
                            (ack)=> {
                                if(ack.cod == 0){
                                    if(ack.msg.casillaInfo.tipo == 'A'){
                                        console.log("asignatura ", ack.msg.casillaInfo.cuatrimestre);
                                        switch(ack.msg.casillaInfo.cuatrimestre){
                                            case 1:
                                                setCarta(<Asignatura_1
                                                    title={ack.msg.casillaInfo.nombre}
                                                    coste={ack.msg.casillaInfo.precioCompra}
                                                    matricula={ack.msg.casillaInfo.matricula}
                                                    precio1C={ack.msg.casillaInfo.precio1C}
                                                    precio2C={ack.msg.casillaInfo.precio2C}
                                                    precio3C={ack.msg.casillaInfo.precio3C}
                                                    precio4C={ack.msg.casillaInfo.precio4C}
                                                    optatividad={ack.msg.casillaInfo.devolucionMatricula}
                                                    precioCredito={ack.msg.casillaInfo.precioCompraCreditos}
                                                />);
                                                break; 
                                            case 2:
                                                setCarta(<Asignatura_2
                                                    title={ack.msg.casillaInfo.nombre}
                                                    coste={ack.msg.casillaInfo.precioCompra}
                                                    matricula={ack.msg.casillaInfo.matricula}
                                                    precio1C={ack.msg.casillaInfo.precio1C}
                                                    precio2C={ack.msg.casillaInfo.precio2C}
                                                    precio3C={ack.msg.casillaInfo.precio3C}
                                                    precio4C={ack.msg.casillaInfo.precio4C}
                                                    optatividad={ack.msg.casillaInfo.devolucionMatricula}
                                                    precioCredito={ack.msg.casillaInfo.precioCompraCreditos}
                                                />);
                                                break; 
                                            case 3:
                                                setCarta(
                                                <Asignatura_3
                                                    title={ack.msg.casillaInfo.nombre}
                                                    coste={ack.msg.casillaInfo.precioCompra}
                                                    matricula={ack.msg.casillaInfo.matricula}
                                                    precio1C={ack.msg.casillaInfo.precio1C}
                                                    precio2C={ack.msg.casillaInfo.precio2C}
                                                    precio3C={ack.msg.casillaInfo.precio3C}
                                                    precio4C={ack.msg.casillaInfo.precio4C}
                                                    optatividad={ack.msg.casillaInfo.devolucionMatricula}
                                                    precioCredito={ack.msg.casillaInfo.precioCompraCreditos}
                                                />);
                                                break; 
                                            case 4:
                                                setCarta(                                            
                                                <Asignatura_4
                                                    title={ack.msg.casillaInfo.nombre}
                                                    coste={ack.msg.casillaInfo.precioCompra}
                                                    matricula={ack.msg.casillaInfo.matricula}
                                                    precio1C={ack.msg.casillaInfo.precio1C}
                                                    precio2C={ack.msg.casillaInfo.precio2C}
                                                    precio3C={ack.msg.casillaInfo.precio3C}
                                                    precio4C={ack.msg.casillaInfo.precio4C}
                                                    optatividad={ack.msg.casillaInfo.devolucionMatricula}
                                                    precioCredito={ack.msg.casillaInfo.precioCompraCreditos}
                                                />);
                                                break; 
                                            case 5:
                                                setCarta(                                            
                                                <Asignatura_5
                                                title={ack.msg.casillaInfo.nombre}
                                                    coste={ack.msg.casillaInfo.precioCompra}
                                                    matricula={ack.msg.casillaInfo.matricula}
                                                    precio1C={ack.msg.casillaInfo.precio1C}
                                                    precio2C={ack.msg.casillaInfo.precio2C}
                                                    precio3C={ack.msg.casillaInfo.precio3C}
                                                    precio4C={ack.msg.casillaInfo.precio4C}
                                                    optatividad={ack.msg.casillaInfo.devolucionMatricula}
                                                    precioCredito={ack.msg.casillaInfo.precioCompraCreditos}
                                                />);
                                                break;  
                                            case 6:
                                                setCarta(                                            
                                                <Asignatura_6
                                                    title={ack.msg.casillaInfo.nombre}
                                                    coste={ack.msg.casillaInfo.precioCompra}
                                                    matricula={ack.msg.casillaInfo.matricula}
                                                    precio1C={ack.msg.casillaInfo.precio1C}
                                                    precio2C={ack.msg.casillaInfo.precio2C}
                                                    precio3C={ack.msg.casillaInfo.precio3C}
                                                    precio4C={ack.msg.casillaInfo.precio4C}
                                                    optatividad={ack.msg.casillaInfo.devolucionMatricula}
                                                    precioCredito={ack.msg.casillaInfo.precioCompraCreditos}
                                                />);
                                                break; 
                                            case 7:
                                                setCarta(                                            
                                                <Asignatura_7
                                                    title={ack.msg.casillaInfo.nombre}
                                                    coste={ack.msg.casillaInfo.precioCompra}
                                                    matricula={ack.msg.casillaInfo.matricula}
                                                    precio1C={ack.msg.casillaInfo.precio1C}
                                                    precio2C={ack.msg.casillaInfo.precio2C}
                                                    precio3C={ack.msg.casillaInfo.precio3C}
                                                    precio4C={ack.msg.casillaInfo.precio4C}
                                                    optatividad={ack.msg.casillaInfo.devolucionMatricula}
                                                    precioCredito={ack.msg.casillaInfo.precioCompraCreditos}
                                                />);
                                                break; 
                                            case 8:
                                                setCarta(                                            
                                                <Asignatura_8
                                                    title={ack.msg.casillaInfo.nombre}
                                                    coste={ack.msg.casillaInfo.precioCompra}
                                                    matricula={ack.msg.casillaInfo.matricula}
                                                    precio1C={ack.msg.casillaInfo.precio1C}
                                                    precio2C={ack.msg.casillaInfo.precio2C}
                                                    precio3C={ack.msg.casillaInfo.precio3C}
                                                    precio4C={ack.msg.casillaInfo.precio4C}
                                                    optatividad={ack.msg.casillaInfo.devolucionMatricula}
                                                    precioCredito={ack.msg.casillaInfo.precioCompraCreditos}
                                                />);
                                                break; 
                                        }
                                    }
                                    else if(ack.msg.casillaInfo.tipo == 'F'){
                                        //console.log("evento");
                                        setCarta(                                    
                                        <Evento
                                            title={ack.msg.casillaInfo.nombre}
                                            coste={ack.msg.casillaInfo.precioCompra}
                                            matricula={ack.msg.casillaInfo.matricula}
                                            precio1C={ack.msg.casillaInfo.precio1C}
                                            precio2C={ack.msg.casillaInfo.precio2C}
                                            precio3C={ack.msg.casillaInfo.precio3C}
                                            optatividad={ack.msg.casillaInfo.devolucionMatricula}
                                            imageSource={require('../../assets/bob.png')}
                                        />);
                                    }
                                    else if(ack.msg.casillaInfo.tipo == 'I'){
                                        //console.log("recurso");
                                        setCarta(                                   
                                        <Recurso
                                            title={ack.msg.casillaInfo.nombre}
                                            coste={ack.msg.casillaInfo.precioCompra}
                                            optatividad={ack.msg.casillaInfo.devolucionMatricula}
                                            imageSource={require('../../assets/bob.png')}
                                        />);
                                    }
                                }
                                else if(ack.cod == 2){
                                    alert("Se ha producido un error en el servidor. Por favor vuelva a intentarlo");
                                }
                                //console.log(carta);
                            })
                        }}>
                        <Text style={styles.modalText}>{value.nombre}</Text> 
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            if(miTurno){
                                setModalVenderVisible(true);
                                setCoordenadas({h:value.h, v:value.v})
                            }
                            else{
                                alert("Espera a que sea tu turno para vender asignaturas");
                            }
                        }}>
                        <MaterialCommunityIcons name="trash-can-outline" size={24} color="red" />
                    </Pressable>
                    {value.disminuir && 
                    <Pressable
                        onPress={() => {
                            if(miTurno){
                                setModalDisminuirVisible(true);
                                setCoordenadas({h:value.h, v:value.v})
                            }
                            else{
                                alert("Espera a que sea su turno para disminuir los créditos de la asignaturas");
                            }
                        }}>
                        <FontAwesome name="cart-arrow-down" size={24} color="red" />
                    </Pressable>}
                    {value.hipotecar && 
                    <Pressable
                        onPress={() => {
                            if(miTurno){
                                setModalHipotecarVisible(true);
                                setCoordenadas({h:value.h, v:value.v})
                            }
                            else{
                                alert("Espera a que sea su turno para hacer optativa la asignaturas");
                            }
                        }}>
                    <FontAwesome5 name="hand-holding-usd" size={24} color="blue" />        
                    </Pressable>}
                  </View>
                ))
            }
            </ScrollView>
            </View>
        </View>
        </Modal>
        <Modal
        animationType="slide"
        visible={modalCartaVisible}
        onRequestClose={ () => {setModalCartaVisible({modalCartaVisible: !modalCartaVisible});}}
        transparent={true}
        props>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Pressable
                onPress={ () => {setModalCartaVisible({modalCartaVisible: !modalCartaVisible});}}>
                <Entypo name="circle-with-cross" size={35} color="red" style={styles.button}/>
            </Pressable>
            <View style={styles.carta}>
                {carta}
            </View>
            </View>
        </View>
        </Modal>
        <Modal
        animationType="slide"
        visible={modalVenderVisible}
        onRequestClose={() => {setModalVenderVisible({modalVenderVisible: !modalVenderVisible})}}
        transparent={true}
        props>
        <View style={styles.centeredView}>
            <View style={styles.modalViewVender}>
                <Text style={styles.modalTextVender}>¿Desea vender la asignatura?</Text>
                <View style={styles.botones}>
                    <StyledButton
                        style={styles.boton}
                        title="Cancelar"
                        onPress={() => {setModalVenderVisible({modalVenderVisible: !modalVenderVisible})}}
                        red
                    />
                    <StyledButton
                        style={styles.boton}
                        title="Vender"
                        onPress={() => {
                            console.log("vendiendo...",  coordenadas.h, coordenadas.v, socket.id);
                            socket.emit('vender',{
                                coordenadas: {h: coordenadas.h, v: coordenadas.v},
                                socketId: socket.id
                            },
                            (ack) => {
                                console.log("Servers acknowledged vender ", ack);
                                if(ack.cod == 0){
                                    console.log("vendida");
                                    setModalVenderVisible({modalVenderVisible: !modalVenderVisible})
                                    onClose();
                                }
                                else if(ack.cod == 2){
                                    alert("Se ha producido un error en el servidor. Por favor, vuelva a intentarlo.");
                                }
                            })
                        }}
                        green
                    />
                </View>
            </View>
        </View>
        </Modal>
        <Modal
        animationType="slide"
        visible={modalDisminuirVisible}
        onRequestClose={() => {setModalDisminuirVisible({modalDisminuirVisible: !modalDisminuirVisible})}}
        transparent={true}
        props>
        <View style={styles.centeredView}>
            <View style={styles.modalViewVender}>
                <Text style={styles.modalTextVender}>¿Desea disminuir los créditos de la asignatura?</Text>
                <View style={styles.botones}>
                    <StyledButton
                        style={styles.boton}
                        title="Cancelar"
                        onPress={() => {setModalDisminuirVisible({modalDisminuirVisible: !modalDisminuirVisible})}}
                        red
                    />
                    <StyledButton
                        style={styles.boton}
                        title="Disminuir créditos"
                        onPress={() => {
                            console.log("disminuyendo créditos...", coordenadas.h, coordenadas.v);
                            socket.emit('disminuirCreditos',{
                                coordenadas: {h: coordenadas.h, v: coordenadas.v},
                                socketId: socket.id
                            },
                            (ack) => {
                                if(ack.msg == 0){
                                    console.log("disminuidos");
                                    setModalDisminuirVisible({modalDisminuirVisible: !modalDisminuirVisible})
                                    onClose();
                                }
                                else if(ack.msg == 2){
                                    alert("Se ha producido un error en el servidor. Por favor, vuelva a intentarlo.");
                                }
                            })
                        }}
                        green
                    />
                </View>
            </View>
        </View>
        </Modal>

        <Modal
        animationType="slide"
        visible={modalHipotecarVisible}
        onRequestClose={() => {setModalHipotecarVisible({modalHipotecarVisible: !modalHipotecarVisible})}}
        transparent={true}
        props>
        <View style={styles.centeredView}>
            <View style={styles.modalViewVender}>
                <Text style={styles.modalTextVender}>¿Desea hacer optativa la asignatura?</Text>
                <View style={styles.botones}>
                    <StyledButton
                        style={styles.boton}
                        title="Cancelar"
                        onPress={() => {setModalHipotecarVisible({modalHipotecarVisible: !modalHipotecarVisible})}}
                        red
                    />
                    <StyledButton
                        style={styles.boton}
                        title="Optativizar"
                        onPress={() => {
                            console.log("Optativizando...", coordenadas.h, coordenadas.v);
                            socket.emit('hipotecar',{
                                coordenadas: {h: coordenadas.h, v: coordenadas.v},
                                socketId: socket.id
                            },
                            (ack) => {
                                if(ack.msg == 0){
                                    console.log("Optativizada");
                                    setModalVenderVisible({modalHipotecarVisible: !modalHipotecarVisible})
                                    onClose();
                                }
                                else if(ack.msg == 2){
                                    alert("Se ha producido un error en el servidor. Por favor, vuelva a intentarlo.");
                                }
                            })
                        }}
                        green
                    />
                </View>
            </View>
        </View>
        </Modal>                



        </View>
    )
}
