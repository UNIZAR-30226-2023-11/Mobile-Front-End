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
            <Cards.Recurso_1 />
            <Cards.Recurso_2 />
            <Cards.Evento_1 />
            <Cards.Evento_2 />
            <Cards.Evento_3 />
            <Cards.Evento_4 />
            <Cards.Suerte_1 />
            <Cards.Boletin_1 />
            <Cards.Asignatura_11 />
            <Cards.Asignatura_12 />
            <Cards.Asignatura_21 />
            <Cards.Asignatura_22 />
            <Cards.Asignatura_23 />
            <Cards.Asignatura_31 />
            <Cards.Asignatura_32 />
            <Cards.Asignatura_33 />
            <Cards.Asignatura_41 />
            <Cards.Asignatura_42 />
            <Cards.Asignatura_43 />
            <Cards.Asignatura_51 />
            <Cards.Asignatura_52 />
            <Cards.Asignatura_53 />
            <Cards.Asignatura_61 />
            <Cards.Asignatura_62 />
            <Cards.Asignatura_63 />
            <Cards.Asignatura_71 />
            <Cards.Asignatura_72 />
            <Cards.Asignatura_73 />
            <Cards.Asignatura_81 />
            <Cards.Asignatura_82 />
        </View>
        </ScrollView>
    )
}
