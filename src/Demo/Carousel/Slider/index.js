import React from 'react'
import { ScrollView, Animated } from 'react-native'
import PropTypes from 'prop-types'

import Slide from './Slide'

const Slider = ({ slider, slides, handleSliderLayout, scrollX }) => (
  <ScrollView
    ref={slider}
    onLayout={handleSliderLayout}
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    onScroll={Animated.event([
      { nativeEvent: { contentOffset: { x: scrollX } } },
    ])}
    scrollEventThrottle={16}
    style={{ flexGrow: 0 }}
  >
    {slides.map((item, index) => (
      <Slide
        title={item.title}
        text={item.text}
        image={item.file}
        key={`slide_${index + 1}`}
      />
    ))}
  </ScrollView>
)

Slider.propTypes = {
  slider: PropTypes.shape({}).isRequired,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleSliderLayout: PropTypes.func.isRequired,
  scrollX: PropTypes.shape({}).isRequired,
}

export default Slider
