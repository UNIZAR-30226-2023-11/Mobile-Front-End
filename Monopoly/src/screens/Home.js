import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Modal } from "react-native";
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import StyledButton from "../components/StyledButton";
import StyledTextInput from "../components/StyledTextInput";
import StyledModal from "../components/StyledModal";

const styles = StyleSheet.create({
    pantalla: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
    icon:{
        position:'absolute',
        top:'3%',
        right:'5%'
    },
    header: {
        height: '20%'
    },
    nickname: {
        height: '7%',
        width: '70%',
        textAlign: 'center',
        marginLeft: 50,
        marginRight: 50,   
    }
});


export default function HomeScreen({navigation}){

    const [nickname, setNickname] = React.useState("");
    const [modalReglasVisible, setModalReglasVisible] = React.useState(false);
    const [modalSobreNosotrosVisible, setModalSobreNosotrosVisible] = React.useState(false);

    return(
        <View style={styles.pantalla}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Perfil')}>
            <FontAwesome5 name="user-alt" size={28} color="black" />
        </TouchableOpacity>
        <View style={styles.header}><Text>HEADER</Text></View>
            <StyledTextInput style={styles.nickname}
                placeholder="Ingresa tu nickname"
                onChangeText={setNickname}
                value={nickname}
            />
            <StyledButton
                homeScreen
                title="Crear sala pública"
                onPress={() => console.log(nickname)}
            />
            <StyledButton
                homeScreen
                title="Crear sala privada"
                onPress={() => console.log(nickname)}
            />
            <StyledButton
                homeScreen
                title="Unirse a una sala"
                onPress={() => console.log(nickname)}
            />
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalReglasVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalReglasVisible({modalReglasVisible: !modalReglasVisible});
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <Pressable
                    onPress={() => setModalReglasVisible({modalReglasVisible: !modalReglasVisible})}>
                    <Entypo name="circle-with-cross" size={24} color="red" style={styles.button}/>
                </Pressable>
                <Text style={styles.modalText}>REGLAS DEL JUEGO</Text>
                </View>
            </View>
            </Modal>
            <StyledButton
                homeScreen
                title="Reglas"
                onPress={() => setModalReglasVisible(true)}
            />
             {// <StyledModal
            //   onClose = {setModalSobreNosotrosVisible({modalSobreNosotrosVisible: !modalSobreNosotrosVisible})}
            //    visible={modalSobreNosotrosVisible}
            //    onRequestClose={() => {
            //        Alert.alert('Modal has been closed.');
            //        setModalSobreNosotrosVisible({modalSobreNosotrosVisible: !modalSobreNosotrosVisible});
            //    }} 
            //></StyledModal>
             }
            <StyledButton
                homeScreen
                title="Sobre nosotros"
                onPress={() => setModalSobreNosotrosVisible(true)}
            />
        </View>
    );
};