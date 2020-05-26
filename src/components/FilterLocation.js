import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity ,
} from 'react-native';

import {styles} from '../styles/FilterLocation.style';
import I18n from '../locale-data/i18n';

export default class FilterLocation extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.roundRect}>

        <View style={styles.topRoundRect}>
          <Text style={styles.titleText}>{I18n.t('Location')}</Text>

          <Text style={styles.locationText}>{I18n.t('Merignac Aquitaine France')}</Text>

          <View style={styles.backImgView}>
            <TouchableOpacity onPress={this.goBack}>
                <Image style={styles.backImgButton} source={require('../image/ic_forward.png')} />
            </TouchableOpacity>
          </View>
        </View>
                
        <View style={styles.bottomRoundRect}>

          <View style={styles.wrapper}>

            <View style={styles.row}>
              <TouchableOpacity style={styles.typeTextBlueBack}>
                <View>
                  <Text style={styles.typeTextWhite}>{I18n.t('Around')} 15Km</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.typeTextBorder}>
                <View>
                  <Text style={styles.typeText}>30Km</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.typeTextBorder}>
                <View>
                  <Text style={styles.typeText}>50Km</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity style={styles.typeTextBorder}>
                <View>
                  <Text style={styles.typeText}>+100Km</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.typeTextBorder}>
                <View>
                  <Text style={styles.typeText}>{I18n.t('Gironde')}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.typeTextBorder}>
                <View>
                  <Text style={styles.typeText}>{I18n.t('Aquitaine')}</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
          
        </View>
        
        
      </View>
    )
  }
}
