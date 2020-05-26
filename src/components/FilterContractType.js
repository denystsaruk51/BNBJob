import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity ,
} from 'react-native';

import {styles} from '../styles/FilterContractType.style';
import I18n from '../locale-data/i18n';

export default class FilterContractType extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.roundRect}>
        <Text style={styles.titleText}>{I18n.t('Type of Contract')}</Text>

        <View style={styles.row}>
          <TouchableOpacity>
            <View style={styles.typeTextBorder}>
              <Text style={styles.typeText}>{I18n.t('Full-time')}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.typeTextBorder}>
              <Text style={styles.typeText}>{I18n.t('Part-time')}</Text>
            </View>
          </TouchableOpacity>
          
        </View>
        
      </View>
    )
  }
}
