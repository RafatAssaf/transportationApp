// @flow

import I18n from 'react-native-i18n'
import {I18nManager} from 'react-native'


// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

// English language is the main language for fall back:
I18n.translations = {
  en: require('./languages/en.json'),
  ar: require('./languages/ar.json') // 3arabi baby!
}

//RTL support: keep LTR
I18nManager.allowRTL(false)

export function t (string, params = {}) {
  return I18n.t(string, params)
}

export default I18n

