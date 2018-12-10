import React, { Component } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import AreasActions,  {AreasSelectors}        from '../Redux/AreasRedux'
import SearchActions, {SearchSelectors}       from '../Redux/SearchRedux'
import PolylinesActions, {PolylinesSelectors} from '../Redux/PolylinesRedux'
import TrackingActions, {TrackingSelectors}   from '../Redux/TrackingRedux'
import TripActions, {TripSelectors}           from '../Redux/TripRedux'
import Permissions                            from 'react-native-permissions'
import {Colors}                               from '../Themes'

//Components
import PlanTripHeader from '../Components/PlanTripHeader'
import MapComponent   from '../Components/MapComponent'
import MapAreas       from '../Components/MapAreas'
import MapActionSheet from '../Components/MapActionSheet'

// Styles
import styles from './Styles/MapStyle'

class PlanTrip extends Component {

  constructor (props) {
    super(props)
    this.state = {
      showAreas: false,
      userLocation: null,

      fromPoint: null,
      toPoint: null,

      fromName: '',
      toName: '',

      // to decide the field being modified
      fromOrTo: 'from',

      showActionSheet: false
    }

    this.MY_LOCATION_TEXT = 'My Current Location'
  }

  componentDidMount() {
    Permissions.check('location')
    .then(status => {
      if(status === 'authorized') {
        this.setLocationWatcher()
      } else { 
        Permissions.request('location')
        .then(status => {
          if(status === 'authorized') this.setLocationWatcher()
        })
        .catch(err => console.log(err))
      }
    })
    .catch(err => {console.log(err)})
  }

  setLocationWatcher() {
    navigator.geolocation.watchPosition(
      userLocation => {
        this.setState({ userLocation : {
          lat: userLocation.coords.latitude, 
          lon: userLocation.coords.longitude
        } })
      },
      err => {console.log(err)}
    )
  }

  planTrip = () => {
    const {fromPoint, toPoint} = this.state
    const {planTrip} = this.props
    planTrip(
      {lat: fromPoint.lat, lon: fromPoint.lon},
      {lat: toPoint.lat, lon: toPoint.lon},
      (edgePoints) => {
        this.setState({ showActionSheet: true }, () => {
          this.mapRef.fitToCoordinates(edgePoints)
        })
      }
    )
  }

  cancelTrip = () => {
    this.props.cancelTrip()
    this.setState({ fromName: '', toName: '', fromPoint: null, toPoint: null })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch()
  }

  render () {
    const {areAreasLoading, isTripLoading, polylines, areas, planTrip, edgePoints, cancelTrip} = this.props
    const {showAreas, userLocation, fromName, toName, fromPoint, toPoint, fromOrTo, showActionSheet} = this.state

    return (
      <View style={styles.container}>

        <PlanTripHeader 
          onFocus={(fromOrTo) => this.setState({ showAreas: true, fromOrTo, showActionSheet: false })}

          fromValue={fromName}
          toValue={toName}
          setFrom={(val) => this.setState({ fromName: val })}
          // setto={(val) => this.setState({ toName: val })}

          selectUserLocation={() => {
            if(userLocation) { //if the location is fetched
              console.log(userLocation)
              if(!showAreas) { this.mapRef.fitToCoordinates([ {latitude: userLocation.lat, longitude: userLocation.lon} ]) }

              Keyboard.dismiss()
              this.setState({ 
                fromPoint: this.state.userLocation, 
                fromName: this.MY_LOCATION_TEXT,
                showAreas: false 
              })
            } else {
              Permissions.request('location')
              .then(status => {
                if(status === 'authorized') this.setLocationWatcher()
              }) 
              .catch(err => {})
            }
          }}
        />

        {showAreas
          ? <MapAreas
            areas={areas}
            close={() => {
              Keyboard.dismiss()
              this.setState({ showAreas: false })
            }}
            set={(point) => {
              this.setState({
                //set fromPoint or toPoint to the passed value (decide using fromOrTo state field)
                [`${fromOrTo}Point`]: {lat: point.lat, lon: point.lon},
                [`${fromOrTo}Name`]: point.name,

                //hide areas view
                showAreas: false

              }, () => {
                //if both fromPoint and toPoint are selected, fetch trip!
                if(this.state.fromPoint && this.state.toPoint) this.planTrip()

                //if toPoint is selected & formPoint is not assume fromPoint is userLocation
                if(fromOrTo === 'to' && !fromPoint) {
                  this.setState({ fromPoint: this.state.userLocation, fromName: this.MY_LOCATION_TEXT})
                }

              })
            }}
          />
          : <MapComponent 
            isLoading={isTripLoading}
            polylines={polylines}
            markers={(fromPoint && toPoint) 
              ? [
                {latitude: fromPoint.lat, longitude: fromPoint.lon},
                {latitude: toPoint.lat, longitude: toPoint.lon},
              ] : []
            }
            setRef={r => this.mapRef = r} // to control MapComponent from here
          />
        }

        { showActionSheet &&
        <MapActionSheet
          fromName={fromName}
          toName={toName}
          cancel={() => {
            this.setState({ showActionSheet: false })
            this.cancelTrip()
          }}
          showDetails={() => alert('showDetails')}
        /> }       

        {/* to trigger test events */}
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'steelblue',
            position: 'absolute',
            top: 120, left: 25,
            borderRadius: 20,
            justifyContent: 'center', alignItems: 'center'
          }}
          onPress={() => {
            console.log(fromOrTo, fromPoint, toPoint)
          }}
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
    edgePoints:           PolylinesSelectors.getEdgePoints(state),

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
    planTrip      : (from, to, cb)  => dispatch(TripActions.tripRequest(from, to, cb)),
    cancelTrip    : ()          => dispatch(TripActions.tripCancel())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanTrip)
