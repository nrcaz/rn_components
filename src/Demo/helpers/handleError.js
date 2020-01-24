import { Alert, Linking } from 'react-native'

export default function handleError(error, navigation) {
  console.error(error) // log the error with Sentry or such
  navigation.popToTop()
  Alert.alert('An error occured', 'Please try again later or contact support', [
    {
      text: 'Support',
      onPress: () => Linking.openURL('mailto:support@kizeo.com'),
    },
    { text: 'OK' },
  ])
}
