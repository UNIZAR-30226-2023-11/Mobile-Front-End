import React from 'react';
import { View, StyleSheet , Text , Button, Pressable} from'react-native';
import {Searchbar} from 'react-native-paper';
import StyledModalSala from "../components/StyledModalSala";
import { unirPartida } from '../url/partida';


import React from 'react';
import { StyleSheet, Button, View, Image, Text , TouchableOpacity } from 'react-native';
import StyledText from '../components/StyledText'
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    error: {
      color: 'red',
      fontSize: 12,
      marginBottom: 20,
      marginTop: -5
    },

    userImage: {
        width:130,
        height:130,
        borderRadius:150,
        alignSelf: 'center',
    },

    text: {
      color: 'black',
      fontSize: 16,
      marginBottom: '2%',
      marginTop: '2%',
    },

    page: {
      flex: 1,
      backgroundColor: 'lightgrey',
    },

    user: {
      flex: 3, 
      flexDirection: 'row',
      marginTop: '4%',
      alignSelf: 'center',
    },

     titulo: {
      color: 'black',
      fontSize: 18,
      marginBottom: '2%',
      marginTop: '2%',
      fontWeight: 'bold',
     },

    stadistics: {
      flex: 18, 
      flexDirection: 'column',
      marginLeft: '5%',
      marginRight: '5%',
      marginBottom: '5%',
      padding: '4%',
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: 'pink',
      //alignSelf: 'center',
      
     },
     descripcion: {
      color: 'black',
      fontSize: 12,
     } 

  })

export default function TiendaScreen({ route, navigation }){
    
    return (
        <View>

            
        </View>
    );
}
