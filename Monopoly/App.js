import React from 'react'
import {StyleSheet, Image, View} from'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StyledButton from './src/components/StyledButton.js';
import LogInPage from './src/pages/Login.js';
import SignInPage from './src/pages/SignIn.js';
import StyledText from './src/components/StyledText.js';

const Stack = createNativeStackNavigator();

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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MONOPOLY INFORMÁTICO"
          component={HomeScreen}
          optiones={{title: 'MONOPOLY'}}          
        />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{title: 'Iniciar Sesión'}}          
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{title: 'SIGN IN'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.app}>
      <View>
        <Image
            style={styles.logoJuego}
            source={require('./assets/logo_juego_monopoly.png')}
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
          onPress={() => navigation.navigate('Juego')}
        />
      </View>
      <View style={{justifyContent: 'flex-end'}}>
      <Image
            style={styles.logoEmpresa}
            source={require('./assets/logo_empresa.png')}
        />
      </View>
    </View>
  );
};

const LogInScreen = ({navigation, route}) => {
  return <LogInPage></LogInPage>;
};

const SignInScreen = ({navigation, route}) => {
  return <SignInPage></SignInPage>;
};
