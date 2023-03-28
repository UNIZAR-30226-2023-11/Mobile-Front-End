import React from "react";
import { View, Pressable } from "react-native";
import Die from "./Die";

export default function Dice(){
    const sides = [
        1, 2, 3, 
        4, 5, 6
    ]
    const [die1, setDie1] = React.useState(1);
    const [die2, setDie2] = React.useState(1);
    const [suma, setSuma] = React.useState(0);

    function roll(){
        setDie1(sides[Math.floor(Math.random() * sides.length)])
        setDie2(sides[Math.floor(Math.random() * sides.length)])
        setSuma(die1+die2);
    }

    return(
        <View>
            <Pressable  style={{flex:1, flexDirection:'row'}} onPress={() => roll()}>
                <Die face={die1}></Die>
                <Die face = {die2}></Die>
            </Pressable>
        </View>
    )
}