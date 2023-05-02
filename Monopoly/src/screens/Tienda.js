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

const fichas = [
    { id: 1, image: require('../../assets/token1.png'), text: 'Elemento 1', precio: 100},
    { id: 2, image: require('../../assets/token2.png'), text: 'Elemento 2', precio: 100},
    { id: 3, image: require('../../assets/token3.png'), text: 'Elemento 3', precio: 100},
    { id: 4, image: require('../../assets/token4.png'), text: 'Elemento 4', precio: 100},
    { id: 5, image: require('../../assets/token5.png'), text: 'Elemento 5', precio: 100},
    { id: 6, image: require('../../assets/token6.png'), text: 'Elemento 6', precio: 100},
    { id: 7, image: require('../../assets/token7.png'), text: 'Elemento 7', precio: 100},
    { id: 8, image: require('../../assets/token8.png'), text: 'Elemento 8', precio: 100},
    { id: 9, image: require('../../assets/token9.png'), text: 'Elemento 9', precio: 100},
];

const avatares = [
    { id: 1, image: require('../../assets/bob.png'), text: 'Elemento 1', precio: 100},
    { id: 2, image: require('../../assets/bob.png'), text: 'Elemento 2', precio: 100},
    { id: 3, image: require('../../assets/bob.png'), text: 'Elemento 3', precio: 100},
    { id: 4, image: require('../../assets/bob.png'), text: 'Elemento 4', precio: 100},
    { id: 5, image: require('../../assets/bob.png'), text: 'Elemento 5', precio: 100},
    { id: 6, image: require('../../assets/bob.png'), text: 'Elemento 6', precio: 100},
    { id: 7, image: require('../../assets/bob.png'), text: 'Elemento 7', precio: 100},
    { id: 8, image: require('../../assets/bob.png'), text: 'Elemento 8', precio: 100},
    { id: 9, image: require('../../assets/bob.png'), text: 'Elemento 9', precio: 100},
];

const tableros = [
    { id: 1, image: require('../../assets/bob.png'), text: 'Elemento 1', precio: 100},
    { id: 2, image: require('../../assets/bob.png'), text: 'Elemento 2', precio: 100},
    { id: 3, image: require('../../assets/bob.png'), text: 'Elemento 3', precio: 100},
    //{ id: 4, image: require('../../assets/bob.png'), text: 'Elemento 4', precio: 100},
    //{ id: 5, image: require('../../assets/bob.png'), text: 'Elemento 5', precio: 100},
    //{ id: 6, image: require('../../assets/bob.png'), text: 'Elemento 6', precio: 100},
    //{ id: 7, image: require('../../assets/bob.png'), text: 'Elemento 7', precio: 100},
    //{ id: 8, image: require('../../assets/bob.png'), text: 'Elemento 8', precio: 100},
    //{ id: 9, image: require('../../assets/bob.png'), text: 'Elemento 9', precio: 100},
];

//se podria poner tambien una barra con nombre user y dinero €€€
//falta añadir funcionalidad al boton
const renderItem = ({ item }) => {
  const comprado = estaComprada(item.id);

  return (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImage} source={item.image} />
      <Text style={styles.itemText}>{item.text}</Text>
      
      {/*si aun no esta comprado*/}
      {!comprado && (
        <View>
          <Text style={styles.itemPrecio}>€{item.precio}</Text>
          <TouchableOpacity style={styles.itemButton}>
            <Text style={styles.itemButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>  
      )}
      {/*si ya esta comprado*/}
      {comprado && (
          <Text>Comprado</Text>
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
    const money = '100';
    console.log(username);

    return (
        <ScrollView stickyHeaderIndices={[0]}>
        <Header username={'@' + username} money={money + '€'} />
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
