import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  //fromPlace & toPlace are self-explainatory, 
  //locate is a callback to center the map on the fetched data 
  tripRequest: ['fromPlace', 'toPlace', 'locate'],
  tripSuccess: ['trip'],
  tripFailure: null,
  tripCancel: null
})

export const TripTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fromTo: null,
  fetching: false,
  trip: null,
  error: null
})

/* ------------- Selectors ------------- */

export const TripSelectors = {
  getTrip: state => state.trip.trip,
  getIsLoading: state => state.trip.fetching
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { fromPlace, toPlace }) =>
  state.merge({ fetching: true, fromTo: {fromPlace, toPlace}, trip: null })

// successful api lookup
export const success = (state, action) => {
  const { trip } = action
  return state.merge({ fetching: false, error: null, trip })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, trip: null })

export const cancel = state => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TRIP_REQUEST]: request,
  [Types.TRIP_SUCCESS]: success,
  [Types.TRIP_FAILURE]: failure,
  [Types.TRIP_CANCEL] : cancel
})
