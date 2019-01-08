import { call, put, takeLatest } from 'redux-saga/effects'
import TrackingActions, {TrackingTypes} from '../Redux/TrackingRedux'
import API from '../Services/Api'
const {TransportationTrackingAPI} = API

function * getRouteTracks (api, action) {
  // const { routes } = action
  const routes = ['ju', 'abunsair']

  let response = {data: []}
  for(let i in routes) {
    const track = yield call(api.trackRoute, routes[i])
    if(true) {
      response.data = response.data.concat(track.data)
    }
  }

  yield put(TrackingActions.trackRouteSuccess(response.data))
}

function * getBusTrack (api, action) {
  const { busNum } = action
  const response = yield call(api.trackBus, busNum)

  if (response.ok) {
    yield put(TrackingActions.trackBusSuccess(response.data))
  } else {
    yield put(TrackingActions.trackBusFailure())
  }
}

export default [
  takeLatest(TrackingTypes.TRACK_ROUTE_REQUEST, getRouteTracks, TransportationTrackingAPI),
  takeLatest(TrackingTypes.TRACK_BUS_REQUEST, getBusTrack, TransportationTrackingAPI)
]
