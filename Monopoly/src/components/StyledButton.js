import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function StyledButton({ 
  style={}, title, onPress, 
  purple, lightblue, homeScreen, 
  textblack, small }) {

  
  const buttonStyles = [
    styles.button,
    style,
    purple && styles.purple,
    lightblue && styles.lightblue,
    homeScreen && styles.homeScreen

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
  homeScreen: {
    backgroundColor: '#C0EED4',
    height: '8%',
    width: '70%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textblack:{
    color: 'black'
  },
  small:{
    fontSize: 14,
    marginLeft:0,
  }
});