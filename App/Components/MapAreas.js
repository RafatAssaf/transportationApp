import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TextInput } from 'react-native'
import styles from './Styles/MapAreasStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Colors} from '../Themes'
import AreaItem from './AreaItem'

export default class MapAreas extends Component {
  // // Prop type warnings
  static propTypes = {
    areas: PropTypes.array,
    close: PropTypes.func
  }
  //
  // // Defaults for props
  static defaultProps = {
    areas: [],
    close: () => {}
  }

  //Recursion magic baby!
  splitIntoTwos = (arr) => {
    return arr.length <= 2 ? [arr] : [arr.slice(0, 2)].concat(this.splitIntoTwos(arr.slice(2)))
  }

  renderRow = (row, i) => {
    const { set } = this.props
    return (
      <View style={styles.row} key={i}>
        {row.map((area, i) => <AreaItem
          key={i}
          name={area.name? area.name: 'Name missing'}
          description={area.description? area.description: 'No description provided'}
          onPress={ () => set({
            lat: parseFloat(area.center.latitude),
            lon: parseFloat(area.center.longitude),
            name: area.name,
            description: area.description
          }) }
        />)}
      </View>
    )
  }

  render () {
    const {areas, close, fullScreen, onChangeText} = this.props

    return (
      <View style={styles.container}>
        {!fullScreen 
        ? <View style={styles.header}>
          <Text style={styles.headerText}>Destinations</Text>
          <Icon name={'clear'} size={22} color={Colors.blueAccent} onPress={close}/>
        </View>
        : 
        <View style={styles.inputContainer}>
          <Icon name={'search'} size={22} color={Colors.blueAccent} onPress={close}/>
          <TextInput
            style={styles.input}
            placeholder='Search Areas.. Try "Khalda"'
            onChangeText={text => onChangeText(text)}
          />
        </View>}
        <ScrollView style={styles.container}>
          {this.splitIntoTwos(areas.slice(0, 20)).map((row, i) => this.renderRow(row, i))}
        </ScrollView>
      </View>
    )
  }
}