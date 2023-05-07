import React from 'react'
import { StyleSheet, Button, View, Modal, ScrollView, StyledButton } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});


export default function TestCard(){
    const navigation = useNavigation();
    return (
        
        <StyledButton>
        <View style={styles.container}>
            
        </View>
        </StyledButton>
    )
}