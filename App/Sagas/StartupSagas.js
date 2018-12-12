import { put, takeLatest } from 'redux-saga/effects'
import {StartupTypes} from '../Redux/StartupRedux'
import AreasActions from '../Redux/AreasRedux'
import TripActions from '../Redux/TripRedux'

// process STARTUP actions
function * startup () {
  //clear any trips in the store
  yield put(TripActions.tripCancel())


  //get trip for testing
  // yield put(TripActions.tripRequest())

  //do things that should be done on startup
  yield put(AreasActions.areasRequest())

}

export default [
  takeLatest(StartupTypes.STARTUP, startup)
]