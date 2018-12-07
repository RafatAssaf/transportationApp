// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import TransportationAPI from './TransportationAPI'


export default {
  TransportationAPI: TransportationAPI.createDataAPI(),
  TransportationTrackingAPI: TransportationAPI.createTrackingAPI(),
  TransportationPlanningAPI: TransportationAPI.createPlanningAPI()
}

