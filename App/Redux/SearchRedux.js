import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  search: ['query'],
  searchSuccess: ['results'],
  searchFailure: null,

  reverseGeoCode: ['lat', 'lon'],
  reverseGeoCodeSuccess: ['result'],
  reverseGeoCodeFailure: null
})

export const SearchTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  //for searching using query
  query: null,
  searching: null,
  searchResults: null,
  searchError: null,
  
  //for reverse geocoding using latitude and logitude
  latLon: null,
  reverseGeoCoding: null,
  reverseGeoCodeResult: null,
  reverseGeoCodeError: null
})

/* ------------- Selectors ------------- */

export const SearchSelectors = {
  getSearchResults:         state => state.search.searchResults,
  getReverseGeoCodeResult:  state => state.search.reverseGeoCodeResult
}

/* ------------- Reducers ------------- */

export const searchRequest = (state, { query }) =>
  state.merge({ searching: true, query, results: null })

export const searchSuccess = (state, action) => {
  const { results } = action
  return state.merge({ searching: false, searchError: null, searchResults: results })
}

export const searchFailure = state =>
  state.merge({ searching: false, searchError: true, searchResults: null })



export const reverseGeoCodeRequest = (state, {lat, lon}) => 
  state.merge({ reverseGeoCoding: true, latLon: {lat, lon} })

export const reverseGeoCodeSuccess = (state, action) => {
  const { result } = action
  return state.merge({ reverseGeoCoding: false, reverseGeoCodeError: null, reverseGeoCodeResult: result })
}

export const reverseGeoCodeFailure = state =>
  state.merge({ reverseGeoCoding: false, reverseGeoCodeError: true, reverseGeoCodeResult: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH]                  : searchRequest,
  [Types.SEARCH_SUCCESS]          : searchSuccess,
  [Types.SEARCH_FAILURE]          : searchFailure,

  [Types.REVERSE_GEO_CODE]         : reverseGeoCodeRequest,
  [Types.REVERSE_GEO_CODE_SUCCESS] : reverseGeoCodeSuccess,
  [Types.REVERSE_GEO_CODE_FAILURE] : reverseGeoCodeFailure
})
