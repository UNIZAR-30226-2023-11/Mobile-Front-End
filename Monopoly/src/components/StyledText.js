import React from "react";
import {Text,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontsize: 12,
        color: 'grey'
    },
    bold: {
        fontWeight: 'bold'
    },
    blue: {
        color: 'blue'
    },
    big: {
        fontSize: 20
    },
    small: {
        fonrSize: 10
    },
    error: {
        color:'red'
    },
    monopoly: {
        fontSize: 40,
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#CFA8FC'
    },
    titulo_casilla:{
        fontSize: 11,
        fontWeight: 'bold',
        textAlign:'center',
        color: '#000000'
    },
    precio_casilla:{
        fontSize: 10,
        fontWeight:'bold',
        textAlign:'center',
        color: '#000000'
    },
    casillas_fiesta:{
        fontSize:8, 
        color: 'black',
        fontWeight:'bold',
        textAlign:'center'
    }
})

export default function StyledText(
    {blue,bold,children,big,small,error,
    monopoly, titulo_casilla, precio_casilla, casillas_fiesta,
    style = {}}){
    
    const textStyles = [
        styles.text,
        style,
        blue && styles.blue,
        bold && styles.bold,
        big && styles.big,
        small && styles.small,
        error && styles.error,
        monopoly && styles.monopoly,
        titulo_casilla && styles.titulo_casilla,
        precio_casilla && styles.precio_casilla,
        casillas_fiesta && styles.casillas_fiesta
    ]

    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )
}