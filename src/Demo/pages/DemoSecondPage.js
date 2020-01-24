import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

import Button from '../Button'
import { SafeContainer, LogoKF, Title, Text } from '../styled'
import DemoSecondImage from '../assets/demo/Step_1_After_demo-500_500.png'

const DemoSecondPage = ({ navigation }) => (
  <SafeContainer>
    <LogoKF />
    <Title>VERY SIMPLE RIGHT?</Title>
    <Image
      source={DemoSecondImage}
      resizeMode="contain"
      style={{
        width: 300,
        height: 300,
      }}
    />
    <Text>
      {
        'Check your e-mail to have a look at the customized report generated based on your data entries and the steps to create your account.'
      }
    </Text>
    <Button
      title="Next"
      onPress={() => navigation.navigate('DemoThirdPage')}
      style={{ width: 200 }}
    />
  </SafeContainer>
)

DemoSecondPage.navigationOptions = {
  header: null,
}

DemoSecondPage.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
}

export default DemoSecondPage
