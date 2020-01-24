/* eslint-disable no-use-before-define */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'

const Button = ({ title, onPress, color, style }) => {
  const { shadow, touchable, text } = getStyle({ color })
  return (
    <View style={shadow}>
      <TouchableOpacity onPress={onPress} style={{ ...touchable, ...style }}>
        <Text style={text}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const getStyle = ({ color } = {}) =>
  StyleSheet.create({
    shadow: {
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 5,
      elevation: 3,
    },
    touchable: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 250,
      height: 40,
      borderRadius: 5,
      backgroundColor: color || 'royalblue',
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
  })

  Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string,
    style: PropTypes.shape({}),
  }
  
  Button.defaultProps = {
    color: null,
    style: {},
  }
  
export default Button
