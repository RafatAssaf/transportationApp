import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  
  componentDidMount () {
    this.props.startup() //fire startup action
    console.disableYellowBox = true // disable yellow boxes during dev mode 
  }

  componentWillUnmount() {
    //stop location watcher
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' translucent backgroundColor='#0002'/>
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
