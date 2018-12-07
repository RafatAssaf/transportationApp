import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  polylinesRequest: ['polyline'],
  polylinesSuccess: ['points'],
  polylinesFailure: null
})

export const PolylinesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  polyline: null,
  fetching: null,
  points: null,
  error: null
})

/* ------------- Selectors ------------- */

export const PolylinesSelectors = {
  getData: state => state.search.points
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { polyline }) =>
  state.merge({ fetching: true, polyline, points: null })

// successful api lookup
export const success = (state, action) => {
  const { points } = action
  return state.merge({ fetching: false, error: null, points })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, points: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.POLYLINES_REQUEST]: request,
  [Types.POLYLINES_SUCCESS]: success,
  [Types.POLYLINES_FAILURE]: failure
})
