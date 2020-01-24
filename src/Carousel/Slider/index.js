import React from 'react'
import { ScrollView, Animated } from 'react-native'

import Slide from './Slide'

const Slider = ({
  slider, slides, handleSliderLayout, scrollX
}) => (
  <ScrollView
    ref={slider}
    onLayout={handleSliderLayout}
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }])}
    scrollEventThrottle={16}
    style={{ flexGrow: 0 }}
  >
    {slides.map((item, index) => (
      <Slide text={item.text} image={item.file} key={`slide_${index + 1}`} />
    ))}
  </ScrollView>
)

export default Slider
