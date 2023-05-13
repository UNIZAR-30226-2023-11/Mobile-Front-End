import React, { useCallback, useEffect } from "react";
import { StyleSheet, Button, View, Modal, Text, Pressable } from 'react-native';
import { NativeBaseProvider } from "native-base";
import StyledButton from "./StyledButton";
import { Entypo } from '@expo/vector-icons';
import { SocketContext } from "./SocketContext";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
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
        width:'45%',
        height: '40%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        }
    },
    button :{
        marginLeft: '80%',
        marginTop: '5%'
    },
    titulo: {
        marginTop:'8%',
        marginBottom: '4%',
        fontWeight: 'bold',
        fontSize: 20, 
        textAlign: 'center'
    },
    elementoLista:{
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: '5%',
        marginLeft: '8%',
        marginRight: '8%'
    },
    elementoPrecio:{
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: '5%',
        marginLeft: '26%',
        marginRight: '28%',
    },
    elementoBoton:{
        flexDirection: 'column', 
        //alignItems: 'center',
        //marginLeft: '8%',
        //marginRight: '8%'
    },
    elementoBoton1:{ 
        //alignItems: 'center',
        //marginLeft: '8%',
        //marginRight: '8%'
    },
    elementoBoton2:{
        //alignItems: 'center',
        //marginLeft: '8%',
        //marginRight: '8%'
    },
    elementoBoton3:{
        //alignItems: 'center',
        marginLeft: '8%',
        marginRight: '8%'
    },
    pujas: {
        marginTop: '4%',
        marginBottom: '4%',
    },
    modal: {
        height: '30%',
        width: '84%',
    }
});

export default function StyledModalPuja({visible, onClose, onRequestClose, infoAsignatura}){
    
    const {socket} = React.useContext(SocketContext);
    const [nombre, setNombre] = React.useState("");
    const [cantidad, setCantidad] = React.useState(0);
    const [carta,setCarta] = React.useState(null);
    const [modalCartaVisible, setModalCartaVisible] = React.useState(false);

    const handleActualizarPuja = useCallback((mensaje) => {
        console.log('Mensaje recibido actualizar puja: ' + mensaje);
        setNombre(mensaje.nombre);
        setCantidad(mensaje.cantidad);
    });

    const handleTerminarPuja = useCallback ((mensaje) => {
        console.log('Mensaje recibido terminar puja: '+ mensaje);
        onClose();
    });

    const actualizarPujaListener = (mensaje) => handleActualizarPuja(mensaje);
    const terminarPujaListener = (mensaje) => handleTerminarPuja(mensaje);

    useEffect(() =>{
        socket.on('actualizarPuja', actualizarPujaListener);
        
        socket.on('terminarPuja', terminarPujaListener);
        if(infoAsignatura){
            if(infoAsignatura.tipo == 'A'){
                console.log("asignatura ", infoAsignatura.cuatrimestre);
                switch(infoAsignatura.cuatrimestre){
                    case 1:
                        setCarta(<Asignatura_1
                            title={infoAsignatura.nombre}
                            coste={infoAsignatura.precioCompra}
                            matricula={infoAsignatura.matricula}
                            precio1C={infoAsignatura.precio1C}
                            precio2C={infoAsignatura.precio2C}
                            precio3C={infoAsignatura.precio3C}
                            precio4C={infoAsignatura.precio4C}
                            optatividad={infoAsignatura.devolucionMatricula}
                            precioCredito={infoAsignatura.precioCompraCreditos}
                        />);
                        break; 
                    case 2:
                        setCarta(<Asignatura_2
                            title={infoAsignatura.nombre}
                            coste={infoAsignatura.precioCompra}
                            matricula={infoAsignatura.matricula}
                            precio1C={infoAsignatura.precio1C}
                            precio2C={infoAsignatura.precio2C}
                            precio3C={infoAsignatura.precio3C}
                            precio4C={infoAsignatura.precio4C}
                            optatividad={infoAsignatura.devolucionMatricula}
                            precioCredito={infoAsignatura.precioCompraCreditos}
                        />);
                        break; 
                    case 3:
                        setCarta(
                        <Asignatura_3
                            title={infoAsignatura.nombre}
                            coste={infoAsignatura.precioCompra}
                            matricula={infoAsignatura.matricula}
                            precio1C={infoAsignatura.precio1C}
                            precio2C={infoAsignatura.precio2C}
                            precio3C={infoAsignatura.precio3C}
                            precio4C={infoAsignatura.precio4C}
                            optatividad={infoAsignatura.devolucionMatricula}
                            precioCredito={infoAsignatura.precioCompraCreditos}
                        />);
                        break; 
                    case 4:
                        setCarta(                                            
                        <Asignatura_4
                            title={infoAsignatura.nombre}
                            coste={infoAsignatura.precioCompra}
                            matricula={infoAsignatura.matricula}
                            precio1C={infoAsignatura.precio1C}
                            precio2C={infoAsignatura.precio2C}
                            precio3C={infoAsignatura.precio3C}
                            precio4C={infoAsignatura.precio4C}
                            optatividad={infoAsignatura.devolucionMatricula}
                            precioCredito={infoAsignatura.precioCompraCreditos}
                        />);
                        break; 
                    case 5:
                        setCarta(                                            
                        <Asignatura_5
                        title={infoAsignatura.nombre}
                            coste={infoAsignatura.precioCompra}
                            matricula={infoAsignatura.matricula}
                            precio1C={infoAsignatura.precio1C}
                            precio2C={infoAsignatura.precio2C}
                            precio3C={infoAsignatura.precio3C}
                            precio4C={infoAsignatura.precio4C}
                            optatividad={infoAsignatura.devolucionMatricula}
                            precioCredito={infoAsignatura.precioCompraCreditos}
                        />);
                        break;  
                    case 6:
                        setCarta(                                            
                        <Asignatura_6
                            title={infoAsignatura.nombre}
                            coste={infoAsignatura.precioCompra}
                            matricula={infoAsignatura.matricula}
                            precio1C={infoAsignatura.precio1C}
                            precio2C={infoAsignatura.precio2C}
                            precio3C={infoAsignatura.precio3C}
                            precio4C={infoAsignatura.precio4C}
                            optatividad={infoAsignatura.devolucionMatricula}
                            precioCredito={infoAsignatura.precioCompraCreditos}
                        />);
                        break; 
                    case 7:
                        setCarta(                                            
                        <Asignatura_7
                            title={infoAsignatura.nombre}
                            coste={infoAsignatura.precioCompra}
                            matricula={infoAsignatura.matricula}
                            precio1C={infoAsignatura.precio1C}
                            precio2C={infoAsignatura.precio2C}
                            precio3C={infoAsignatura.precio3C}
                            precio4C={infoAsignatura.precio4C}
                            optatividad={infoAsignatura.devolucionMatricula}
                            precioCredito={infoAsignatura.precioCompraCreditos}
                        />);
                        break; 
                    case 8:
                        setCarta(                                            
                        <Asignatura_8
                            title={infoAsignatura.nombre}
                            coste={infoAsignatura.precioCompra}
                            matricula={infoAsignatura.matricula}
                            precio1C={infoAsignatura.precio1C}
                            precio2C={infoAsignatura.precio2C}
                            precio3C={infoAsignatura.precio3C}
                            precio4C={infoAsignatura.precio4C}
                            optatividad={infoAsignatura.devolucionMatricula}
                            precioCredito={infoAsignatura.precioCompraCreditos}
                        />);
                        break; 
                }
            }
            else if(infoAsignatura.tipo == 'F'){
                //console.log("evento");
                setCarta(                                    
                <Evento
                    title={infoAsignatura.nombre}
                    coste={infoAsignatura.precioCompra}
                    matricula={infoAsignatura.matricula}
                    precio1C={infoAsignatura.precio1C}
                    precio2C={infoAsignatura.precio2C}
                    precio3C={infoAsignatura.precio3C}
                    optatividad={infoAsignatura.devolucionMatricula}
                    imageSource={require('../../assets/bob.png')}
                />);
            }
            else if(infoAsignatura.tipo == 'I'){
                //console.log("recurso");
                setCarta(                                   
                <Recurso
                    title={infoAsignatura.nombre}
                    coste={infoAsignatura.precioCompra}
                    optatividad={infoAsignatura.devolucionMatricula}
                    imageSource={require('../../assets/bob.png')}
                />);
            }
            //console.log(carta);
        }

        return () => {
            socket.off('actualizarPuja', actualizarPujaListener);
            socket.off('terminarPuja', terminarPujaListener);
        }

    },[infoAsignatura])

    return (
        <View>
        <NativeBaseProvider>
            <Modal 
                animationType="slide"
                style={styles.modalView} 
                visible={visible}
                onRequestClose={onRequestClose}
                transparent={true}
                props>
                <View style={styles.centeredView}>
                    <Pressable
                        onPress={onClose}>
                        <Entypo name="circle-with-cross" size={35} color="red" style={styles.button}/>
                    </Pressable>

                    <Text style={styles.titulo}>PUJA</Text>
                    <View style={styles.elementoLista}>
                        <Text style={styles.titulo} >PRECIO PUJA $$$ </Text>
                    </View>
                    <View style={styles.elementoBoton}>
                        <StyledButton style={styles.elementoBoton1} title="+10€"
                        onPress={() => {
                            console.log("BOTON 10€ PULSADO ") ;
                            socket.emit('pujar', {
                                cantidad: 10,
                                socketId: socket.id
                                }
                            ,(ack) =>{
                                if(ack.cod==0){
                                    
                                }
                                else if(ack.cod == 2){
                                    alert("Se ha producido un error en el servidor. Vuelva a intentarlo");
                                }
                            });
                        }}/>
                        <StyledButton style={styles.elementoBoton2} title="+50€"
                        onPress={() => {
                            console.log("BOTON 50€ PULSADO "); 
                            socket.emit('pujar', {
                                cantidad: 50,
                                socketId: socket.id
                                }
                            ,(ack) =>{
                                if(ack.cod==0){
                                    
                                }
                                else if(ack.cod == 2){
                                    alert("Se ha producido un error en el servidor. Vuelva a intentarlo");
                                }
                            });
                        }}/>
                        <StyledButton style={styles.elementoBoton2}title="+100€"
                        onPress={() => {
                            console.log("BOTON 100€ PULSADO "); 
                            socket.emit('pujar', {
                                cantidad: 100,
                                socketId: socket.id
                                }
                            ,(ack) =>{
                                if(ack.cod==0){

                                }
                                else if(ack.cod == 2){
                                    alert("Se ha producido un error en el servidor. Vuelva a intentarlo");
                                }
                            });
                        }}/>                                
                    </View>
                    <Text style={styles.pujas}>{`${nombre} ha pujado ${cantidad}`}</Text>
                    <Text>Nombre de la carta </Text>
                    <StyledButton title="infoAsignatura"
                        onPress={() => {
                            console.log("MOSTRAR MODAL INFO ASIGNATURA ");
                            setModalCartaVisible(true);
                        }}/>  
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
            </NativeBaseProvider>
        </View>

    )
}