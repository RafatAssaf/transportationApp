import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TextInput, Image } from 'react-native'
import styles from './Styles/PlanTripHeaderStyle'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Colors} from '../Themes'

export default class PlanTripHeader extends Component {
 
  static propTypes = {
    title: PropTypes.string
  }
 
  static defaultProps = {
    title: 'From'
  }

  render () {
    const { onFocus, onBlur, selectUserLocation, fromValue, toValue, setFrom, setTo } = this.props
    return (
      <View style={styles.container}>
        <Image source={require('../Images/fromTo.png')} style={styles.fromToImage} resizeMode='contain'/>
        <View style={styles.inputsContainer}>
          <View style={styles.singleInputContainer}>
            <TextInput 
              value={fromValue}
              onChangeText={newText => setFrom(newText)}
              style={[styles.input, styles.fromInput]} 
              placeholder="From"
              onFocus={() => onFocus('from')}
              onBlur={onBlur}
            />
            <Icon 
              size={22} 
              color={Colors.coal} 
              name='crosshairs-gps' 
              style={styles.inputIcon}
              onPress={selectUserLocation}
            />
          </View>
          <TextInput 
            value={toValue}
            onChangeText={newText => setTo(newText)}
            style={[styles.input, styles.toInput]} 
            placeholder="To"
            onFocus={() => onFocus('to')}
            onBlur={onBlur}
          />
        </View>
      </View>
    )
  }
}
