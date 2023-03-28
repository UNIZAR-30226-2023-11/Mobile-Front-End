import React from 'react';
import { View, Text } from'react-native';
import {Searchbar} from 'react-native-paper';


const styles = StyleSheet.create({
    barra: { 
        padding: 15,
    }
});

export default function UnirseSalaScreen({ navigation }) {

    return (
        <View style={styles.barra}>
            <Searchbar
                placeholder="Buscar partida (#123456)"
            />
        </View>
    );
}
