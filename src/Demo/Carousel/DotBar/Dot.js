/* eslint-disable no-use-before-define */
import React from 'react'
import { Animated, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Dot = ({ opacity }) => <Animated.View style={{ ...style.dot, opacity }} />

const style = StyleSheet.create({
  dot: {
    backgroundColor: '#83878d',
    borderRadius: 50,
    width: 10,
    height: 10,
    marginTop: 0,
    marginHorizontal: 10,
    marginBottom: 10,
  },
})

Dot.propTypes = {
  opacity: PropTypes.shape({}).isRequired,
}

export default Dot
