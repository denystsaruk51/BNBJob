import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../styles/LatestOfferItem.style';
import I18n from '../locale-data/i18n';

export default class LatestOfferItem extends Component {
  constructor(props) {
    super(props);
    this.onClickItem = this.onClickItem.bind(this);
  }
  onClickItem(){
    this.props.onClickItem();
  }
  render () {
    return (
      <View style={styles.latestOfferItemContainer}>
        <TouchableOpacity onPress={this.onClickItem}>
          <Image style={styles.mainImg} source={require('../image/sample_offer.png')} />
          <Image style={styles.bgTextImg} source={require('../image/bg_gradient.png')} />
          <Text style={styles.nameText} numberOfLines={1}>Architecture Connectivity</Text>
          <View style={styles.responseView}>
            <Text style={styles.responseCount}>112</Text>
            <Text style={styles.responseLabel}>{I18n.t('responses')}</Text>
          </View>
          <View style={styles.infoView}>
            <Text style={styles.info}>ll y a 2mm</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
