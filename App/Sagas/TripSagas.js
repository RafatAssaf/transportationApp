import { call, put, takeLatest} from 'redux-saga/effects'
import TripActions, {TripTypes} from '../Redux/TripRedux'
import API from '../Services/Api'
const {TransportationPlanningAPI} = API

export function * planTrip (api, action) {
  const { fromPlace, toPlace } = action
  const response = yield call(api.planTrip, {fromPlace, toPlace})

  if (response.ok) {
    console.log(response)
    yield put(TripActions.tripSuccess(response.data))
  } else {
    yield put(TripActions.tripFailure())
  }
}

export default [
  takeLatest(TripTypes.TRIP_REQUEST, planTrip, TransportationPlanningAPI)
]
