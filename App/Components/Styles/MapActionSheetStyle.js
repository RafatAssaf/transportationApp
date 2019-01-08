import { StyleSheet } from 'react-native'
import {Colors, Metrics} from '../../Themes'

export default StyleSheet.create({
  container: {
    height: 130, 
    width: '100%',
    backgroundColor: Colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginTop: -10
  },
  directionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  directionText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row', 
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.blueAccent,
    fontSize: 16,
    margin: 5,
    fontWeight: 'bold'
  }
})
