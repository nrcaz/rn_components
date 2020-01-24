import React from 'react'
import { View } from 'react-native'

import Dot from './Dot'

const DotBar = ({ slides, dotPosition }) => (
  <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
    {slides.map((item, index) => {
      const opacity = dotPosition.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.3, 1, 0.3],
        extrapolate: 'clamp',
      })
      return <Dot opacity={opacity} key={`dot_${index + 1}`} />
    })}
  </View>
)

export default DotBar
