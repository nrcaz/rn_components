import { Alert } from 'react-native'
// import getAppStore from '../../../KForm/store/helpers/getAppStore'

export default function isOnline() {
  return true
  // if (getAppStore().online) return true // implementation of React Native NetInfo in kizeo forms store, make your own implementation
  Alert.alert(
    'No internet',
    'You need to have an internet connection to use this application',
    [{ text: 'OK' }],
  )
  return false
}
