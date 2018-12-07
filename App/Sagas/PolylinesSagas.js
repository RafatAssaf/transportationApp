import { call, put, takeLatest } from 'redux-saga/effects'
import PolylinesActions, {PolylinesTypes} from '../Redux/PolylinesRedux'
import API from '../Services/Api'
const {TransportationAPI} = API

function * decodeItineraries (api, action) {
  const { itineraryCodes } = action
  try {

    let decodedPolylines = []
    for(let i = 0 ; i < itineraryCodes.length ; i++ ) {
      let itinerary = []
      for(let j = 0 ; j < itineraryCodes[i].length ; j++ ) {
        itinerary.push( yield call(api.decodePolyline, itineraryCodes[i][j]) )
      }
      decodedPolylines.push(itinerary)
    }

    yield put(PolylinesActions.polylinesSuccess(decodedPolylines))
  } catch(e) {
    yield put(PolylinesActions.polylinesFailure())
  }

}

export default [
  takeLatest(PolylinesTypes.POLYLINES_REQUEST, decodeItineraries, TransportationAPI)
]