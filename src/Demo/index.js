import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Easing, Animated } from 'react-native'
import DemoSlider from './pages/DemoSlider'
import DemoFirstPage from './pages/DemoFirstPage'
import DemoSecondPage from './pages/DemoSecondPage'
import DemoThirdPage from './pages/DemoThirdPage'

const transitionConfig = () => ({
  transitionSpec: {
    duration: 750,
    easing: Easing.out(Easing.poly(5)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps

    const thisSceneIndex = scene.index
    const width = layout.initWidth

    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [width, 0, 0],
    })

    return { transform: [{ translateX }] }
  },
})

const DemoNavigator = createStackNavigator(
  {
    DemoSlider,
    DemoFirstPage,
    DemoSecondPage,
    DemoThirdPage,
  },
  {
    transitionConfig,
  },
)

export default createAppContainer(DemoNavigator)
