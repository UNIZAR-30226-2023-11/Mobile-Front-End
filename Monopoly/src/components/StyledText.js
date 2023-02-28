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
    }
})

export default function StyledText({blue,bold,children,big,small,error,monopoly}){
    
    const textStyles = [
        styles.text,
        blue && styles.blue,
        bold && styles.bold,
        big && styles.big,
        small && styles.small,
        error && styles.error,
        monopoly && styles.monopoly
    ]

    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )
}