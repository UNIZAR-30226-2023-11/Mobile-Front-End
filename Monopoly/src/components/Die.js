import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Die({face, style={}}){
    const name = "dice-"+face+"-outline";
    return (
        <View style={style}>
           <MaterialCommunityIcons name={name} size={70} color="black" />
        </View>
    )
}