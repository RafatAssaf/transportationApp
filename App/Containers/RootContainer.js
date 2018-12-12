import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import {Colors} from '../Themes'
import {SettingsSelectors} from '../Redux/SettingsRedux'
import I18n from 'react-native-i18n'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  
  componentDidMount () {
    this.props.startup() //fire startup action
    console.disableYellowBox = true 
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' backgroundColor={Colors.primary}/>
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapStateToProps = (state) => {
  return {
    // language: SettingsSelectors.getLanguage(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
