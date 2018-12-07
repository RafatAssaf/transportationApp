import { all } from 'redux-saga/effects'

/* ------------- Hooks ------------- */

import StartupHooks   from './StartupSagas'
import AreasHooks     from './AreasSagas'
import SearchHooks    from './SearchSagas'
import PolylinesHooks from './PolylinesSagas'
import TrackingHooks  from './TrackingSagas'
import TripHooks      from './TripSagas'

/* ------------- Combine all hooks from types to sagas ------------- */

export default function * root () {
  yield all([
    ...StartupHooks,
    ...AreasHooks,
    ...SearchHooks,
    ...PolylinesHooks,
    ...TrackingHooks,
    ...TripHooks
  ])
}
