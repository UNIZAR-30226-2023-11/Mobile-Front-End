import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView } from 'react-native';
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
        
        <ScrollView>
        <View style={styles.container}>
            <Cards.MonopolyCard />
            <Cards.Suerte_1 />
            <Cards.Boletin_1 />
            <Cards.Asignatura_11 />
            <Cards.Asignatura_21 />
            <Cards.Asignatura_31 />
            <Cards.Asignatura_41 />
            <Cards.Asignatura_51 />
            <Cards.Asignatura_61 />
            <Cards.Asignatura_71 />
            <Cards.Asignatura_81 />
        </View>
        </ScrollView>
    )
}
