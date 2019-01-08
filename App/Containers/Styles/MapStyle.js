import { StyleSheet, Platform } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: Platform.OS === 'ios'? Metrics.statusbarHeight: 0
  }
})
