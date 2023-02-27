import React from 'react'
import { Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInPage from './src/pages/Login.js';

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
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="LogIn"
      onPress={() =>
        navigation.navigate('LogIn', {name: 'Jane'})
      }
    />
  );
};
const LogInScreen = ({navigation, route}) => {
  return <LogInPage></LogInPage>;
};
