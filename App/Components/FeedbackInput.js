import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/FeedbackInputStyle'
import {t} from '../I18n'

export default class FeedbackInput extends Component {

  render () {
    const {onChangeText, value} = this.props
    return (
      <View style={styles.container}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          placeholder={t('popup.feedbackPlaceholder')}
        />
      </View>
    )
  }
}
