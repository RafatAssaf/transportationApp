import { StyleSheet } from 'react-native'
import {Colors} from '../../Themes'

export default StyleSheet.create({
  container: {
    // flex: 1,
    width: '45%',
    height: 90,
    padding: 10,
    margin: 5, 
    borderRadius: 15,
    backgroundColor: Colors.background
  },
  nameCol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  name: {
    fontSize: 18,
    color: Colors.coal,
  }
})
