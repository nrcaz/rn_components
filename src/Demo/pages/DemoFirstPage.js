import React from 'react'
import { Image, View } from 'react-native'
import PropTypes from 'prop-types'

import Button from '../Button'
import { SafeContainer, LogoKF, Title, Text } from '../styled'
import DemoFirstImage from '../assets/demo/Before_demo-1-500_500.png'

const DemoFirstPage = ({ navigation }) => (
  <SafeContainer>
    <LogoKF />
    <Title>{'JUMP RIGHT IN AND FILL OUT\nYOUR FIRST FORM!'}</Title>
    <Image
      source={DemoFirstImage}
      resizeMode="contain"
      style={{
        width: 275,
        height: 275,
      }}
    />
    <View>
      <Text>
        {
          'Take a look at some examples of forms you can create\nand explore the many features Kizeo Forms has to offer.'
        }
      </Text>
      <Text>We have many wonderful surprises in store for you!</Text>
    </View>
    <Button
      title="Start Demo"
      onPress={() => navigation.navigate('DemoSecondPage')}
      style={{ width: 200 }}
    />
  </SafeContainer>
)

DemoFirstPage.navigationOptions = {
  header: null,
}

DemoFirstPage.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
}

export default DemoFirstPage
