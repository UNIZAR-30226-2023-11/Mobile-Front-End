import React from 'react';
import { View, StyleSheet , Text , Button, Pressable, Image, FlatList, TouchableOpacity, ScrollView} from'react-native';
//import { unirPartida } from '../url/partida';


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

function estaComprada(id){
  return comprados[id];
}

function estaEnUso(id){
  //lamar a la funcion de back que muestre elementos en uso
  return usados[id];
}

//se podria poner tambien una barra con nombre user y dinero €€€
//falta añadir funcionalidad al boton
const renderItem = ({ item , route}) => {
  let indice = 0;
  const infoTienda = route.params.infoTienda;
  const usados = infoTienda.map(item => item.usado);
  const comprados = infoTienda.map(item => item.comprado);

  return (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImage} source={item.image} />
      <Text style={styles.itemText}>{item.text}</Text>
      
      {/*si aun no esta comprado*/}
      {!comprados[indice] && (
        <View>
          <Text style={styles.itemPrecio}>€{item.precio}</Text>
          <TouchableOpacity style={styles.itemButton}>
            <Text style={styles.itemButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>  
      )}
      {/*si ya esta comprado*/}
      {comprados[indice] && !usados[indice] && (
          <TouchableOpacity style={styles.itemButton}>
          <Text style={styles.itemButtonText}>Usar</Text>
        </TouchableOpacity>
      )}
      {/*si ya esta comprado y ademas esta en uso*/}
      {comprados[indice] && usados[indice] && (
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
    const infoTienda = route.params.infoTienda;
    //personalizar precio con monedas
    const money = '100';
    console.log(username);

    const nombres = infoTienda.map(item => item.nombre);
    const imagenes = infoTienda.map(item => item.imagen);
    const precios = infoTienda.map(item => item.precio);
    const usados = infoTienda.map(item => item.usado);
    const comprados = infoTienda.map(item => item.comprado);

    const fichas = infoTienda.slice(0, 9).map((item, index) => ({
      id: index,
      image: `data:image/jpg;base64,${item.imagen}`,
      text: item.nombre,
      precio: precios[index],
    }));
    
    const avatares = infoTienda.slice(9, 18).map((item, index) => ({
      id: index + 9,
      image: `data:image/jpg;base64,${item.imagen}`,
      text: item.nombre,
      precio: precios[index + 9],
    }));
    

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

                    <View>
                    <Text style={styles.texto}>Tableros</Text>
                    <FlatList
                        data={tableros}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={3}
                    />
                </View>
            </View>    
        </ScrollView>        
    );
}
