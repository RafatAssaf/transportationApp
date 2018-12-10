import { StyleSheet } from 'react-native'
import {Metrics, Colors} from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: Metrics.containerBorderRadius,
    borderTopLeftRadius: Metrics.containerBorderRadius,
    overflow: 'hidden',
    backgroundColor: Colors.white,
    paddingHorizontal: 5
  },
  header: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  headerText: {
    fontSize: 24, 
    color: Colors.secondryText
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  }
})
