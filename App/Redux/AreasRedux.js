import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  areasRequest: null,
  areasSuccess: ['areas'],
  areasFailure: null
})

export const AreasTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  areas: null,
  error: null
})

/* ------------- Selectors (for sagas) ------------- */

export const AreasSelectors = {
  getAreas: state => state.areas.areas
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({ fetching: true, areas: null })

// successful api lookup
export const success = (state, action) => {
  const { areas } = action
  return state.merge({ fetching: false, error: null, areas })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, areas: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AREAS_REQUEST]: request,
  [Types.AREAS_SUCCESS]: success,
  [Types.AREAS_FAILURE]: failure
})
