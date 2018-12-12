import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import SimpleHeader   from '../Components/SimpleHeader'

// Styles
import styles from './Styles/TripsStyle'

class Trips extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <SimpleHeader title="My Trips"/>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trips)
