import React from 'react'
import {StyleSheet} from'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyledUpperButton, StyledLowerButton} from './src/components/StyledButton.js';
import LogInPage from './src/pages/Login.js';
import SignInPage from './src/pages/SignIn.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
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
    <>
    <StyledUpperButton
      title="Iniciar Sesión"
      onPress={() => navigation.navigate('LogIn')}
    />
    <StyledLowerButton
      title="Registrarse"
      onPress={() => navigation.navigate('SignIn')}
    />
    </>
  );
};

const LogInScreen = ({navigation, route}) => {
  return <LogInPage></LogInPage>;
};

const SignInScreen = ({navigation, route}) => {
  return <SignInPage></SignInPage>;
};
