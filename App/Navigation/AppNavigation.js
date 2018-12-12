import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import PlanTrip from '../Containers/Map'

const PrimaryNav = createStackNavigator({
  Home: {screen: PlanTrip}
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
})

export default createAppContainer(PrimaryNav)
