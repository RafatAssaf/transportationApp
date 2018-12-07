import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import AreasActions,  {AreasSelectors}        from '../Redux/AreasRedux'
import SearchActions, {SearchSelectors}       from '../Redux/SearchRedux'
import PolylinesActions, {PolylinesSelectors} from '../Redux/PolylinesRedux'
import TrackingActions, {TrackingSelectors}   from '../Redux/TrackingRedux'
import TripActions, {TripSelectors}           from '../Redux/TripRedux'
import SimpleButton from '../Components/SimpleButton'
import MapView from 'react-native-maps'

// Styles
import styles from './Styles/MapStyle'

class PlanTrip extends Component {
  constructor (props) {
    super(props)
    this.state = {
      areas: [],
      query: ''
    }
  }

  render () {
    let {getAreas, search, reverseGeoCode, decodePolyline, getBusTrack, getRouteTracks, planTrip} = this.props
    return (
      <View style={styles.container}>
        {/* <SimpleButton title='Fetch Areas'             onPress={getAreas}/> */}
        {/* <SimpleButton title='Search "Prince Hussien"' onPress={() => search('Prince Hussien')}/>
        <SimpleButton title='Reverse GeoCode'         onPress={() => reverseGeoCode(31.964419799, 35.9584179)}/>
        <SimpleButton title='Decode Polyline'         onPress={() => decodePolyline('o{abEyw}yEIuDfC?`@}BFaCz@kA?a@g@oCbDWfAGZONWEiB')}/>
        <SimpleButton title='Get Bus Track'           onPress={() => getBusTrack('1059')}/>
        <SimpleButton title='Get Route Tracks'        onPress={() => getRouteTracks('ju')}/>
        <SimpleButton title='PlanTrip'        onPress={() => planTrip({lat: 31.9637032, lon: 35.8746904}, {lat: 32.0232583, lon: 35.8483421})}/> */}
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{...StyleSheet.absoluteFillObject}}
        >
          
        </MapView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    areas:                AreasSelectors.getAreas(state),
    searchResults:        SearchSelectors.getSearchResults(state),
    reverseGeoCodeResult: SearchSelectors.getReverseGeoCodeResult(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAreas      : ()          => dispatch(AreasActions.areasRequest()),
    search        : (query)     => dispatch(SearchActions.search(query)),
    reverseGeoCode: (lat, lon)  => dispatch(SearchActions.reverseGeoCode(lat, lon)),
    decodePolyline: (polyline)  => dispatch(PolylinesActions.polylinesRequest(polyline)),
    getBusTrack   : (busNum)    => dispatch(TrackingActions.trackBusRequest(busNum)),
    getRouteTracks: (route)     => dispatch(TrackingActions.trackRouteRequest(route)),
    planTrip      : (from, to)  => dispatch(TripActions.tripRequest(from, to))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanTrip)
