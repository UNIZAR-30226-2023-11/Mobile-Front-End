import React from 'react'
import {StyleSheet, Image, View} from'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StyledButton from './src/components/StyledButton.js';
import SettingsPage from './src/pages/Settings.js';
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
          name="Ajustes"
          component={SettingsScreen}
          options={{title: 'Ajustes'}}          
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
        <StyledText monopoly>Pruebas</StyledText>
      </View>
      <View>
        <StyledButton
          lightblue
          title="Ajustes"
          onPress={() => navigation.navigate('SettingsPage')}
        />
    </View>
    </View>
  );
};

const SettingsScreen = ({navigation, route}) => {
  return <SettingsPage></SettingsPage>;
};

