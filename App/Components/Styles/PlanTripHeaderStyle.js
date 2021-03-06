import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 105,
    width: '100%',
    // marginTop: Metrics.statusbarHeight,
    paddingBottom: 0,
    backgroundColor: Colors.primary,
    // paddingHorizontal: 10,
    alignItems: 'center',
  },
  inputsContainer: {
    flex: 1
  },
  singleInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: Colors.white,
    marginBottom: 5,
    height: 40,
    paddingLeft: 15,
    paddingRight: 50
  },
  fromInput: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  toInput: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  fromToImage: {
    height: '60%',
    width: 30
  },
  inputIcon: {
    marginLeft: -35,
    marginBottom: 5,
    zIndex: 10
  },
  dotsContainer: {
    // backgroundColor: 'skyblue', 
    height: '100%',
    padding: 10,
    paddingVertical: 15
  }
})
