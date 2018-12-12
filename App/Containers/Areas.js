import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'
import AreasActions,  {AreasSelectors}        from '../Redux/AreasRedux'
import SearchActions, {SearchSelectors}       from '../Redux/SearchRedux'
import PolylinesActions, {PolylinesSelectors} from '../Redux/PolylinesRedux'
import TrackingActions, {TrackingSelectors}   from '../Redux/TrackingRedux'
import TripActions, {TripSelectors}           from '../Redux/TripRedux'

import SimpleButton   from '../Components/SimpleButton'
import MapAreas       from '../Components/MapAreas'
import SimpleHeader   from '../Components/SimpleHeader'


// Styles
import styles from './Styles/AreasStyle'

class Areas extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  filterAreas = (query) => {
    const {areas} = this.props
    // console.log(areas)
    return query
    ? areas.filter(area => 
      ((area.name + area.description).toLowerCase().indexOf( `${query.toLowerCase()}` )) > 0).slice(0, 25)
    : areas.slice(0, 25)
  } 

  render () {
    const {planTrip, userLocation} = this.props
    const {query} = this.state
    return (
      <View style={styles.container}>
        <SimpleHeader title="Areas"/>
        <MapAreas
          areas={ this.filterAreas(query) }
          fullScreen
          onChangeText={q => {
            this.setState({ query: q })
          }}
          set={(point) => {
            // planTrip( userLocation, point )
            this.props.navigation.navigate('Plan Trip')
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    areas:                AreasSelectors.getAreas(state),
    searchResults:        SearchSelectors.getSearchResults(state),
    reverseGeoCodeResult: SearchSelectors.getReverseGeoCodeResult(state),
    userLocation:         TrackingSelectors.getUserLocation(state)
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

export default connect(mapStateToProps, mapDispatchToProps)(Areas)
