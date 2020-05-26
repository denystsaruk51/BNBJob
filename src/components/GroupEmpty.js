import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/groupEmpty.style';

import I18n from '../locale-data/i18n';

class GroupEmpty extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (        
      <View>
        <View style={styles.backImg}>
          <Image source={require('../image/img_friends_back1.png')} />
        </View>
        <View style={styles.descTextView}>
          <Text style={styles.descText}>{I18n.t('You do not have group participate')}</Text>
        </View>        
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <View style={styles.buttonRowRed}>
              <Text style={styles.longText}>{I18n.t('Search')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(GroupEmpty);