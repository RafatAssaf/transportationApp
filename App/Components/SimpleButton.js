import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/SimpleButtonStyles'

export default class SimpleButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string
  }

  render () {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.title}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}
