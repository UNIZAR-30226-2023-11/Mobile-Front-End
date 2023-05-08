import React from 'react';
import { Modal, StyleSheet, View, Text, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import StyledButton from "./StyledButton"
import { Select, NativeBaseProvider } from "native-base";
import InputSpinner from 'react-native-input-spinner';
import { comprarAsignatura, aumentarCreditosAsignatura } from '../url/partida';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import { SocketContext } from './SocketContext';

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
    c_hor, c_ver, username, idPartida, aumentarCreditos, esMia, jugadores}
    ){

    const {socket} = React.useContext(SocketContext);

    const [modalAumentoVisible, setModalAumentoVisible] = React.useState(false);
    const [modalIntercambiosVisible, setModalIntercambiosVisible] = React.useState(false);
    const [modalPreguntaIntercambiosVisible, setModalPreguntaIntercambiosVisible] = React.useState(false);
    
    const [jugadorElegido, setJugadorElegido] = React.useState(null);
    const [precioTrade, setPrecioTrade] = React.useState(null);

    const handleJugadorElegido = (jugador) => {
        console.log("Jugador: " + jugador)
        setJugadorElegido(jugador);
    };

    const jugadoresItems = jugadores.map((jugador, i) => (
        <Select.Item key={i} label={jugador} value={jugador} />
      ));
        
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
                        onPress={() =>{
                            onClose();
                            setModalPreguntasIntercambiosVisible(true);
                        }}
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
                            socket.emit('comprarAignatura',{
                                coordenadas: {h: c_hor, v: c_ver}
                            },
                            (ack) => {
                                if(ack.cod == 0){
                                    console.log("comprada");
                                    if(ack.msg.aumento){
                                        setModalAumentoVisible(true);
                                    }else{
                                        onClose();
                                    }
                                }
                                else if(ack.cod == 2){
                                    alert("Se ha producido un error en el servidor. Por favor, vuelva a intentarlo.");
                                }
                            })
                        }}
                        purple
                    />}
                     {aumentarCreditos && esMia &&
                    <StyledButton
                        style={styles.boton}
                        title="Aumentar creditos"
                        onPress={() => {
                            console.log("aumentando creditos..", c_hor, c_ver);
                            socket.emit('aumentarCreditosAsignaturas',{
                                coordenadas: {h: c_hor, v: c_ver}
                            },
                            (ack) =>{
                                if(ack.cod == 0){
                                    console.log("aumentados");
                                    onClose();
                                }
                                else if(ack.cod == 2){
                                    alert("Se ha producido un error en el servidor. Por favor, intentelo de nuevo.");
                                }
                            });
                        }}
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
                    title="Realizar intercambio"
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
        <Modal
        animationType="slide"
        visible={modalPreguntaIntercambiosVisible}
        onRequestClose={() => {setModalPreguntaIntercambiosVisible({modalPreguntaIntercambiosVisible: !modalPreguntaIntercambiosVisible})}}
        transparent={true}
        props>
        <View style={styles.centeredView}>
            <View style={styles.modalViewAumentar}>
                <Text style={styles.modalTextAumentar}>
                {`¿Desea acabar el turno o realizar algun intercambio?`}
                </Text>
                <View style={styles.botonesAumentar}>
                    <StyledButton
                        style={styles.boton}
                        title="Acabar turno"
                        onPress={() => {setModalPreguntaIntercambiosVisible({modalPreguntaIntercambiosVisible: !modalPreguntaIntercambiosVisible})}}
                        purple
                    />
                    <StyledButton
                        style={styles.boton}
                        title="Realizar intercambio"
                        onPress={() =>{
                            setModalPreguntaIntercambiosVisible({modalPreguntaIntercambiosVisible: !modalPreguntaIntercambiosVisible})
                            setModalsetModalIntercambiosVisible(true);
                            }}
                        purple
                    />
                </View>
            </View>
        </View>
        </Modal>
        <Modal style={styles.modalView} visible={modalIntercambiosVisible}>
                <View style={styles.centeredView}>
                    <Pressable
                        onPress={() => setModalIntercambiosVisible(false)}>
                        <Entypo name="circle-with-cross" size={35} color="red" style={styles.button}/>
                    </Pressable>

                    <Text style={styles.titulo}>Intercambio de propiedades</Text>
                    <View style={styles.elementoLista}>
                        <Text>Intercambiar con:  </Text>
                        <Select selectedValue={jugadorElegido} 
                        minWidth="200" 
                        accessibilityLabel="Jugadores" 
                        placeholder="Seleccionar jugador" 
                        mt={1} 
                        onValueChange={(itemValue) => {handleJugadorElegido(itemValue)}}>
                        {jugadoresItems}
                        </Select> 
                    </View>
                        <View style={styles.elementoLista}>
                        <Text>Elige asignatura:   </Text>
                        <Select selectedValue={jugadorElegido} 
                        minWidth="200" 
                        accessibilityLabel="Jugadores" 
                        placeholder="Seleccionar asignatura" 
                        mt={1} 
                        onValueChange={(itemValue) => {console.log("Asignatura: " + itemValue)}}>
                            {/* obtener asignaturas en lugar de jugadores */}
                        {jugadoresItems}
                        </Select> 
                    </View>

                    <View style={styles.elementoPrecio}>
                        <Text style={{marginLeft: '0%', marginRight: '11%'}}>Indica el precio:  </Text>
                        <InputSpinner
                            //max={10}
                            min={0}
                            step={15}
                            color={"#6e7373"}
                            value={precioTrade}
                            rounded={false}
                            editable={true}
                            onChange={(num)=>{console.log("Precio: " + num); 
                            setPrecioTrade(num)}}></InputSpinner>
                    </View>

                        <StyledButton title="ENVIAR" lightblue 
                        onPress={() => {setModalVisible(false),
                                        console.log("Precio final: " + precioTrade) }}/>
                </View>
 
            </Modal> 
        </View>
    )
}