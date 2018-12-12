import {  takeLatest } from 'redux-saga/effects'
import I18n from 'react-native-i18n'
import {SettingsTypes} from '../Redux/SettingsRedux'
import RNRestart from 'react-native-restart'

export function * updateLanguage (action) {
  const { language } = action
  I18n.locale = language
}

export default [
  takeLatest(SettingsTypes.CHANGE_LANGUAGE, updateLanguage)
]
