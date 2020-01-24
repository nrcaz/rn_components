import React, {
  Fragment, useState, useRef, useEffect
} from 'react'
import { Animated } from 'react-native'

import Slider from './Slider'
import DotBar from './DotBar'

const Carousel = ({ slides }) => {
  const slider = useRef(null)
  const [slideNumber, setSlideNumber] = useState(0)
  const [sliderWidth, setSliderWidth] = useState(1)
  const scrollX = new Animated.Value(0)
  const dotPosition = Animated.divide(scrollX, sliderWidth)

  const handleScrollListener = ({ value }) => {
    setSlideNumber(Math.round(value / sliderWidth))
  }

  const handleSliderLayout = ({ nativeEvent: { layout } }) => {
    setSliderWidth(layout.width)
    setTimeout(() => slider.current.scrollTo({ x: slideNumber * layout.width, animated: true }), 0)
  }

  useEffect(() => {
    scrollX.addListener(handleScrollListener)
    return () => {
      scrollX.removeListener(handleScrollListener)
    }
  })

  return (
    <Fragment>
      <Slider
        slider={slider}
        slides={slides}
        handleSliderLayout={handleSliderLayout}
        scrollX={scrollX}
      />
      <DotBar slides={slides} dotPosition={dotPosition} />
    </Fragment>
  )
}

export default Carousel
