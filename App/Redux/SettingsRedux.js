import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import I18n from 'react-native-i18n'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  changeLanguage: ['language'],
})

export const SettingsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  // language: I18n.locale.substr(0, 2)
  language: 'en'
})

/* ------------- Selectors ------------- */

export const SettingsSelectors = {
  getLanguage : state => state.settings.language
}

/* ------------- Reducers ------------- */

// request the data from an api
export const changeLanguage = (state, action) => {
  return state.merge({ language: action.language })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_LANGUAGE]: changeLanguage
})
