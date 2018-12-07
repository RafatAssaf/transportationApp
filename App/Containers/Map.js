import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import AreasActions,  {AreasSelectors}        from '../Redux/AreasRedux'
import SearchActions, {SearchSelectors}       from '../Redux/SearchRedux'
import PolylinesActions, {PolylinesSelectors} from '../Redux/PolylinesRedux'
import TrackingActions, {TrackingSelectors}   from '../Redux/TrackingRedux'
import TripActions, {TripSelectors}           from '../Redux/TripRedux'

//Components
import MapComponent from '../Components/MapComponent'

// Styles
import styles from './Styles/MapStyle'

class PlanTrip extends Component {

  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    let {areAreasLoading, isTripLoading, polylines} = this.props
    return (
      <View style={styles.container}>
        <MapComponent 
          isLoading={areAreasLoading || isTripLoading}
          // areas={areas}
          polylines={polylines}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //areas
    areas:                AreasSelectors.getAreas(state),
    areAreasLoading:      AreasSelectors.getIsLoading(state),

    //polylines
    isTripLoading:        TripSelectors.getIsLoading(state),
    polylines:            PolylinesSelectors.getItineraries(state),

    //
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
