import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function StyledButton({ 
  style={}, title, onPress, 
  purple, lightblue, red, green, homeScreen, 
  textblack, small, buttonSmall }) {

  
  const buttonStyles = [
    styles.button,
    style,
    purple && styles.purple,
    lightblue && styles.lightblue,
    red && styles.red,
    homeScreen && styles.homeScreen,
    buttonSmall && styles.buttonSmall,
    green && styles.green
  ]

  const textStyles = [
    styles.text,
    textblack && styles.textblack,
    small && styles.small
  ]

  return (
    <Pressable style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
    marginLeft: '15%',
    marginRight: '15%',
    marginTop: 10,
    marginBottom: 10,
  },
  purple: {
    backgroundColor: '#CFA8FC',
  },
  lightblue: {
    backgroundColor: '#A8FCFB',
  },
  red:{
    backgroundColor: 'red'
  },
  green: {
    backgroundColor: 'green'
  },
  homeScreen: {
    backgroundColor: '#A8FCFB',
    height: '8%',
    width: '70%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center'
  },
  textblack:{
    color: 'black'
  },
  small:{
    fontSize: 14,
  },
  buttonSmall:{
    height: '20%',
    width: '30%',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: '5%',
    marginRight: 0,
  }
});