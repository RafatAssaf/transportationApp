import { call, put, takeLatest } from 'redux-saga/effects'
import PolylinesActions, {PolylinesTypes} from '../Redux/PolylinesRedux'
import API from '../Services/Api'
const {TransportationAPI} = API

function * decodeItineraries (api, action) {
  const { itineraryCodes, locate } = action

  try {
    let decodedPolylines = []
    for(let i = 0 ; i < itineraryCodes.length ; i++ ) {
      let itinerary = []
      for(let j = 0 ; j < itineraryCodes[i].length ; j++ ) {
        itinerary.push( yield call(api.decodePolyline, itineraryCodes[i][j]) )
      }
      decodedPolylines.push(itinerary)
    }

    let processedItineraries = decodedPolylines.map(itinerary => {
      return itinerary.map(leg => {
        return leg.data.map(point => ({
          latitude: point.lat,
          longitude: point.lon
        }))
      })
    })
    let points = processedItineraries.flat().flat()
    let edgePoints = [
      points.reduce((max, point) => point.latitude > max.latitude? point: max, points[0]),
      points.reduce((min, point) => point.latitude < min.latitude? point: min, points[0]),
      points.reduce((max, point) => point.longitude > max.longitude? point: max, points[0]),
      points.reduce((min, point) => point.longitude < min.longitude? point: min, points[0])
    ]

    locate(edgePoints) //fit the map to new data

    yield put(PolylinesActions.polylinesSuccess(processedItineraries, edgePoints))

  } catch(e) {
    yield put(PolylinesActions.polylinesFailure())
  }

}

export default [
  takeLatest(PolylinesTypes.POLYLINES_REQUEST, decodeItineraries, TransportationAPI)
]