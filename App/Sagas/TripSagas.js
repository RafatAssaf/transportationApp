import { call, put, takeLatest} from 'redux-saga/effects'
import TripActions, {TripTypes} from '../Redux/TripRedux'
import PlolylinesActions, {} from '../Redux/PolylinesRedux'

import API from '../Services/Api'
const {TransportationPlanningAPI} = API

export function * planTrip (api, action) {
  const { fromPlace, toPlace, locate } = action

  const response = yield call(api.planTrip, {fromPlace, toPlace})

  if (response.ok && !response.data.error) {
    console.log(response)
    yield put(TripActions.tripSuccess(response.data))

    //extract polylines
    let polylines = response.data.plan.itineraries.map(itinerary => {
      return itinerary.legs.map(leg => {
        return leg.legGeometry.points
      })
    })

    //decode polylines & locate the map to new data
    yield put(PlolylinesActions.polylinesRequest(polylines, locate))

  } else {
    yield put(TripActions.tripFailure())
  }
}

export default [
  takeLatest(TripTypes.TRIP_REQUEST, planTrip, TransportationPlanningAPI)
]
