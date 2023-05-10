import React from 'react';
import { View, StyleSheet , Text , Button, Pressable, Image, FlatList, TouchableOpacity, ScrollView} from'react-native';
//import { unirPartida } from '../url/partida';
import { SocketContext } from '../components/SocketContext';
import { encode } from 'base-64';


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
  })

  const [nombres, setNombres] = React.useState([]);
  const [imagenes, setImagenes] = React.useState([]);
  const [precios, setPrecios] = React.useState([]);
  const [usados, setUsados] = React.useState([]);
  const [comprados, setComprados] = React.useState([]);  

//se podria poner tambien una barra con nombre user y dinero €€€
//falta añadir funcionalidad al boton
const renderItem = ({item}) => {

  return (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImage} source={item.image} />
      <Text style={styles.itemText}>{item.text}</Text>
      
      {/*si aun no esta comprado*/}
      {!comprados[item.id] && (
        <View>
          <Text style={styles.itemPrecio}>€{item.precio}</Text>
          <TouchableOpacity style={styles.itemButton}>
            <Text style={styles.itemButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>  
      )}
      {/*si ya esta comprado*/}
      {comprados[item.id] && !usados[item.id] && (
          <TouchableOpacity style={styles.itemButton}>
          <Text style={styles.itemButtonText}>Usar</Text>
        </TouchableOpacity>
      )}
      {/*si ya esta comprado y ademas esta en uso*/}
      {comprados[item.id] && usados[item.id] && (
          <Text>Actual</Text>
      )}
    </View>
); };

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
    //personalizar precio con monedas
    console.log(username);




    socket.emit('tienda', {socketId: socket.id}, (ack) => {
      console.log('Server acknowledged:', ack);
      if (ack.cod === 0) {
        const fichas = ack.datos.filter((item, index) => index < 9).map((item, index) => ({
          id: index,
          image: `data:image/jpg;base64,${item.imagen}`,
          text: item.nombre,
          precio: item.precio,
        }));
    
        const avatares = ack.datos.filter((item, index) => index >= 9 && index < 18).map((item, index) => ({
          id: index + 9,
          image: `data:image/jpg;base64,${item.imagen}`,
          text: item.nombre,
          precio: item.precio,
        }));
        
        //se rellenan los arrays con las imagenes
        setNombres(ack.datos.map(item => item.nombre));
        setImagenes(ack.datos.map(item => `data:image/jpg;base64,${item.imagen}`));
        setPrecios(ack.datos.map(item => item.precio));
        setUsados(ack.datos.map(item => item.usado));
        setComprados(ack.datos.map(item => item.comprado));
    
        setFichas(fichas);
        setAvatares(avatares);
      } else if (ack.cod === 2) {
        alert("Se ha producido un error en el servidor. Salga del perfil y vuelva a entrar");
      }
    });
    
    
    return (
        <ScrollView stickyHeaderIndices={[0]}>
        <Header username={'@' + username} money={money + 'M'} />
            <View>
                <View>
                    <Text style={styles.texto}>Fichas</Text>
                    <FlatList
                        data={fichas}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={3}
                    />
                    </View>

                    <View>
                    <Text style={styles.texto}>Avatares</Text>
                    <FlatList
                        data={avatares}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={3}
                    />
                    </View>
            </View>    
        </ScrollView>        
    );
}
