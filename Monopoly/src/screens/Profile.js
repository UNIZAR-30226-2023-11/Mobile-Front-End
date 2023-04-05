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

export default function ProfileScreen({ route, navigation }){
    let user = route.params.user;
    
    return (

      <View style={styles.page}>

        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end',  marginTop:'4%', marginRight: '4%'}}>

          {/* Boton de compras */}
          <TouchableOpacity>
            <AntDesign name="shoppingcart" size={30} color="black"/>
            <Text style={styles.descripcion}>tienda      </Text>
          </TouchableOpacity>

          {/* Boton de ajustes*/}
          <TouchableOpacity onPress={() => navigation.navigate('Settings', {user: user})}>
            <Feather name="settings" size={30} color="black" />
            <Text style={styles.descripcion}>ajustes  </Text>
          </TouchableOpacity>
        </View>

        <Image
            style={styles.userImage}
            source={require('../../assets/bob.png')}
            />

        <View style={styles.user}>
            
          <Text>{user}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SettingsUser', {user: user})}>
            <AntDesign name="edit" size={24} color="black" />
          </TouchableOpacity>
          
        </View>

        <View style={styles.stadistics}>
        <FontAwesome5 name="book" size={22} color="black" />
        <Text style={styles.titulo}> INFORMACION </Text>
        <Text style={styles.text}> Email: info@example.com</Text>
       
          <AntDesign name="Trophy" size={24} color="black" />
          <Text style={styles.titulo} > ESTADÍSTICAS </Text>
          <Text style={styles.text}>Partidas ganadas: 57 </Text>
        
          <Text style={styles.text}>Juegos jugados: 100</Text>
          <Text style={styles.text}>Ratio: 57% </Text>
        </View>

      </View>
    );
}
