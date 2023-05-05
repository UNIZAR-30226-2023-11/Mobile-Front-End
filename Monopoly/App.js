import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackButton } from '@react-navigation/elements';


import IndexScreen from './src/screens/Index.js';
import LogInScreen from './src/screens/Login.js';
import SignUpScreen from './src/screens/SignUp.js';
import HomeScreen from './src/screens/Home.js';
import CrearSalaScreen from './src/screens/CrearSala.js';
import UnirseSalaScreen from './src/screens/UnirseSala.js';
import EsperaUnirseScreen from './src/screens/EsperaUnirse.js';
import ProfileScreen from './src/screens/Profile.js';
import SettingsScreen from './src/screens/Settings.js';
import SettingsMailScreen from './src/screens/SettingsMail.js';
import SettingsPasswordScreen from './src/screens/SettingsPassword.js';
import SettingsUserScreen from './src/screens/SettingsUser.js';
import TableroScreen from './src/screens/Tablero.js';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{title: 'MONOPOLY'}}          
        />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{title: 'Iniciar Sesión'}}          
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{title: 'Registrarse'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
                    title: 'Home',
                    headerLeft: () => (
                      <HeaderBackButton
                        onPress={() => {
                          navigation.navigate('Index');
                        }}
                      />
                    ),
                  })}
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

        <Stack.Screen 
          name="SettingsUser" 
          component={SettingsUserScreen}
          options={{title: 'Ajustes'}}   
          />

          <Stack.Screen 
          name="SettingsMail" 
          component={SettingsMailScreen}
          options={{title: 'Ajustes'}}   
          />

        <Stack.Screen 
          name="SettingsPassword" 
          component={SettingsPasswordScreen}
          options={{title: 'Ajustes'}}   
          />

        <Stack.Screen
          name="Tablero"
          component={TableroScreen}
          options={{title: 'Tablero'}}
        />
        <Stack.Screen
          name="EsperaUnirse"
          component={EsperaUnirseScreen}
          options={{title: 'EsperaUnirse'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



