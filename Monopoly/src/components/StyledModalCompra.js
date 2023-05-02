import React from 'react';
import { Modal, StyleSheet, View, Text } from 'react-native';


import StyledButton from "./StyledButton"
import { comprarAsignatura, aumentarCreditosAsignatura } from '../url/partida';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        flex:0.9,
        flexDirection:'column',
        marginTop: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        width: 300,
        height:500,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        }
    },
    modalViewSinInfo: {
        flex:0.63,
        flexDirection:'column',
        marginTop: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        width: 300,
        height:500,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        }
    },
    modalViewAumentar: {
        flex:0.55,
        marginTop: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        width:'80%',
        height: '30%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        }
    },
    modalText: {
        flex:0.2,
        fontSize: 20,
        marginTop:'5%',
        textAlign: 'justify',
        color: '#000',
    },
    modalTextSinInfo: {
        flex:1,
        fontSize: 20,
        marginTop:'5%',
        textAlign: 'justify',
        color: '#000',
    },
    modalTextAumentar: {
        fontSize: 20,
        fontSize: 20,
        marginTop:'5%',
        textAlign: 'justify',
        color: '#000',
    },
    carta:{
        flex:1.8
    },
    botones:{
        flex:0.52,
        marginTop:'5%',
        flexDirection:'row', 
        justifyContent:'flex-start'
    },
    botonesSinInfo:{
        flex:0.4,
        flexDirection:'row', 
        justifyContent:'flex-start'
    },
    botonesAumentar:{
        flex:0.6,
        marginTop:'20%',
        flexDirection:'row', 
        justifyContent:'flex-start'
    },
    boton:{
        flex:2,
        justifyContent:'flex-start',
        height:'60%',
        marginLeft:'2%', 
        marginRight:'2%',
        marginBottom:'16%'
    }
    
});

export default function StyledModalCompra({InfoCarta, onClose, visible, onRequestClose, doubles, text, 
    c_hor, c_ver, username, idPartida, aumentarCreditos, esMia}
    ){

    const [modalAumentoVisible, setModalAumentoVisible] = React.useState(false);
        
    return(
        <View>
        <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={onRequestClose}
        transparent={true}
        props>
        <View style={styles.centeredView}>
       
            {(!esMia || aumentarCreditos) && <View style={styles.modalView}>
                <Text style={styles.modalText}>{text}</Text>
                {!esMia && 
                <View style={styles.carta}>
                    {InfoCarta}
                </View>
                }
                <View style={styles.botones}>
                    {!doubles &&
                    <StyledButton
                        style={styles.boton}
                        title="Acabar turno"
                        onPress={onClose}
                        purple
                    />}
                    {doubles &&
                    <StyledButton
                        style={styles.boton}
                        title="Tirar otra vez"
                        onPress={onClose}
                        purple
                    />}
                    {!esMia &&
                    <StyledButton
                        style={styles.boton}
                        title="Comprar"
                        onPress={() => {
                            console.log("comprando..", c_hor, c_ver);
                            const response =  fetch(comprarAsignatura, {
                            method: 'PUT',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({  "username": username,
                                                    "coordenadas":{"h": c_hor,"v": c_ver},
                                                    "idPartida": idPartida})
                            })
                            .then((response) => {
                            if(response.status != 201){
                                throw new Error('Error de estado: '+ response.status);
                            }
                            console.log("comprada");
                            return response.json();
                            })
                            .then(data => {
                                if(data.aumento){
                                    setModalAumentoVisible(true);
                                }else{
                                    onClose();
                                }
                            })
                            .catch((error) => {
                            //Error
                            //alert(JSON.stringify(error));
                            console.error(error);
                            });}}
                        purple
                    />}
                     {aumentarCreditos && esMia &&
                    <StyledButton
                        style={styles.boton}
                        title="Aumentar creditos"
                        onPress={() => {
                            console.log("aumentando creditos..", c_hor, c_ver);
                            const response =  fetch(aumentarCreditosAsignatura, {
                            method: 'PUT',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({  "idPartida": idPartida,
                                                    "username": username,
                                                    "coordenadas":{"h": c_hor,"v": c_ver}})
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
                            });}}
                        purple
                    />}
                </View>
            </View>}
            {esMia && !aumentarCreditos && <View style={styles.modalViewSinInfo}>
                <Text style={styles.modalTextSinInfo}>{text}</Text>
                <View style={styles.botonesSinInfo}>
                    {!doubles &&
                    <StyledButton
                        style={styles.boton}
                        title="Acabar turno"
                        onPress={onClose}
                        purple
                    />}
                    {doubles &&
                    <StyledButton
                        style={styles.boton}
                        title="Tirar otra vez"
                        onPress={onClose}
                        purple
                    />}
                    <StyledButton
                    style={styles.boton}
                    title="Realizar cambio"
                    onPress={() =>{
                        console.log("realizando intercambio");
                        onClose();
                    }}
                    purple
                    />
                </View>
            </View>}
        </View>
        </Modal>
        <Modal
        animationType="slide"
        visible={modalAumentoVisible}
        onRequestClose={() => {setModalAumentoVisible({modalAumentoVisible: !modalAumentoVisible})}}
        transparent={true}
        props>
        <View style={styles.centeredView}>
            <View style={styles.modalViewAumentar}>
                <Text style={styles.modalTextAumentar}>
                {`Ha conseguido todas las asignaturas de un cuatrimestre\n
¿Desea aumentar los créditos de esta asignatura?`}
                </Text>
                <View style={styles.botonesAumentar}>
                    <StyledButton
                        style={styles.boton}
                        title="Cancelar"
                        onPress={() => {setModalAumentoVisible({modalAumentoVisible: !modalAumentoVisible})}}
                        purple
                    />
                    <StyledButton
                        style={styles.boton}
                        title="Aumentar créditos"
                        onPress={() => {
                            const response =  fetch(aumentarCreditosAsignatura, {
                            method: 'PUT',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({  "idPartida": idPartida,
                                                    "username": username,
                                                    "coordenadas":{"h": c_hor,"v": c_ver}})
                            })
                            .then((response) => {
                            if(response.status != 200){
                                throw new Error('Error de estado: '+ response.status);
                            }
                            console.log("aumentados");
                            setModalAumentoVisible({modalAumentoVisible: !modalAumentoVisible})
                            onClose();
                            })
                            .catch((error) => {
                            //Error
                            //alert(JSON.stringify(error));
                            console.error(error);
                            });
                        }}
                        purple
                    />
                </View>
            </View>
        </View>
        </Modal>
        </View>
    )
}