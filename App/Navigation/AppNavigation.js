import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import PlanTrip from '../Containers/Map'
import Areas from '../Containers/Areas'
import Trips from '../Containers/Trips'
import Profile from '../Containers/Profile'
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../Themes/Colors'

const SCREEN_ICON = {
  PlanTrip: 'map-marker',
  Areas: 'map',
  Trips: 'bus',
  Profile: 'user'
}

const PrimaryNav = createBottomTabNavigator({
  PlanTrip: {screen: PlanTrip},
  Areas: {screen: Areas},
  Trips: {screen: Trips},
  Profile: {screen: Profile},
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      return <Icon name={SCREEN_ICON[routeName]} size={22} color={tintColor} />;
    },
  }),
  tabBarPosition: 'bottom',
  animationEnabled: true,
  backBehavior: 'initialRoute',
  initialRouteName: 'PlanTrip',
  tabBarOptions: {
    activeTintColor: Colors.yellowAccent,
    inactiveTintColor: Colors.background,
    activeBackgroundColor: Colors.primary,
    inactiveBackgroundColor: Colors.primary,
  }
})

export default createAppContainer(PrimaryNav)
