import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/PopupStyle'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Colors, Metrics} from '../Themes'
import {t} from '../I18n'

export default class Popup extends Component {
  // // Prop type warnings
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    isVisible: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    options: PropTypes.array
  }
  // // Defaults for props
  static defaultProps = {
    title: '',
    subtitle: '',
    isVisible: false,
    close: () => {},
    options: []
  }

  render () {
    const {isVisible, close, options, title, subtitle, component} = this.props
    return (
      <View>
        <Modal
          visible={isVisible}
          animationType='fade'
          onRequestClose={close}
          transparent
        >
          <View style={styles.container}>
            <View style={styles.optionsContainer}>
            
              <TouchableOpacity style={styles.closeIcon} onPress={close}>
                <Icon size={Metrics.iconSize} name='close'/>
              </TouchableOpacity>

              {title ? <Text style={styles.title}>{title}</Text> : null}
              {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
              {component ? component : null}

              {options.map((option, i) => <TouchableOpacity 
                key={i}
                style={styles.option}
                onPress={option.onPress}
              >
                <Text>{option.title}</Text>
              </TouchableOpacity>)}

              <View style={styles.footer}>
                <Image
                  source={require('../Images/govServesMe.png')}
                  style={styles.govImage}
                  resizeMode='contain'
                  resizeMethod='resize'
                />
              </View>

            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
