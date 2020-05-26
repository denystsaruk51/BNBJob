import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
} from 'react-native';

import {styles} from '../styles/LiveOfferItem.style';
import UserAvatar from './UserAvatar';
import I18n from '../locale-data/i18n';

export default class LiveOfferItem extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }

  render () {
    return (
      <View style={styles.liveOfferItemContainer}>
        <Image style={styles.mainImg} source={require('../image/sample_live_offer.png')} />
        <Image style={styles.bgTextImg} source={require('../image/bg_gradient.png')} />
        <Text style={styles.priceText} numberOfLines={1}>CDD - 1700€/ M</Text>
        <Text style={styles.nameText} numberOfLines={1}>{I18n.t('Commercial')}</Text>
        <View style={styles.avatarView}>
          <UserAvatar/>
        </View>
      </View>
    );
  }
}
