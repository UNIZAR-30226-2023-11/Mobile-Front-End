import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function StyledButton({purple,lightblue, title, onPress}) {

  
  const buttonStyles = [
    styles.button,
    purple && styles.purple,
    lightblue && styles.lightblue,
    
  ]

  return (
    <Pressable style={buttonStyles} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
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
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  purple: {
    backgroundColor: '#CFA8FC',
  },
  lightblue: {
    backgroundColor: '#A8FCFB',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});