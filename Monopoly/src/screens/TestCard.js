import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import * as Cards from '../components/MonopolyCard';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});


export default function TestCard(){
    const navigation = useNavigation();
    return (
        
    <View style={styles.container}>
        <Cards.MonopolyCard />
        <Cards.Suerte_1 />
        <Cards.Boletin_1 />
    </View>

    )
}
