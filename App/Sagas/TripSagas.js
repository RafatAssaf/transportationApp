import { call, put, takeLatest} from 'redux-saga/effects'
import TripActions, {TripTypes} from '../Redux/TripRedux'
import PlolylinesActions, {} from '../Redux/PolylinesRedux'
import TrackingActions from '../Redux/TrackingRedux'
import Config from '../Config/DebugConfig'

//mock response
import planTripReponse from '../Fixtures/planTrip'

import API from '../Services/Api'
const {TransportationPlanningAPI} = API
const {TransportationTrackingAPI} = API

export function * planTrip (api, action) {
  const { fromPlace, toPlace, locate } = action

  let response = {}
  if(Config.useFixtures) {
    response.data = planTripReponse
  } else {
    response = yield call(api.planTrip, {fromPlace, toPlace})
  }
  console.log(response)
  
  if ((response.ok && !response.data.error) || Config.useFixtures) {
    
    yield put(TripActions.tripSuccess(response.data))


    //track busses
    let {itineraries} = response.data.plan
    // let tracks = []
    // for(let i in itineraries) {
    //   let itinerary = itineraries[i]
    //   for(let j in itinerary.legs) {
    //     if(itinerary.legs[j].mode === 'BUS') {
    //       let track = yield call(TransportationTrackingAPI.trackRoute, itinerary.legs[j].route)
    //       if(track.ok) tracks.push(track)
    //     }
    //   }
    // }
    // console.log(tracks)
    let routes = itineraries.map(iti => {
      return iti.legs.map(leg => leg.route)
    }).flat().filter(route => !!route)

    yield put(TrackingActions.trackRouteRequest([]))//for testing, I'll use ju & abunsair routes only 

    //extract polylines
    let polylines = itineraries.map(itinerary => {
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
