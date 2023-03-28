import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import StyledText from '../components/StyledText';
import StyledButton from '../components/StyledButton';
import StyledModal from "../components/StyledModal";


const styles = StyleSheet.create({
    logoEmpresa: {
      flex:2, 
      height: '33%',
      width: '90%',
      marginTop: '5%',
      alignSelf: 'center'
    },
    app :{
      flex: 1,
      backgroundColor: 'white'
    },
    botones:{
      flex:2,
      marginLeft: '5%', 
      marginRight: '5%'
    },
    contacto:{
      width:'85%',
      height: '40%',
    }
})

export default function IndexScreen({navigation}) {
  
  const [modalSobreNosotrosVisible, setModalSobreNosotrosVisible] = React.useState(false);
  const [modalContactoVisible, setModalContactoVisible] = React.useState(false);

  return (
      <View style={styles.app}>
      <StyledText monopoly>MONOPOLY INFORMÁTICO</StyledText>
        <Image
            style={styles.logoEmpresa}
            source={require('../../assets/logo_empresa.png')}
        />
        <View style={{flex:0.6, flexDirection:'row'}}>
        <StyledModal
                title="SOBRE NOSOTROS"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    Lorem ipsum dolor sit amet, con sectetuer adipiscing elit, sed do eiusmod tempor incididunt ut lab et d Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid id odio ut aliquip ex ea commodo consequat"   
                onClose = { () => {setModalSobreNosotrosVisible({modalSobreNosotrosVisible: !modalSobreNosotrosVisible})}}
                visible={modalSobreNosotrosVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalSobreNosotrosVisible({modalSobreNosotrosVisible: !modalSobreNosotrosVisible});
                }} 
            />
            <StyledButton
            style={styles.botones}
                lightblue
                title="Nosotros"
                onPress={() => setModalSobreNosotrosVisible(true)}
            />
            <StyledModal
              style={styles.contacto}
                title="CONTACTO"
                text="Cualquier cosa que necesite no dude en enviar un correo a susanlgrahamgames@gmail.com"
                onClose = { () => {setModalContactoVisible({modalContcatoVisible: !modalContactoVisible})}}
                visible={modalContactoVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalContactoVisible({modalContactoVisible: !modalContactoVisible});
                }} 
            />
            <StyledButton
              style={styles.botones}
                lightblue
                title="Contacto"
                onPress={() => setModalContactoVisible(true)}
            />
          </View>
          <View style={{flex:2}}>
          <StyledButton
            lightblue
            title="Iniciar Sesión"
            onPress={() => navigation.navigate('LogIn')}
          />
          <StyledButton
            lightblue
            title="Registrarse"
            onPress={() => navigation.navigate('SignIn')}
          />
          <StyledButton
            lightblue
            title="Jugar como invitado"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  };