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

const nombres = infoTienda.map(item => item.nombre);
const imagenes = infoTienda.map(item => item.imagen);
const precios = infoTienda.map(item => item.precio);
const usados = infoTienda.map(item => item.usado);
const comprados = infoTienda.map(item => item.comprado);

const fichas = [
    { id: 1, image: `data:image/jpg;base64,${imagenes[0]}`, text: nombres[0], precio: precios[0]},
    { id: 2, image:  `data:image/jpg;base64,${imagenes[1]}`, text: nombres[1], precio: precios[1]},
    { id: 3, image:  `data:image/jpg;base64,${imagenes[2]}`, text: nombres[2], precio: precios[2]},
    { id: 4, image:  `data:image/jpg;base64,${imagenes[3]}`, text: nombres[3], precio: precios[3]},
    { id: 5, image:  `data:image/jpg;base64,${imagenes[4]}`, text: nombres[4], precio: precios[4]},
    { id: 6, image:  `data:image/jpg;base64,${imagenes[5]}`, text: nombres[5], precio: precios[5]},
    { id: 7, image:  `data:image/jpg;base64,${imagenes[6]}`, text: nombres[6], precio: precios[6]},
    { id: 8, image:  `data:image/jpg;base64,${imagenes[7]}`, text: nombres[7], precio: precios[7]},
    { id: 9, image:  `data:image/jpg;base64,${imagenes[8]}`, text: nombres[8], precio: precios[8]},
];

const avatares = [
    { id: 1, image: `data:image/jpg;base64,${imagenes[8]}`, text: 'Elemento 1', precio: precios[9]},
    { id: 2, image: `data:image/jpg;base64,${imagenes[8]}`, text: 'Elemento 2', precio: precios[10]},
    { id: 3, image: `data:image/jpg;base64,${imagenes[8]}`, text: 'Elemento 3', precio: precios[11]},
    { id: 4, image: `data:image/jpg;base64,${imagenes[8]}`, text: 'Elemento 4', precio: precios[12]},
    { id: 5, image: `data:image/jpg;base64,${imagenes[8]}`, text: 'Elemento 5', precio: precios[13]},
    { id: 6, image: `data:image/jpg;base64,${imagenes[8]}`, text: 'Elemento 6', precio: precios[14]},
    { id: 7, image: `data:image/jpg;base64,${imagenes[8]}`, text: 'Elemento 7', precio: precios[15]},
    { id: 8, image: `data:image/jpg;base64,${imagenes[8]}`, text: 'Elemento 8', precio: precios[16]},
    { id: 9, image: `data:image/jpg;base64,${imagenes[8]}`, text: 'Elemento 9', precio: precios[17]},
];


function estaComprada(id){
  //llamar a la funcion de back que muestre elementos comprados
  return false;
}

function estaEnUso(id){
  //lamar a la funcion de back que muestre elementos en uso
  return true;
}

//se podria poner tambien una barra con nombre user y dinero €€€
//falta añadir funcionalidad al boton
const renderItem = ({ item }) => {
  const comprado = estaComprada(item.id);
  const usado = estaEnUso(item.id);

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
      {comprado && !usado && (
          <TouchableOpacity style={styles.itemButton}>
          <Text style={styles.itemButtonText}>Usar</Text>
        </TouchableOpacity>
      )}
      {/*si ya esta comprado y ademas esta en uso*/}
      {comprado && usado && (
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
