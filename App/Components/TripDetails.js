import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Modal, ScrollView, TouchableOpacity } from 'react-native'
import styles from './Styles/TripDetailsStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Metrics, Colors} from '../Themes'
import {t} from '../I18n'

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
    return itinerary.legs.map((leg, i) => {
      if(leg.mode === 'WALK') {
        return this.renderWalkLeg(leg)
      } else if(leg.mode === 'BUS') {
        return this.renderBusLeg(leg)
      } else {
        return null
      }
    })
  }

  renderWalkLeg = (walk) => {
    return (
      <View style={styles.walkLegContainer}>
        <View style={styles.walkLegHeader}>
          <Icon size={Metrics.iconSize} color={Colors.coal} name='directions-walk'/>
          <Text style={styles.detailsTitle}>{t('details.walk')}</Text>
        </View>
        <View style={styles.walkLegDetailsContainer}>
          <View style={styles.walkLegDataContainer}> 
            <Text style={styles.walkLegDataTitle}>{t('details.distance')}</Text>
            <Text style={styles.walkLegDataInfo}>{(walk.distance | 0) + ' meters'}</Text>
          </View>
          <View style={styles.walkLegDataContainer}> 
            <Text style={styles.walkLegDataTitle}>{t('details.duration')}</Text>
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
          <Icon size={Metrics.iconSize} color={Colors.coal} name='directions-bus'/>
          <Text style={styles.detailsTitle}>{bus.route}</Text>
        </View>
        <View style={styles.walkLegDetailsContainer}>
          <View style={styles.walkLegDataContainer}> 
            <Text style={styles.walkLegDataTitle}>{t('details.from')}</Text>
            <Text style={styles.walkLegDataInfo}>{bus.from.name}</Text>
          </View>
          <View style={styles.walkLegDataContainer}> 
            <Text style={styles.walkLegDataTitle}>{t('details.to')}</Text>
            <Text style={styles.walkLegDataInfo}>{bus.to.name}</Text>
          </View>
          <View style={styles.walkLegDataContainer}> 
            <Text style={styles.walkLegDataTitle}>{t('details.distance')}</Text>
            <Text style={styles.walkLegDataInfo}>{(bus.distance | 0) + ' meters'}</Text>
          </View>
          <View style={styles.walkLegDataContainer}> 
            <Text style={styles.walkLegDataTitle}>{t('details.duration')}</Text>
            <Text style={styles.walkLegDataInfo}>{Math.round((bus.duration | 0)/60) + ' minutes'}</Text>
          </View>
        </View>
      </View>
    )
  }

  render () {
    const {isVisible, close, trip, fromName, toName} = this.props
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
              <Text style={styles.headerText}>{t('details.title')}</Text>
              <Icon size={Metrics.iconSize} color={Colors.background} name='clear' onPress={close}/>
            </View>
            <ScrollView style={styles.detailsContainer}>

              {/* Directions From => To */}
              <View style={styles.directionsContainer}>
                <View style={styles.singleDirectionContainer}>
                  <Text style={styles.fromToText}>{t('details.from')}</Text>
                  <Text style={styles.directionsText}>{fromName}</Text>
                </View>
                <Icon size={Metrics.iconSize} color={Colors.coal} name='arrow-forward' onPress={close}/>
                <View style={styles.singleDirectionContainer}>
                  <Text style={styles.fromToText}>{t('details.to')}</Text>
                  <Text style={styles.directionsText}>{toName}</Text>
                </View>
              </View>

              {/* Tabs: Route 1   Route 2   Route 3 */}
              <View style={styles.tabsContainer}>
                <TouchableOpacity style={styles.routeButton} onPress={() => this.setState({ choosenRoute: 0 })}>
                  <Text style={[styles.routeButtonText, choosenRoute === 0? {color: Colors.blueAccent}: {}]}>{t('details.route1')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeButton} onPress={() => this.setState({ choosenRoute: 1 })}>
                  <Text style={[styles.routeButtonText, choosenRoute === 1? {color: Colors.blueAccent}: {}]}>{t('details.route2')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeButton} onPress={() => this.setState({ choosenRoute: 2 })}>
                  <Text style={[styles.routeButtonText, choosenRoute === 2? {color: Colors.blueAccent}: {}]}>{t('details.route3')}</Text>
                </TouchableOpacity>
              </View>

              {this.renderItinerary(itinerary)}

            </ScrollView>
          </View>
        </Modal>
      </View>
    )
  }
}
