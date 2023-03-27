import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import StyledText from '../components/StyledText';
import StyledButton from '../components/StyledButton';


const styles = StyleSheet.create({
    logoJuego: {
      width: 180,
      height: 180,
      alignSelf: 'center'
    },
    logoEmpresa: {
      height: 80,
      width: 150,
      marginTop: 10,
      alignSelf: 'center'
    },
    app :{
      flex: 1,
      backgroundColor: 'white'
    }
})

export default function IndexScreen({navigation}) {
    return (
      <View style={styles.app}>
        <View>
          <Image
              style={styles.logoJuego}
              source={require('../../assets/logo_juego_monopoly.png')}
          />
        </View>
        <View>
          <StyledText monopoly>MONOPOLY INFORMÁTICO</StyledText>
        </View>
        <View>
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
        <View style={{justifyContent: 'flex-end'}}>
        <Image
              style={styles.logoEmpresa}
              source={require('../../assets/logo_empresa.png')}
          />
        </View>
      </View>
    );
  };