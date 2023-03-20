import React from 'react';
import { View, Text, StyleSheet } from'react-native';
import StyledText from '../components/StyledText';

const styles = StyleSheet.create({
    header:{
        flex: 1,
        alignItems:'center',
        backgroundColor: '#FFFFFF'
    },
    tablero:{
        backgroundColor: '#FFFFFF',
        flex:50,
        flexDirection: 'column'
    },
    curso1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    curso2: {
        alignItems: 'flex-start',
        flex: 1,
        flexDirection:'column',
        marginTop:'33.5%'
    },
    curso3:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginBottom:'100%'
    },
    curso4:{
        alignItems: 'flex-end',
        flex: 1,
        flexDirection:'column'
    },
    space:{
        width:'90%'
    },
    casilla:{
        width: 36,
        height: 36,
        borderColor: '#000000',
        borderWidth: 1
    }
});

export default function TableroScreen() {

    return (
        <View style={{flex:1,flexDirection:'column'}}>
        <View style={styles.header}>
            <StyledText blue bold> MONOPOLY </StyledText>
        </View>
        <View style={styles.tablero}>
            <View style={styles.curso2}>
                <View style={styles.casilla}>
                
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
            </View>
            <View style={styles.curso3}>
                <View style={styles.casilla}>
                    
                </View>
                <View style={styles.casilla}>
                    
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
            </View>
            <View style={styles.curso4}>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
            </View>
            <View style={styles.curso1}>
                <View style={styles.casilla}>
                
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
                <View style={styles.casilla}>
            
                </View>
            </View>
        </View>
    </View>
    );
}