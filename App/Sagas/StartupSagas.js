import { put, takeLatest } from 'redux-saga/effects'
import {StartupTypes} from '../Redux/StartupRedux'
import AreasActions from '../Redux/AreasRedux'

// process STARTUP actions
function * startup () {
  //do things that should be done on startup
  yield put(AreasActions.areasRequest())
}

export default [
  takeLatest(StartupTypes.STARTUP, startup)
]