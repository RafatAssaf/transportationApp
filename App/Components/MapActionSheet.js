import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/MapActionSheetStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Colors, Metrics} from '../Themes'
import {t} from '../I18n'

export default class MapActionSheet extends Component {
  // // Prop type warnings
  static propTypes = {
    fromName: PropTypes.string.isRequired,
    toName: PropTypes.string.isRequired,
  }

  cropString(string, maxLen) {
    return string.length > maxLen
      ? string.slice(0, maxLen) + '...'
      : string
  }

  render () {
    const {cancel, showDetails, fromName, toName} = this.props
    return (
      <View style={styles.container}>

        <View style={styles.buttonsContainer}>
          <Icon size={Metrics.iconSize} name='clear' color={Colors.secondryText} onPress={cancel}/> 
        </View>

        <View style={styles.directionsContainer}>
          <View style={styles.textContainer}>
            <Text>{t('actionsheet.from')}</Text>
            <Text style={styles.directionText}>{this.cropString(fromName, 18)}</Text>
          </View>
          <Icon size={Metrics.iconSize} name='arrow-forward' color={Colors.secondryText}/>
          <View style={styles.textContainer}>
            <Text>{t('actionsheet.to')}</Text>
            <Text style={styles.directionText}>{this.cropString(toName, 18)}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonsContainer} onPress={showDetails}>
          <Text style={styles.buttonText}>{t('actionsheet.showDetails')}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
