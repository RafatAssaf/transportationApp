import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  polylinesRequest: ['itineraryCodes', 'locate'],
  polylinesSuccess: ['itineraries', 'edgePoints'],
  polylinesFailure: null,
  tripCancel: null
})

export const PolylinesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  itineraryCodes: [],
  fetching: false,
  itineraries: [],
  edgePoints: [],
  error: null
})

/* ------------- Selectors ------------- */

export const PolylinesSelectors = Immutable({
  getItineraries: state => state.polylines.itineraries,
  getEdgePoints: state => state.polylines.edgePoints
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { itineraryCodes }) =>
  state.merge({ fetching: true, itineraryCodes, itineraries: [], edgePoints: [] })

// successful api lookup
export const success = (state, action) => {
  const { itineraries, edgePoints } = action
  return state.merge({ fetching: false, error: null, itineraries, edgePoints })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, itineraries: [], edgePoints: [] })

export const cancel = state => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.POLYLINES_REQUEST]: request,
  [Types.POLYLINES_SUCCESS]: success,
  [Types.POLYLINES_FAILURE]: failure,
  [Types.TRIP_CANCEL]      : cancel
})
