import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  polylinesRequest: ['itineraryCodes'],
  polylinesSuccess: ['itineraries'],
  polylinesFailure: null
})

export const PolylinesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  itineraryCodes: [],
  fetching: null,
  itineraries: [],
  error: null
})

/* ------------- Selectors ------------- */

export const PolylinesSelectors = {
  getItineraries: state => state.polylines.itineraries
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { itineraryCodes }) =>
  state.merge({ fetching: true, itineraryCodes, itineraries: [] })

// successful api lookup
export const success = (state, action) => {
  const { itineraries } = action

  //response transformation
  let processedItineraries = itineraries.map(itinerary => {
    return itinerary.map(leg => {
      return leg.data.map(point => ({
        latitude: point.lat,
        longitude: point.lon
      }))
    })
  }) 

  return state.merge({ fetching: false, error: null, itineraries: processedItineraries })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, itineraries: [] })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.POLYLINES_REQUEST]: request,
  [Types.POLYLINES_SUCCESS]: success,
  [Types.POLYLINES_FAILURE]: failure
})
