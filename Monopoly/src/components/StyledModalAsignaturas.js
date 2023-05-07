import React from 'react';
import { Modal, ScrollView, StyleSheet, View, Pressable, Text } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
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

export default function StyledModalAsignaturas({style={}, onClose, visible, onRequestClose, title, asignaturas, username, idPartida, miTurno}){

    const modalStyles = [
        styles.modalView,
        style
    ]

    const [modalCartaVisible, setModalCartaVisible] = React.useState(false);
    const [modalVenderVisible, setModalVenderVisible] = React.useState(false);
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
                            const response = fetch(infoAsignatura,{
                            method: 'PUT',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({"coordenadas":{"h": value.h,"v": value.v}})
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
                                        setCarta(                                            
                                        <Asignatura_4
                                            title={data.casillaInfo.nombre}
                                            coste={data.casillaInfo.precioCompra}
                                            description={""}
                                        />);
                                        break; 
                                    case 5:
                                        setCarta(                                            
                                        <Asignatura_5
                                            title={data.casillaInfo.nombre}
                                            coste={data.casillaInfo.precioCompra}
                                            description={""}
                                        />);
                                        break;  
                                    case 6:
                                        setCarta(                                            
                                        <Asignatura_6
                                            title={data.casillaInfo.nombre}
                                            coste={data.casillaInfo.precioCompra}
                                            description={""}
                                        />);
                                        break; 
                                    case 7:
                                        setCarta(                                            
                                        <Asignatura_7
                                            title={data.casillaInfo.nombre}
                                            coste={data.casillaInfo.precioCompra}
                                            description={""}
                                        />);
                                        break; 
                                    case 8:
                                        setCarta(                                            
                                        <Asignatura_8
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
                            setModalCartaVisible(true)
                            })
                        .catch((error) => {
                            //Error
                            //alert(JSON.stringify(error));
                            console.error(error);
                        });}}>
                        <Text style={styles.modalText}>{value.nombre}</Text> 
                    </Pressable>
                    {/* {miTurno && <Pressable
                        onPress={() => {
                            console.log("vendiendo...", value.nombre);
                            const response =  fetch(venderAsignatura, {
                            method: 'PUT',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({  "idPartida": idPartida,
                                                    "username": username,
                                                    "coordenadas":{"h": value.h,"v": value.v}})
                            })
                            .then((response) => {
                            if(response.status != 200){
                                throw new Error('Error de estado: '+ response.status);
                            }
                            console.log("aumentados");
                            onClose();
                            })
                            .catch((error) => {
                            //Error
                            //alert(JSON.stringify(error));
                            console.error(error);
                            });}}>
                        <MaterialCommunityIcons name="trash-can-outline" size={24} color="red" />
                    </Pressable>} */}
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
                <Text style={styles.modalTextVender}>¿Esta seguro de que desea vender la asignatura?</Text>
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
                            console.log("vendiendo...", idPartida, username, coordenadas.h, coordenadas.v);
                            const response =  fetch(venderAsignatura, {
                            method: 'PUT',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({  "idPartida": idPartida,
                                                    "username": username,
                                                    "coordenadas":{"h": coordenadas.h,"v": coordenadas.v}})
                            })
                            .then((response) => {
                            if(response.status != 200){
                                throw new Error('Error de estado: '+ response.status);
                            }
                            console.log("vendida");
                            setModalVenderVisible({modalVenderVisible: !modalVenderVisible})
                            onClose();
                            })
                            .catch((error) => {
                            //Error
                            alert(JSON.stringify(error));
                            console.error(error);
                            });}}
                        green
                    />
                </View>
            </View>
        </View>
        </Modal>
        </View>
    )
}