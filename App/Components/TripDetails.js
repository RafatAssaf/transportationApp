import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Modal, ScrollView, TouchableOpacity } from 'react-native'
import styles from './Styles/TripDetailsStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Metrics, Colors} from '../Themes'

export default class TripDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      choosenRoute: 0
    }
  }

  // // Prop type warnings
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    trip: PropTypes.object.isRequired,
  }
  //
  // // Defaults for props
  static defaultProps = {
    isVisible: false,
    trip: {},
    close: () => alert("can't close")
  }

  renderItinerary = (itinerary) => {
    // if(Array.isArray(itinerary.legs)){
      return itinerary.legs.map((leg, i) => {
        if(leg.mode === 'WALK') {
          return this.renderWalkLeg(leg)
        } else if(leg.mode === 'BUS') {
          return this.renderBusLeg(leg)
        } else {
          console.log("new leg mode", leg.mode)
          return null
        }
      })
    // }
  }

  renderWalkLeg = (walk) => {
    return (
      <View style={styles.walkLegContainer}>
        <View style={styles.walkLegHeader}>
          <Icon size={Metrics.iconSize} color={Colors.coal} name='directions-walk' onPress={close}/>
          <Text style={styles.detailsTitle}>WALK</Text>
        </View>
        <View style={styles.walkLegDetailsContainer}>
          <View style={styles.walkLegDataContainer}> 
            <Text style={styles.walkLegDataTitle}>Distance</Text>
            <Text style={styles.walkLegDataInfo}>{(walk.distance | 0) + ' meters'}</Text>
          </View>
          <View style={styles.walkLegDataContainer}> 
            <Text style={styles.walkLegDataTitle}>Duration</Text>
            <Text style={styles.walkLegDataInfo}>{Math.round((walk.duration | 0)/60) + ' minutes'}</Text>
          </View>
        </View>
      </View>
    )
  }

  renderBusLeg = (bus) => {
    return (
      <View style={styles.walkLegContainer}>
        <View style={styles.walkLegHeader}>
          <Icon size={Metrics.iconSize} color={Colors.coal} name='directions-bus' onPress={close}/>
          <Text style={styles.detailsTitle}>{bus.route}</Text>
        </View>
        <View style={styles.walkLegDetailsContainer}>
          <View style={styles.walkLegDataContainer}> 
            <Text style={styles.walkLegDataTitle}>From</Text>
            <Text style={styles.walkLegDataInfo}>Bus Station A</Text>
          </View>
          <View style={styles.walkLegDataContainer}> 
            <Text style={styles.walkLegDataTitle}>To</Text>
            <Text style={styles.walkLegDataInfo}>Bus Station B</Text>
          </View>
          <View style={styles.walkLegDataContainer}> 
            <Text style={styles.walkLegDataTitle}>Distance</Text>
            <Text style={styles.walkLegDataInfo}>{(bus.distance | 0) + ' meters'}</Text>
          </View>
          <View style={styles.walkLegDataContainer}> 
            <Text style={styles.walkLegDataTitle}>Duration</Text>
            <Text style={styles.walkLegDataInfo}>{Math.round((bus.duration | 0)/60) + ' minutes'}</Text>
          </View>
        </View>
      </View>
    )
  }

  render () {
    const {isVisible, close, trip} = this.props
    const {choosenRoute} = this.state
    
    if(!trip.plan) return null

    const itinerary = trip.plan.itineraries[choosenRoute]

    return (
      <View>
        <Modal
          visible={isVisible}
          animationType='slide'
          onRequestClose={close}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Trip Details</Text>
              <Icon size={Metrics.iconSize} color={Colors.background} name='clear' onPress={close}/>
            </View>
            <ScrollView style={styles.detailsContainer}>

              {/* Directions From => To */}
              <View style={styles.directionsContainer}>
                <View style={styles.singleDirectionContainer}>
                  <Text style={styles.fromToText}>From</Text>
                  <Text style={styles.directionsText}>My Current Location</Text>
                </View>
                <Icon size={Metrics.iconSize} color={Colors.coal} name='arrow-forward' onPress={close}/>
                <View style={styles.singleDirectionContainer}>
                  <Text style={styles.fromToText}>To</Text>
                  <Text style={styles.directionsText}>Khalda</Text>
                </View>
              </View>

              {/* Tabs: Route 1   Route 2   Route 3 */}
              <View style={styles.tabsContainer}>
                <TouchableOpacity style={styles.routeButton} onPress={() => this.setState({ choosenRoute: 0 })}>
                  <Text style={[styles.routeButtonText, choosenRoute === 0? {color: Colors.blueAccent}: {}]}>Route 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeButton} onPress={() => this.setState({ choosenRoute: 1 })}>
                  <Text style={[styles.routeButtonText, choosenRoute === 1? {color: Colors.blueAccent}: {}]}>Route 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeButton} onPress={() => this.setState({ choosenRoute: 2 })}>
                  <Text style={[styles.routeButtonText, choosenRoute === 2? {color: Colors.blueAccent}: {}]}>Route 3</Text>
                </TouchableOpacity>
              </View>

              {/* {console.log(this.renderItinerary(itinerary))} */}
              {this.renderItinerary(itinerary)}

            </ScrollView>
          </View>
        </Modal>
      </View>
    )
  }
}
