import { call, put, takeLatest } from 'redux-saga/effects'
import TrackingActions, {TrackingTypes} from '../Redux/TrackingRedux'
import API from '../Services/Api'
const {TransportationTrackingAPI} = API

function * getRouteTracks (api, action) {
  const { route } = action
  const response = yield call(api.trackRoute, route)

  if (response.ok) {
    console.log(response)
    yield put(TrackingActions.trackRouteSuccess(response.data))
  } else {
    yield put(TrackingActions.trackRouteFailure())
  }
}

function * getBusTrack (api, action) {
  const { busNum } = action
  const response = yield call(api.trackBus, busNum)

  if (response.ok) {
    console.log(response)
    yield put(TrackingActions.trackBusSuccess(response.data))
  } else {
    yield put(TrackingActions.trackBusFailure())
  }
}

export default [
  takeLatest(TrackingTypes.TRACK_ROUTE_REQUEST, getRouteTracks, TransportationTrackingAPI),
  takeLatest(TrackingTypes.TRACK_BUS_REQUEST, getBusTrack, TransportationTrackingAPI)
]