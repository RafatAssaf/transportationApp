import { StyleSheet } from 'react-native'
import {Metrics, Colors} from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0004',
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionsContainer: {
    width: '75%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: Colors.white
  }, 
  option: {
    padding: 15, 
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 10
  },
  closeIcon: {
    position: 'absolute',
    top: 15, 
    right: 15,
    padding: 5,
    zIndex: 90
  },
  title: {
    fontSize: 24,
    color: Colors.coal,
    paddingBottom: 20
  },
  subtitle: {
    fontSize: 16,
    color: Colors.secondryText,
    paddingBottom: 20
  },
  footer: {
    alignItems: 'center',
    // backgroundColor: 'skyblue',
    justifyContent: 'center',
    height: 60,
    width: '100%',
    marginTop: 15
  },
  govImage: {
    height: 50,
    // width: 100
  }
})
