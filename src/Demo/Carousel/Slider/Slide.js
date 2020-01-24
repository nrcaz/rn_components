/* eslint-disable no-use-before-define */
import React from 'react'
import { Image, Text, View, StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

const Slide = ({ title, text, image }) => {
  const { width } = Dimensions.get('window')
  return (
    <View style={{ width, alignItems: 'center' }}>
      <Image style={styles.image} source={image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  text: {
    marginBottom: 5,
    paddingHorizontal: 10,
    alignSelf: 'center',
    textAlign: 'center',
    maxWidth: 350,
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },
})

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
}

export default Slide
