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
      backgroundColor: 'light grey',
    },

    user: {
      flex: 4, 
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
      flex: 13, 
      flexDirection: 'column',
      marginLeft: '10%',
      marginRight: '20%',
      marginBottom: '30%',
      padding: '2%',
      borderWidth: 0,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      justifyContent: 'center',
      
     },
     descripcion: {
      color: 'black',
      fontSize: 12,
     } 

  })

export default function ProfilePage({ }){
    const navigation = useNavigation();
    return (

      <View style={styles.page}>

        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end',  marginTop:'4%', marginRight: '4%'}}>

          {/* Boton de compras */}
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <AntDesign name="shoppingcart" size={30} color="black"/>
            <Text style={styles.descripcion}>tienda      </Text>
          </TouchableOpacity>

          {/* Boton de ajustes*/}
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Feather name="settings" size={30} color="black" />
            <Text style={styles.descripcion}>ajustes  </Text>
          </TouchableOpacity>
        </View>

        <Image
            style={styles.userImage}
            source={require('../../assets/bob.png')}
            />

        <View style={styles.user}>
            
          <Text>nombre de usuario</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
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
