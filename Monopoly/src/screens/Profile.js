import React, { useEffect } from 'react';
import { StyleSheet, Button, View, Image, Text , TouchableOpacity } from 'react-native';
import StyledText from '../components/StyledText'
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { SocketContext } from '../components/SocketContext';
import { encode } from 'base-64';

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

export default function ProfileScreen({ navigation }){

  const isFocused = useIsFocused();
  const socket = React.useContext(SocketContext);
  const [nombre, setNombre] = React.useState("");
  const [imgPerfil, setImgPerfil] = React.useState(null);
  const [correo, setCorreo] = React.useState("");
  const [mostrarImagen, setMostrarImagen] = React.useState(false);
  const [monedas, setMonedas] = React.useState(0);
  const [victorias, setVictorias] = React.useState(0);
  const [partidasJugadas, setPartidasJugadas] = React.useState(0);

  useEffect(() => {
    if(isFocused){
      socket.emit('infoUsuario',{
      socketId: socket.id
      }, 
      (ack) => {
        console.log('Server acknowledged:', ack);
        if(ack.cod == 0){
          setNombre(ack.msg.nombreUser);
           setCorreo(ack.msg.correo);
           const blobData = ack.msg.imagen;
           const dataUrl = `data:image/jpg;base64,${blobData}`;
           setImgPerfil(dataUrl);
          //  setMostrarImagen(true);
            setMonedas(ack.msg.monedas);
            setVictorias(ack.msg.victorias);
            setPartidasJugadas(ack.msg.partidasJugadas);
        }
        else if(ack.cod != 2){
            alert(ack.msg);
        }
      });
    }

  }, [isFocused]);


    return (

      <View style={styles.page}>

        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end',  marginTop:'4%', marginRight: '4%'}}>

          {/* Boton de compras */}
          <TouchableOpacity onPress={() => navigation.navigate('Tienda', {user: user})}>
            <AntDesign name="shoppingcart" size={30} color="black"/>
            <Text style={styles.descripcion}>tienda      </Text>
          </TouchableOpacity>

          {/* Boton de ajustes*/}
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Feather name="settings" size={30} color="black" />
            <Text style={styles.descripcion}>ajustes  </Text>
          </TouchableOpacity>
        </View>
        {mostrarImagen &&
        <Image
            style={styles.userImage}
            source={{uri: imgPerfil}}
            /> 
          }

        <View style={styles.user}>
            
          <Text>{nombre}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SettingsUser')}>
            <AntDesign name="edit" size={24} color="black" />
          </TouchableOpacity>
          
        </View>

        <View style={styles.stadistics}>
        <FontAwesome5 name="book" size={22} color="black" />
        <Text style={styles.titulo}> INFORMACION </Text>
        <Text style={styles.text}> Email: {correo}</Text>
       
          <AntDesign name="Trophy" size={24} color="black" />
          <Text style={styles.titulo} > ESTADÍSTICAS </Text>
          <Text style={styles.text}>Partidas ganadas: {victorias} </Text>
        
          <Text style={styles.text}>Partidas jugadas: {partidasJugadas}</Text>
          {victorias != 0 && <Text style={styles.text}>Ratio: {Math.floor((victorias/partidasJugadas)*100)}% </Text>}
          {victorias == 0 && <Text style={styles.text}>Ratio: 0% </Text>}
        </View>

      </View>
    );
}
