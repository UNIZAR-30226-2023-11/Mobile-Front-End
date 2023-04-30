import React from 'react';
import { View, StyleSheet , Text , Button, Pressable} from'react-native';
import {Searchbar} from 'react-native-paper';
import StyledModalSala from "../components/StyledModalSala";
import { unirPartida } from '../url/partida';


const styles = StyleSheet.create({
    error: {
      color: 'red',
      fontSize: 12,
      marginBottom: 20,
      marginTop: -5
    },

    text: {
      color: 'black',
      fontSize: 16,
      marginBottom: '2%',
      marginTop: '2%',
    },

    descripcion: {
      color: 'black',
      fontSize: 12,
     } 

  })

const fichas = [
    { id: 1, image: require('./assets/token1.png'), text: 'Elemento 1', precio: 100},
    { id: 2, image: require('./assets/token2.png'), text: 'Elemento 2', precio: 100},
    { id: 3, image: require('./assets/token3.png'), text: 'Elemento 3', precio: 100},
    { id: 4, image: require('./assets/token4.png'), text: 'Elemento 4', precio: 100},
    { id: 5, image: require('./assets/token5.png'), text: 'Elemento 5', precio: 100},
    { id: 6, image: require('./assets/token6.png'), text: 'Elemento 6', precio: 100},
    { id: 7, image: require('./assets/token7.png'), text: 'Elemento 7', precio: 100},
    { id: 8, image: require('./assets/token8.png'), text: 'Elemento 8', precio: 100},
    { id: 9, image: require('./assets/token9.png'), text: 'Elemento 9', precio: 100},
];

const avatares = [
    { id: 1, image: require('./assets/bob.png'), text: 'Elemento 1', precio: 100},
    { id: 2, image: require('./assets/bob.png'), text: 'Elemento 2', precio: 100},
    { id: 3, image: require('./assets/bob.png'), text: 'Elemento 3', precio: 100},
    { id: 4, image: require('./assets/bob.png'), text: 'Elemento 4', precio: 100},
    { id: 5, image: require('./assets/bob.png'), text: 'Elemento 5', precio: 100},
    { id: 6, image: require('./assets/bob.png'), text: 'Elemento 6', precio: 100},
    { id: 7, image: require('./assets/bob.png'), text: 'Elemento 7', precio: 100},
    { id: 8, image: require('./assets/bob.png'), text: 'Elemento 8', precio: 100},
    { id: 9, image: require('./assets/bob.png'), text: 'Elemento 9', precio: 100},
];

const tableros = [
    { id: 1, image: require('./assets/bob.png'), text: 'Elemento 1', precio: 100},
    { id: 2, image: require('./assets/bob.png'), text: 'Elemento 2', precio: 100},
    { id: 3, image: require('./assets/bob.png'), text: 'Elemento 3', precio: 100},
    { id: 4, image: require('./assets/bob.png'), text: 'Elemento 4', precio: 100},
    { id: 5, image: require('./assets/bob.png'), text: 'Elemento 5', precio: 100},
    { id: 6, image: require('./assets/bob.png'), text: 'Elemento 6', precio: 100},
    { id: 7, image: require('./assets/bob.png'), text: 'Elemento 7', precio: 100},
    { id: 8, image: require('./assets/bob.png'), text: 'Elemento 8', precio: 100},
    { id: 9, image: require('./assets/bob.png'), text: 'Elemento 9', precio: 100},
];

export default function TiendaScreen({ route, navigation }){
    
    const user = route.params.user;
    console.log(user);

    return (
        <View>


        </View>
    );
}
