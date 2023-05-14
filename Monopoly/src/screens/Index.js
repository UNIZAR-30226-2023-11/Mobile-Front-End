import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import StyledText from '../components/StyledText';
import StyledButton from '../components/StyledButton';
import StyledModal from "../components/StyledModal";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    logoEmpresa: {
      flex:2, 
      height: height*0.33,
      width: width*0.9,
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
                text = {`                  ¡Conócenos!
                
Conoce al equipo técnico que forma la empresa Susan L. Graham, que está formado por 7 personas:

      Luna Álvarez - developer
      Lucía Beltrán - developer
      Pilar Fierro - developer
      Martina Gracia - developer
      Daniel Carrizo - developer
      Antoine Gajan - developer`} 
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
            onPress={() => navigation.navigate('LogIn', {perfil: false})}
          />
          <StyledButton
            lightblue
            title="Registrarse"
            onPress={() => navigation.navigate('SignUp',{perfil: false})}
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
