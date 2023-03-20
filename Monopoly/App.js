import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IndexScreen from './src/screens/Index.js';
import LogInScreen from './src/screens/Login.js';
import SignInScreen from './src/screens/SignIn.js';
import HomeScreen from './src/screens/Home.js';
import PerfilScreen from './src/screens/Perfil.js';
import CrearSalaScreen from './src/screens/CrearSala.js';
import UnirseSalaScreen from './src/screens/UnirseSala.js';
import TableroScreen from './src/screens/Tablero.js';

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
          name="Perfil"
          component={PerfilScreen}
          options={{title: 'Perfil'}}
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
          name="Tablero"
          component={TableroScreen}
          options={{title: 'Tablero'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
