import React from 'react'
import {StyleSheet, Image, View} from'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInPage from './src/screens/SignIn.js';
import ProfilePage from './src/screens/Profile.js';
import SettingsPage from './src/screens/Settings.js';
import SettingsMailPage from './src/screens/SettingsMail.js';
import SettingsPasswordPage from './src/screens/SettingsPassword.js';
import SettingsUserPage from './src/screens/SettingsUser.js';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Perfil"
          component={ProfilePage}
          options={{title: 'Perfil'}}          
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsPage}
          options={{title: 'Ajustes'}}   
          />

        <Stack.Screen 
          name="SettingsUser" 
          component={SettingsUserPage}
          options={{title: 'Ajustes'}}   
          />

          <Stack.Screen 
          name="SettingsMail" 
          component={SettingsMailPage}
          options={{title: 'Ajustes'}}   
          />

        <Stack.Screen 
          name="SettingsPassword" 
          component={SettingsPasswordPage}
          options={{title: 'Ajustes'}}   
          />

          <Stack.Screen 
          name="SignIn" 
          component={SignInPage}
          options={{title: 'Registrarse'}}   
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



