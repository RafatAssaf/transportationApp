import { put, takeLatest, select } from 'redux-saga/effects'
import {StartupTypes} from '../Redux/StartupRedux'
import AreasActions from '../Redux/AreasRedux'
import TripActions from '../Redux/TripRedux'
import SettingsActions, {SettingsSelectors} from '../Redux/SettingsRedux'
import I18n from 'react-native-i18n'

// process STARTUP actions
function * startup () {
  //clear any trips in the store
  yield put(TripActions.tripCancel())

  const state = yield select()
  // I18n.locale = SettingsSelectors.getLanguage(state)

  yield put(SettingsActions.changeLanguage(SettingsSelectors.getLanguage(state)))

  //do things that should be done on startup
  yield put(AreasActions.areasRequest())

}

export default [
  takeLatest(StartupTypes.STARTUP, startup)
]