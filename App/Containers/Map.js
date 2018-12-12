import React, { Component } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Keyboard, Alert } from 'react-native'
import { connect } from 'react-redux'
import AreasActions,  {AreasSelectors}        from '../Redux/AreasRedux'
import SearchActions, {SearchSelectors}       from '../Redux/SearchRedux'
import PolylinesActions, {PolylinesSelectors} from '../Redux/PolylinesRedux'
import TrackingActions, {TrackingSelectors}   from '../Redux/TrackingRedux'
import TripActions, {TripSelectors}           from '../Redux/TripRedux'
import Permissions                            from 'react-native-permissions'
// import {Colors}                               from '../Themes'

//Components
import PlanTripHeader from '../Components/PlanTripHeader'
import MapComponent   from '../Components/MapComponent'
import MapAreas       from '../Components/MapAreas'
import MapActionSheet from '../Components/MapActionSheet'
import TripDetails    from '../Components/TripDetails'
import Popup          from '../Components/Popup'
import FeedbackInput  from '../Components/FeedbackInput'

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

      showActionSheet: false,
      isTripDetailsVisible: false,
      showMenuPopup: false,
      showLanguagePopup: false,
      showFeedbackPopup: false,

      feedbackText: ''
    }

    this.MY_LOCATION_TEXT = 'My Current Location'
  }

  componentWillReceiveProps(prevProps) {

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
        let location = {
          lat: userLocation.coords.latitude, 
          lon: userLocation.coords.longitude
        }
        this.setState({ userLocation : location })
      },
      err => {console.log(err)}
    )
  }

  trackBusses() {
    setInterval(() => {
      // for real app, pass in trip routes (create a selector for it)
      this.props.getRouteTracks() 
    }, 60000) //update every second
  }

  filterAreas = (query) => {
    const {areas} = this.props
    // console.log(areas)
    return query
    ? areas.filter(area => 
      ((area.name + area.description).toLowerCase().indexOf( `${query.toLowerCase()}` )) > 0).slice(0, 25)
    : areas.slice(0, 25)
  } 

  planTrip = () => {
    const {fromPoint, toPoint} = this.state
    const {planTrip} = this.props
    planTrip(
      {lat: fromPoint.lat, lon: fromPoint.lon},
      {lat: toPoint.lat, lon: toPoint.lon},
      (edgePoints) => this.viewTrip(edgePoints)
    )
  }

  viewTrip = (edgePoints) => {
    this.setState({ showActionSheet: true }, () => {
      this.mapRef.fitToCoordinates(edgePoints)
      this.trackBusses()
    })
  }

  cancelTrip = () => {
    this.props.cancelTrip()
    this.setState({ fromName: '', toName: '', fromPoint: null, toPoint: null })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch()
    clearInterval() // stop tracking busses
  }

  render () {
    const {tracks, isTripLoading, polylines, areas, trip, edgePoints} = this.props
    const {
      showAreas, 
      userLocation, 
      fromName, 
      toName, 
      fromPoint, 
      fromOrTo, 
      showActionSheet, 
      isTripDetailsVisible, 
      showMenuPopup, 
      showLanguagePopup,
      showFeedbackPopup,
      feedbackText
    } = this.state

    return (
      <View style={styles.container}>

        <PlanTripHeader 
          onFocus={(fromOrTo) => this.setState({ showAreas: true, fromOrTo, showActionSheet: false })}
          onMenuPress={() => this.setState({ showMenuPopup: true })}

          fromValue={fromName}
          toValue={toName}
          setFrom={(val) => this.setState({ fromName: val })}
          setTo={(val) => this.setState({ toName: val })}

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
            areas={
              this.filterAreas(fromOrTo === 'from'
                ? fromName
                : toName
              ).slice(0, 25)
            }
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
            markers={tracks}
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
          showDetails={() => this.setState({ isTripDetailsVisible: true })}
        /> }       

        <TripDetails
          isVisible={isTripDetailsVisible}
          close={() => this.setState({ isTripDetailsVisible: false })}
          trip={trip || {}}
        />

        <Popup
          isVisible={showMenuPopup}
          title="Settings"
          close={() => this.setState({ showMenuPopup: false })}
          options={[
            {title: "Language", onPress: () => this.setState({ showMenuPopup: false, showLanguagePopup: true }), mode: 'neutral'},  
            {title: "Contact Us", onPress: () => this.setState({ showMenuPopup: false, showFeedbackPopup: true }), mode: 'neutral'},  
          ]}
        />

        <Popup
          isVisible={showLanguagePopup}
          title="Language"
          subtitle="Choose your preferred language"
          close={() => this.setState({ showLanguagePopup: false })}
          options={[
            {title: "العربية", onPress: () => alert('Arabic'), mode: 'neutral'},  
            {title: "English", onPress: () => alert('English'), mode: 'neutral'},  
          ]}
        />

        <Popup
          isVisible={showFeedbackPopup}
          title="Feedback"
          subtitle="Your opinions and suggestions are highly valued"
          close={() => this.setState({ showFeedbackPopup: false, feedbackText: '' })}
          component={<FeedbackInput 
              value={feedbackText}
              onChangeText={text => this.setState({ feedbackText: text })}
            />}
          options={[
            {title: "Send", onPress: () => {
              if(feedbackText.length) {
                Alert.alert("Thank You!", "You're message will be heard")
                this.setState({ showFeedbackPopup: false })
              }
            }, mode: 'neutral'},  
            {title: "Cancel", onPress: () => this.setState({ showFeedbackPopup: false }), mode: 'neutral'},  
          ]}
        />

        {/* to trigger test events */}
        {/* <TouchableOpacity
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
            console.log(this.props.fromTo)
          }}
        /> */}

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
    trip:                 TripSelectors.getTrip(state),
    polylines:            PolylinesSelectors.getItineraries(state),
    edgePoints:           PolylinesSelectors.getEdgePoints(state),

    searchResults:        SearchSelectors.getSearchResults(state),
    reverseGeoCodeResult: SearchSelectors.getReverseGeoCodeResult(state),

    tracks:               TrackingSelectors.getRouteTracks(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAreas      : ()          => dispatch(AreasActions.areasRequest()),
    search        : (query)     => dispatch(SearchActions.search(query)),
    reverseGeoCode: (lat, lon)  => dispatch(SearchActions.reverseGeoCode(lat, lon)),
    decodePolyline: (polyline)  => dispatch(PolylinesActions.polylinesRequest(polyline)),
    getBusTrack   : (busNum)    => dispatch(TrackingActions.trackBusRequest(busNum)),
    getRouteTracks: (routes)     => dispatch(TrackingActions.trackRouteRequest(routes)),
    planTrip      : (from, to, cb)  => dispatch(TripActions.tripRequest(from, to, cb)),
    cancelTrip    : ()          => dispatch(TripActions.tripCancel()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanTrip)
