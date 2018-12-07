// a library to wrap and simplify api calls
import apisauce from 'apisauce'

const createDataAPI = () => {

  let baseURL = 'http://api.khutoutna.gov.jo/'
  const api = apisauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 10000
  })

  const getAreas       = ()         => api.get('areas')
  const search         = (query)    => api.get(`search/${query}`)
  const reverseGeocode = (lat, lon) => api.get(`reverseGeocode?lat=${lat}&lon=${lon}`)
  const decodePolyline = (polyline) => api.get(`decode?polyline=${polyline}`)
  const trackRoute     = (route)    => api.get(`/track/route/${route}`)
  const trackBus       = (busNum)   => api.get(`/track/bus/${busNum}`)

  return {
    getAreas,
    search,
    reverseGeocode,
    decodePolyline,
    trackRoute,
    trackBus
  }
}

const createTrackingAPI = () => {

  let baseURL = 'http://live.khutoutna.gov.jo'
  const api = apisauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 10000
  })

  const trackRoute     = (route)    => api.get(`/track/route/${route}`)
  const trackBus       = (busNum)   => api.get(`/track/bus/${busNum}`)

  return {
    trackRoute,
    trackBus
  }
}

const createPlanningAPI = () => {

  let baseURL = 'http://otp.khutoutna.gov.jo:8080/otp/routers/default'
  const api = apisauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 10000
  })

  const planTrip = ({
    routerId = 'default',
    maxWalkDistance = 2000,
    mode = 'WALK,TRANSIT',
    cutoffSec = '3600',
    fromPlace,
    toPlace
  }) => api.get(`/plan?routerId=${routerId}&maxWalkDistance=${maxWalkDistance}&mode=${mode}&cutoffSec=${cutoffSec}&fromPlace=${fromPlace.lat},${fromPlace.lon}&toPlace=${toPlace.lat},${toPlace.lon}`)

  return {
    planTrip
  }
}

export default {
  createDataAPI,
  createTrackingAPI,
  createPlanningAPI
}
