/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SafeAreaView } from 'react-navigation'
import { ScrollView, Dimensions } from 'react-native'

import logoKF from './assets/logoKF.png'

export const SafeContainer = props => {
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get('window').height,
  )
  useEffect(() => {
    const handleRotation = ({ window }) => {
      setWindowHeight(window.height)
    }
    Dimensions.addEventListener('change', layout => handleRotation(layout))
    return Dimensions.removeEventListener('change', layout =>
      handleRotation(layout),
    )
  }, [])
  return (
    <ScrollView persistentScrollbar>
      <SafeView
        {...props}
        style={{
          ...props.style,
          minHeight: windowHeight < 590 ? 590 : windowHeight,
        }}
      />
    </ScrollView>
  )
}

export const SafeView = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
`

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const LogoKF = styled.Image.attrs(() => ({
  source: logoKF,
  resizeMode: 'contain',
}))`
  height: 30;
  margin-bottom: 5;
  margin-top: 30;
`

export const Title = styled.Text`
  font-size: 18;
  text-align: center;
`

export const Text = styled.Text`
  margin-bottom: 10px;
  padding: 0px 10px 0px 10px;
  text-align: center;
  max-width: 400px;
`
