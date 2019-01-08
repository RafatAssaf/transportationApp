import { StyleSheet, Platform } from 'react-native'
import {Colors, Metrics} from '../../Themes'
export default StyleSheet.create({
  // container: {
  // }, 
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.primary
  },
  header: {
    height: Metrics.navBarHeight,
    width: '100%', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: Platform.OS === 'ios'? Metrics.statusbarHeight: 0
  },
  headerText: {
    color: Colors.white,
    fontSize: 24,
    marginHorizontal: '5%'
  },
  detailsContainer: {
    flex: 1,
    // marginTop: 20,
    width: '90%',
    backgroundColor: Colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  directionsContainer: {
    width: '100%',
    height: 80,
    // backgroundColor: 'skyblue',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.text
  },
  singleDirectionContainer: {
    flex: 1,
    paddingHorizontal: 25,
  },
  fromToText: {
    fontSize: 20,
    color: Colors.secondryText
  },
  directionsText: {
    fontSize: 14, 
    color: Colors.coal,
  },
  tabsContainer: {
    height: Metrics.navBarHeight,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.text
  }, 
  routeButton: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  routeButtonText: {
    fontSize: 20
  }, 
  walkLegContainer: {
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  walkLegHeader: {
    flexDirection: 'row',
    width: '100%',
    height: 40, 
    alignItems: 'center'
  },
  walkLegDetailsContainer: {
    borderLeftWidth: 2,
    borderColor: Colors.blueAccent,
    width: '100%',
    marginLeft: 15,
    padding: 10,
  },
  detailsTitle: {
    fontSize: 16,
    color: Colors.coal,
    marginHorizontal: 10,
    fontWeight: 'bold'
  }, 
  walkLegDataContainer: {
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: Colors.text,
    height: 50,
    justifyContent: 'space-around'
  },
  walkLegDataTitle: {
    // fontSize: 12,
    color: Colors.text
  },
  walkLegDataInfo: {
    // fontSize: 
  }
})
