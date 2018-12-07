import { call, put, takeLatest } from 'redux-saga/effects'
import SearchActions, {SearchTypes} from '../Redux/SearchRedux'
import API from '../Services/Api'
const {TransportationAPI} = API

function * search (api, action) {
  const { query } = action
  const response = yield call(api.search, query)
  
  if (response.ok) {
    console.log(response.data)
    yield put(SearchActions.searchSuccess(response.data))
  } else {
    yield put(SearchActions.searchFailure())
  }
}

function * reverseGeoCode (api, action) {
  const { lat, lon } = action
  const response = yield call(api.reverseGeocode, lat, lon)
  
  if (response.ok) {
    console.log(response.data)
    yield put(SearchActions.reverseGeoCodeSuccess(response.data))
  } else {
    yield put(SearchActions.reverseGeocodeFailure())
  }
}

export default [
  takeLatest(SearchTypes.SEARCH, search, TransportationAPI),
  takeLatest(SearchTypes.REVERSE_GEO_CODE, reverseGeoCode, TransportationAPI)
]
