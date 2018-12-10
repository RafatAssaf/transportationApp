import { call, put, takeLatest } from 'redux-saga/effects'
import AreasActions, {AreasTypes} from '../Redux/AreasRedux'
import API from '../Services/Api'
const {TransportationAPI} = API

function * getAreas (api) {
  const response = yield call(api.getAreas)
  console.log(response)
  if (response.ok) {
    yield put(AreasActions.areasSuccess(response.data))
  } else {
    yield put(AreasActions.areasFailure())
  }
}

export default [
  takeLatest(AreasTypes.AREAS_REQUEST, getAreas, TransportationAPI)
]
