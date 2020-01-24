import React from 'react'
import { Animated, StyleSheet } from 'react-native'

const Dot = ({ opacity }) => <Animated.View style={{ ...style.dot, opacity }} />

const style = StyleSheet.create({
  dot: {
    backgroundColor: '#83878d',
    borderRadius: 50,
    width: 10,
    height: 10,
    marginTop: 0,
    marginHorizontal: 10,
    marginBottom: 20,
  },
})

export default Dot
