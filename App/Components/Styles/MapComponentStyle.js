import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  loadingSheet: {
    position: 'absolute',
    top: 0, bottom: 0, right: 0, left: 0,
    backgroundColor: '#0003',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
