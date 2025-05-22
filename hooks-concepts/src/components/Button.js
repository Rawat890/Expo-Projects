import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Pressable, Text, StyleSheet, Dimensions } from 'react-native'
import { scale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

const Button = ({ label, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [pressed && styles.pressed]}>
      <LinearGradient colors={['#CC8FED', '#6B50F6']} style={styles.button}>
        <Text style={styles.btnText}>{label}</Text>
      </LinearGradient>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: scale(10),
    borderRadius: 50,
    marginVertical: scale(7),
  },
  btnText: {
    color: 'white',
    fontSize: scale(17),
    textAlign: 'center',
    fontWeight: '700'
  },
  pressed: {
    opacity: 0.8,
  }
})


export default Button
