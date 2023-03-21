import React from 'react';
import { View, Text, StyleSheet } from'react-native';
import StyledText from '../components/StyledText';

const ancho = 41.2;

const styles = StyleSheet.create({
    header:{
        flex: 1,
        alignItems:'center',
        backgroundColor: '#FFFFFF'
    },
    tablero:{
        backgroundColor: '#FFFFFF',
        flex:4,
        flexDirection: 'column'
    },
    cursos3_1:{
        flex: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    curso1:{
        position: 'absolute',
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginLeft: ancho,
        marginTop: ancho*9
    },
    curso2: {
        position: 'absolute',
        justifyContent: 'center',
        flex: 1,
        flexDirection:'column',
    },
    curso3:{
        position: 'relative',
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginLeft: ancho,
    },
    curso4:{
        position: 'relative',
        alignItems: 'flex-end',
        flex: 1,
        flexDirection:'column'
    },
    space:{
        alignSelf: 'stretch',
        backgroundColor: '#EAEAEA'
    },
    casilla:{
        width: ancho,
        height: ancho,
        borderColor: '#000000',
        borderWidth: 1
    }
});

export default function TableroScreen() {

    return (
        <View style={{flex:1,flexDirection:'column'}}>
        <View style={styles.header}>
            <StyledText blue bold big> MONOPOLY </StyledText>
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
            <View style={styles.cursos1_3}>
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
        </View>
    </View>
    );
}