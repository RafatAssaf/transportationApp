import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  //track busses on a specific route
  trackRouteRequest: ['route'],
  trackRouteSuccess: ['tracks'],
  trackRouteFailure: null,

  //track a single bus
  trackBusRequest: ['busNum'],
  trackBusSuccess: ['track'],
  trackBusFailure: null
})

export const TrackingTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  route: null,
  fetchingRouteTracks: null,
  routeTracks: null,
  routeTracksError: null,

  busNum: null,
  fetchingBusTrack: null,
  busTrack: null,
  busTrackError: null
})

/* ------------- Selectors ------------- */

export const TrackingSelectors = {
  getRouteTracks: state => state.tracking.routeTracks,
  getBusTrack: state => state.tracking.busTrack
}

/* ------------- Reducers ------------- */

// request the data from an api
export const routeTracksRequest = (state, { route }) =>
  state.merge({ fetchingRouteTracks: true, route, routeTracks: null })

// successful api lookup
export const routeTracksSuccess = (state, action) => {
  const { tracks } = action
  return state.merge({ fetchingRouteTracks: false, routeTracksError: null, routeTracks: tracks })
}

// Something went wrong somewhere.
export const routeTracksFailure = state =>
  state.merge({ fetchingRouteTracks: false, routeTracksError: true, routeTracks: null })



  // request the data from an api
export const busTrackRequest = (state, { busNum }) =>
  state.merge({ fetchingBusTrack: true, busNum, busTrack: null })

// successful api lookup
export const busTrackSuccess = (state, action) => {
  const { busTrack } = action
  return state.merge({ fetchingBusTrack: false, busTrackError: null, busTrack })
}

// Something went wrong somewhere.
export const busTrackFailure = state =>
  state.merge({ fetchingBusTrack: false, busTrackError: true, busTrack: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TRACK_ROUTE_REQUEST]: routeTracksRequest,
  [Types.TRACK_ROUTE_SUCCESS]: routeTracksSuccess,
  [Types.TRACK_ROUTE_FAILURE]: routeTracksFailure,

  [Types.TRACK_BUS_REQUEST]: busTrackRequest,
  [Types.TRACK_BUS_SUCCESS]: busTrackSuccess,
  [Types.TRACK_BUS_FAILURE]: busTrackFailure
})
