import React from 'react';
import { StyleSheet, Button, View, Image, Text } from 'react-native';

import RiEditLine from 'react-icons/ri';
import TfiCup from 'react-icons/tfi';
import IoSettingsOutline from 'react-icons/io';
import FiShoppingCart from 'react-icons/fi';

const styles = StyleSheet.create({
    error: {
      color: 'red',
      fontSize: 12,
      marginBottom: 20,
      marginTop: -5
    },
    form: {
      margin: 12,
      marginTop: 100,
      marginBottom: 20
    },

    user: {
        margin: 45,
        alignContent:'center',
        width:130,
        height:130,
        borderRadius:150,
    }
  })


export default function ProfilePage(){
    return (
      <View>

        {/* Boton de compras */}
        <FiShoppingCart/>

        {/* Boton de ajustes*/}
        <IoSettingsOutline/>

            <View>
                <Image
                style={styles.user}
                source={require('../../assets/bob.png')}
                />
            <Text>@nombre de usuario</Text>
            <RiEditLine />
            </View>

            <View>
              <TfiCup />
              <Text>57% partidas ganadas </Text>
              {/* Aqui se sustituyen las x por <estadisticas> */}
              <Text>ESTADÍSTICAS </Text>
              <Text>x juegos jugados</Text>
              <Text>x juegos ganados</Text>
              <Text>jugando desde xxxx</Text>
            </View>
      </View>
    );
}