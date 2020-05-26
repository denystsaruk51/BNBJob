import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../styles/CandidateCreateContactItem.style';
import I18n from '../locale-data/i18n';

export default class CandidateCreateContactItem extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.candidateCreateItemContainer}>
        <TouchableOpacity>
          <Image style={styles.mainImg} source={require('../image/ic_message_create_contact.png')} />
          <Text style={styles.nameText} numberOfLines={1}>{I18n.t('My Story')}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
