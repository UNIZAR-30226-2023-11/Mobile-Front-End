import React from 'react';
import { StyleSheet} from 'react-native';
import Main from './src/components/Main.js';
import Login from './src/components/Login.js';

export default function App() {
  return (
    <Login></Login>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
