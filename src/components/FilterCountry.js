import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity ,
} from 'react-native';

import {styles} from '../styles/FilterCountry.style';
import I18n from '../locale-data/i18n';

export default class FilterCountry extends Component {
  constructor(props) {
    super(props);
  }

  goBack() {

  }
  
  render() {
    return (
      
      <View style={styles.roundRect}>
        <Text style={styles.titleText}>{I18n.t('Country')}</Text>

        <Text style={styles.locationText}>{I18n.t('Metropolitan France')}</Text>

        <View style={styles.backImgView}>
          <TouchableOpacity onPress={this.goBack}>
              <Image style={styles.backImgButton} source={require('../image/ic_forward.png')} />
          </TouchableOpacity>
        </View>
        
      </View>
    )
  }
}
