import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/AreaItemStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Colors} from '../Themes'

export default class AreaItem extends Component {
  
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    name: 'Name missing',
    description: '',
    onPress: () => {}
  }

  cropString(string, maxLength) {
    return string.length > maxLength? string.slice(0, maxLength) + '...': string
  }

  render () {
    const {name, description, onPress} = this.props
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.nameCol}>
          <Text style={styles.name}>{this.cropString(name, 13)}</Text>
          <Icon name='directions' color={Colors.blueAccent} size={22}/>
        </View>
        <Text style={styles.description}>{this.cropString(description, 30)}</Text>
      </TouchableOpacity>
    )
  }
}
