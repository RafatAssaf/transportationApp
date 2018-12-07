import { call, put, takeLatest } from 'redux-saga/effects'
import PolylinesActions, {PolylinesTypes} from '../Redux/PolylinesRedux'
import API from '../Services/Api'
const {TransportationAPI} = API

function * getPolyline (api, action) {
  const { polyline } = action
  const response = yield call(api.decodePolyline, polyline)

  if (response.ok) {
    console.log(response)
    yield put(PolylinesActions.polylinesSuccess(response.data))
  } else {
    yield put(PolylinesActions.polylinesFailure())
  }
}

export default [
  takeLatest(PolylinesTypes.POLYLINES_REQUEST, getPolyline, TransportationAPI)
]