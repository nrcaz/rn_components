/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

import Button from '../Button'
import { SafeContainer, LogoKF, Title, Text } from '../styled'
import DemoThirdImage from '../assets/demo/Step_2_After_demo-500_500.png'

const DemoThirdPage = ({ screenProps }) => (
  <SafeContainer>
    <LogoKF />
    <Title>LET'S GET STARTED!</Title>
    <Image
      source={DemoThirdImage}
      resizeMode="contain"
      style={{
        width: 300,
        height: 300,
      }}
    />
    <Text>
      {
        "Start your free trial period and get full access to the application's functionalities."
      }
    </Text>
    <Button
      title="End Demo"
      onPress={screenProps.goToLogin}
      style={{ width: 200 }}
    />
  </SafeContainer>
)

DemoThirdPage.navigationOptions = {
  header: null,
}

DemoThirdPage.propTypes = {
  screenProps: PropTypes.shape({
    goToLogin: PropTypes.func.isRequired,
  }).isRequired,
}

export default DemoThirdPage
