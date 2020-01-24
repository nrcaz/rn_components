/* eslint-disable no-use-before-define */
import React from 'react'
import PropTypes from 'prop-types'

import Carousel from '../Carousel'
import Button from '../Button'
import { SafeContainer, LogoKF } from '../styled'
import slides from '../assets/slides'
import isOnline from '../helpers/isOnline'

const DemoSlider = ({ screenProps, navigation }) => (
  <SafeContainer>
    <LogoKF />
    <Carousel slides={slides} />
    <Button
      title="Try Kizeo Forms"
      onPress={() => {
        if (isOnline()) navigation.navigate('DemoFirstPage')
      }}
    />
    <Button
      title="Sign in"
      onPress={() => {
        if (isOnline()) screenProps.goToLogin()
      }}
      color="#2f4f4f"
    />
  </SafeContainer>
)

DemoSlider.navigationOptions = {
  header: null,
}

DemoSlider.propTypes = {
  screenProps: PropTypes.shape({
    goToLogin: PropTypes.func.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({}).isRequired,
}

export default DemoSlider
