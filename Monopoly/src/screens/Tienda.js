//import React from 'react';
import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet , Text , Button, Pressable, Image, FlatList, TouchableOpacity, ScrollView, SafeAreaView} from'react-native';
//import { unirPartida } from '../url/partida';
import { SocketContext } from '../components/SocketContext';
import { encode } from 'base-64';
import Spinner from 'react-native-loading-spinner-overlay';


const styles = StyleSheet.create({
    text: {
      color: 'black',
      fontSize: 16,
      marginBottom: '2%',
      marginTop: '2%',
    },

    texto: {
        color: 'black',
        fontSize: 28,
        marginTop: '2%',
        marginLeft: '3%',
        textAlign: 'left',
        fontWeight: "bold",
      },

    descripcion: {
      color: 'black',
      fontSize: 12,
    },
    itemContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 7,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        padding: 10,
      },
      itemImage: {
        width: 100,
        height: 100,
        resizeMode: "contain",
      },
      itemText: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 10,
      },
      itemPrecio: {
        fontSize: 14,
        color: "green",
        marginBottom: 5,
        textAlign: "center",
      },
      itemButton: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
      },
      itemButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#ddd',
      },
      username: {
        fontSize: 25,
        fontWeight: 'bold',
      },
      money: {
        fontSize: 20,
      },
      spinnerText: {
        color: '#FFF',
      }
  })

const Header = ({ username, money }) => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.money}>{money}</Text>
      </View>
    );
};

export default function TiendaScreen({ route, navigation }){
    //coger el precio de la BD
    const username = route.params.user;
    const {socket} = React.useContext(SocketContext);
    //personalizar precio con monedas
    console.log(username);

    const [isLoading, setIsLoading] = React.useState(true);
    const [usados, setUsados] = React.useState([]);
    const [comprados, setComprados] = React.useState([]);  
    const [fichas, setFichas] = React.useState([]);  
    const [avatares, setAvatares] = React.useState();  

    useEffect(() => {
      socket.emit('tienda', {socketId: socket.id}, (ack) => {
        // console.log('Server acknowledged:', ack);
        if (ack.cod === 0) {
          let aux_fichas = ack.msg.map(item => ({
            nombre: item.nombre,
            precio: item.precio,
            usado: item.usado,
            comprado: item.comprado,
            imagen: item.imagen
          }));
          setFichas(aux_fichas);
          setIsLoading(false);
          //console.log("Fichas: " + fichas);
  
        } else if (ack.cod === 2) {
          alert("Se ha producido un error en el servidor. Salga del perfil y vuelva a entrar");
        }
      });
    },[]);

    const renderItem = useCallback(({item}) => {
      const img = require('../../assets/bob.png');
    
      return (
        <View style={styles.itemContainer}>
          <Image style={styles.itemImage} source={{uri: `data:image/jpg;base64,${item.imagen}`}} />
          <Text style={styles.itemText}>{item.nombre}</Text>
    
          {/*si aun no esta comprado*/}
          {console.log("item comprado: " + item.comprado)}
          {!item.comprado && (
            <View>
              <Text style={styles.itemPrecio}>€{item.precio}</Text>
              <TouchableOpacity style={styles.itemButton} onPress={() => {
                socket.emit('comprarTienda', {socketId: socket.id, producto: item.nombre}, (ack) => {
                  console.log('Server acknowledged comprar Tienda:', ack);
                  if (ack.cod==0){
                    let aux = fichas;
                    for(let i = 0; i < aux.length; i++) {
                      if(aux[i]==item.nombre){
                        aux[i].comprado = true;
                      }
                    }
                    setFichas(aux);
                  }
                });
              }}>
                <Text style={styles.itemButtonText}>Comprar</Text>
              </TouchableOpacity>
            </View>  
          )}
    
          {/*si ya esta comprado*/}
          {item.comprado && !item.usado && item.nombre.startsWith("Avatar") && (
            <TouchableOpacity style={styles.itemButton} onPress={() => {
              socket.emit('updateImagenPerfil', {socketId: socket.id, imagen: item.imagen}, (ack) => {
                // console.log('Server acknowledged:', ack);
              });
            }}>
              <Text style={styles.itemButtonText}>Usar</Text>
            </TouchableOpacity>
          )}
    
          {item.comprado && !item.usado && item.nombre.startsWith("Ficha") && (
            <TouchableOpacity style={styles.itemButton} //onPress={
              //socket.emit('updateImagen', {socketId: socket.id, producto: item.nombre}, (ack) => {
                /*console.log('Server acknowledged:', ack);})} */>
              <Text style={styles.itemButtonText}>Usar</Text>
            </TouchableOpacity>
          )}
    
          {/*si ya esta comprado y ademas esta en uso*/}
          {item.comprado && item.usado && (
            <Text>Actual</Text>
          )}
        </View>
      );
    }, [socket]);
    
    
    
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header username={'@' + username} money={40 + ' M'} />
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Text style={styles.texto}>Fichas y avatares</Text>
                    
                    <FlatList
                        data={fichas}
                        renderItem={renderItem}
                        numColumns={3}
                        socket={socket}
                    />
                    </View>
            </View>    
                    <Spinner
                      visible={isLoading}
                      textContent={'Cargando...'}
                      textStyle={styles.spinnerText}
                    />
      </SafeAreaView>       
    );
}
