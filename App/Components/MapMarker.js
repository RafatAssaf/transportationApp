import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/MapMarkerStyle'
import {Marker} from 'react-native-maps'

export default class MapMarker extends Component {

  static propTypes = {
    coords: PropTypes.object.isRequired,
    // title: PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: 'title not found'
  }

  render () {
    const {coords, color} = this.props
    return <Marker
      coordinate={coords}
      pinColor={color}
    />
  }
}
