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
    areas: PropTypes.array,
    polylines: PropTypes.array,
  }
  
  // Defaults for props
  static defaultProps = {
    areas: [],
    polylines: [],
    isLoading: false
  }

  renderMarkers = () => {
    const {areas} = this.props
    if(areas) {
      return areas.map( area => <MapMarker 
        coords={{
          latitude: parseFloat(area.center.latitude), 
          longitude: parseFloat(area.center.longitude)
        }}
      /> )
    }
  }

  renderPolylines = () => {
    const {polylines} = this.props
    return polylines.map((itinerary, i) => {
      return itinerary.map((leg, j) => <Polyline
        key={i + '-' + j}
        coordinates={leg}
        strokeWidth={5}
        strokeColor={PolylineColors['polyline' + i]}
        onPress={() => alert('view details')}
      /> )
    }).flat()
  }

  render () {
    const {isLoading, areas, polylines} = this.props

    return (
      <View style={styles.container}>
        <MapView
          ref={r => this.mapRef = r}
          onLayout={() => {
            //find edge points
            let points = polylines.flat().flat()
            let maxLat = points.reduce((max, point) => point.latitude > max.latitude? point: max, points[0])
            let minLat = points.reduce((min, point) => point.latitude < min.latitude? point: min, points[0])
            let maxLon = points.reduce((max, point) => point.longitude > max.longitude? point: max, points[0])
            let minLon = points.reduce((min, point) => point.longitude < min.longitude? point: min, points[0])

            //fit the map to the polylines
            this.mapRef.fitToCoordinates([
              maxLat, maxLon, minLat, minLon
            ], { animated: true })
          }}

          showsUserLocation
          loadingEnabled
          loadingIndicatorColor='#0003'
          loadingBackgroundColor='#fff'
          initialRegion={{
            latitude: 31.9454,
            longitude: 35.9284,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
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
