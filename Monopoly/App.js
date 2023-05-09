import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackButton } from '@react-navigation/elements';
import {io} from 'socket.io-client';
import { socketUrl } from './src/url/socket.js';
import { SocketProvider } from './src/components/SocketContext.js';

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
import TestTradeScreen from './src/screens/TestTrade.js';
import TestPujasScreen from './src/screens/TestPujas.js';
import TiendaScreen from './src/screens/Tienda.js';

const Stack = createNativeStackNavigator();

export default function App() {
  
  const [socket, setSocket] = React.useState(io(socketUrl));
  
  useEffect(() => {
    return () => socket.disconnect();
  }, [socket]);
  return (
    
    <SocketProvider>
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
                        style={{marginLeft: 0}}
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
          options={({navigation}) => ({
                    title: 'Tablero',
                    headerLeft: () => (
                      <HeaderBackButton
                        style={{marginLeft: 0}}
                        onPress={() => {
                          navigation.navigate('Home');
                        }}
                      />
                    ),
                  })}
        />
        <Stack.Screen
          name="EsperaUnirse"
          component={EsperaUnirseScreen}
          options={{title: 'EsperaUnirse'}}
        />
        <Stack.Screen
          name="Tienda"
          component={TiendaScreen}
          options={{title: 'Tienda'}}
        />

        <Stack.Screen 
          name="TestTrade" 
          component={TestTradeScreen}
          options={{title: 'Intercambios'}}   
          />

        <Stack.Screen 
          name="TestPujas" 
          component={TestPujasScreen}
          options={{title: 'Pujas'}}   
          />  

      </Stack.Navigator>
    </NavigationContainer>
    </SocketProvider>
  );
}



