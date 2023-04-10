import React from 'react';
import { View, StyleSheet , Text , Button, Pressable} from'react-native';
import {Searchbar} from 'react-native-paper';
import StyledModalSala from "../components/StyledModalSala";
import { unirPartida } from '../url/partida';

const styles = StyleSheet.create({
    barra: { 
        padding: 15,
    },
    titulo: {
        fontSize: 25,
        marginBottom: '5%',
        marginTop: '5%',
        alignContent: 'center',
        alignSelf: 'center',
    },
    unirme: {

    },
    modal: {
        height: '30%',
        width: '84%',
    }
});

export default function UnirseSalaScreen({ navigation }) {

    const [modalPartidaVisible, setModalPartidaVisible] = React.useState(false);
    const [idPartida, setIdPartida] = React.useState(0);

    return (
        <View style={styles.barra}>
            <Text style={styles.titulo}> Introduce el id de la partida</Text>
            <Searchbar
                placeholder="123456"
                placeholderTextColor="grey"
                onChangeText={(id) => setIdPartida(id)}
                onSubmitEditing={() => setModalPartidaVisible(true)}
            />

            <StyledModalSala
                title="Únete a la partida"
                text={"Partida #"+idPartida}
                style={styles.modal}
                buttonText="Unirme"
                goTo= {() => {{const response =  fetch(unirPartida, {
                                    method: 'PUT',
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify({"idPartida": idPartida,
                                                          "username": user})
                                    })
                                    .then((response) => {
                                    if(response.status === 200){
                                        console.log(response.json);
                                        navigation.navigate('EsperaUnirse', {user: user})
                                    }else {
                                        console.log(response.status);
                                        console.log(response.json);
                                    }})
                                .catch((error) => {
                                    //Error
                                    alert(JSON.stringify(error));
                                    console.error(error);
                                });
                            }}}
                onClose = { () => {setModalPartidaVisible({setModalPartidaVisible: !modalPartidaVisible})}}
                visible={modalPartidaVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalReglasVisible({modalPartidaVisible: !modalPartidaVisible});
                }} 
            >
            </StyledModalSala> 

        </View>
    );
};
