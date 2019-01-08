import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import styles from './Styles/MapComponentStyle'
import Colors from '../Themes/Colors'
import PolylineColors from '../Themes/PolylinesColors'

import MapView, {Polyline} from 'react-native-maps'
import MapMarker from './MapMarker'

export default class MapComponent extends Component {

  constructor(props) {
    super(props)
    this.mapRef = null
  }

  // // Prop type warnings
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    markers: PropTypes.array,
    polylines: PropTypes.array,
  }
  
  // Defaults for props
  static defaultProps = {
    markers: [],
    polylines: [],
    isLoading: false
  }

  renderMarkers = () => {
    const {markers} = this.props
    if(markers) {
      return markers.map( (marker, i) => <MapMarker 
        key={'marker'+i}
        coords={{
          latitude: parseFloat(marker.latitude), 
          longitude: parseFloat(marker.longitude)
        }}
        color={marker.color}
      /> )
    }
  }

  renderPolylines = () => {
    const {polylines} = this.props
    if(polylines.length > 0) {
      return polylines.map((itinerary, i) => {
        return itinerary.map((leg, j) => <Polyline
          key={i + '-' + j}
          coordinates={leg}
          strokeWidth={5}
          strokeColor={PolylineColors['polyline' + i]}
          onPress={() => alert('view details')}
        /> )
      }).flat()
    } else {
      return []
    }
  }

  render () {
    const {isLoading, setRef} = this.props
    return (
      <View style={styles.container}>
        <MapView
          ref={r => this.mapRef = r}
          onLayout={ () => setRef(this.mapRef) } // give controll to the container
          showsUserLocation
          showsMyLocationButton={false}
          loadingEnabled
          loadingIndicatorColor='#0003'
          loadingBackgroundColor='#fff'
          maxZoomLevel={15}
          initialRegion={{
            latitude: 31.9454,
            longitude: 35.9284,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={[{
            ...StyleSheet.absoluteFillObject,
          }, styles.mapView]}
        >
          {this.renderPolylines()}
          {this.renderMarkers()}
        </MapView>

        {isLoading &&
        <View style={styles.loadingSheet}>
          <ActivityIndicator size='large' color={Colors.white}/> 
        </View>}

      </View>
    )
  }
}
