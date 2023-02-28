import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export function StyledUpperButton(props) {
  const { onPress, title} = props;
  return (
    <Pressable style={styles.upperButton} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

export function StyledLowerButton(props) {
  const { onPress, title } = props;
  return (
    <Pressable style={styles.lowerButton} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

export function StyledConfirmButton(props) {
  const { onPress, title } = props;
  return (
    <Pressable style={styles.lowerButton} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  upperButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 200,
    marginBottom: 10,
  },
  lowerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});