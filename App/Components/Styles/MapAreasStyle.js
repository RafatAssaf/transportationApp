import { StyleSheet } from 'react-native'
import {Metrics, Colors} from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: Metrics.containerBorderRadius,
    borderTopLeftRadius: Metrics.containerBorderRadius,
    overflow: 'hidden',
    backgroundColor: Colors.white,
    paddingHorizontal: 5,
    paddingTop: 0
  },
  header: {
    height: 45,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 24, 
    color: Colors.secondryText
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.text,
    alignItems: 'center',
    paddingHorizontal: 15
  },
  input: {
    width: '100%',
    paddingHorizontal: 10,
    marginHorizontal: 10
  },
  inputIcon: {
    position: 'absolute',
    left: 0
  }
})
