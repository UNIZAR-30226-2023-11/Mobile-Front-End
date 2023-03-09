import React from 'react'
import {StyleSheet, Image, View} from'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IndexScreen from './src/screens/Index.js';
import LogInScreen from './src/screens/Login.js';
import SignInScreen from './src/screens/SignIn.js';
import HomeScreen from './src/screens/Home.js';
import ProfilePage from './src/pages/Profile.js';
import SettingsPage from './src/pages/Settings.js';
import CrearSalaScreen from './src/screens/CrearSala.js';
import UnirseSalaScreen from './src/screens/UnirseSala.js';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name="MONOPOLY INFORMÁTICO"
          component={IndexScreen}
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
          options={{title: 'Registrarse'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="CrearSala"
          component={CrearSalaScreen}
          options={{title: 'Crear Sala'}}
        />
        <Stack.Screen
          name="UnirseSala"
          component={UnirseSalaScreen}
          options={{title: 'Unirse a Sala'}}
        />

        <Stack.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{title: 'Perfil'}}          
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{title: 'Ajustes'}}   
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const SettingsScreen = ({navigation, route}) => {
  return <SettingsPage></SettingsPage>;
};

const ProfileScreen = ({navigation, route}) => {
  return <ProfilePage></ProfilePage>;
};


