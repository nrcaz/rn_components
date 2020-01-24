import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-navigation'
import { ScrollView, Dimensions, StyleSheet } from 'react-native'

const SafeContainer = props => {
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

    const {containerStyle} = getStyle({windowHeight})

    return (
      <ScrollView persistentScrollbar>
        <SafeAreaView
          {...props}
          style={{
              ...containerStyle,
              ...props.style,
          }}
        />
      </ScrollView>
    )
  }

  const getStyle = ({windowHeight}) => StyleSheet.create({
      container: {
          flex:1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: 'white',
          minHeight: windowHeight < 590 ? 590 : windowHeight,
      }
  })

  export default SafeContainer