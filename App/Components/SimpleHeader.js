import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/SimpleHeaderStyle'

export default class SimpleHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  static defaultProps = {
    title: ''
  }

  render () {
    const {title} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }
}
