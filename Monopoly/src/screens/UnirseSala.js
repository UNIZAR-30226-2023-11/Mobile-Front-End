import React from 'react';
import { View, StyleSheet , Text , Button, Pressable} from'react-native';
import {Searchbar} from 'react-native-paper';
import StyledModalSala from "../components/StyledModalSala";


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

    return (
        <View style={styles.barra}>
            <Text style={styles.titulo}> Introduce el id de la partida</Text>
            <Searchbar
                placeholder="123456"
                placeholderTextColor="grey"
                onSubmitEditing={() => setModalPartidaVisible(true)}
            />

            <StyledModalSala
                title="Únete a la partida"
                text="Partida #123456"   
                style={styles.modal}
                buttonText="Unirme"
                goTo= {() => navigation.navigate('EsperaUnirse')}
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
