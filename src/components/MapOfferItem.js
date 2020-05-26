import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
} from 'react-native';

import {styles} from '../styles/MapOfferItem.style';
import I18n from '../locale-data/i18n';

export default class MapOfferItem extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.mapOfferItemContainer}>
        <Image style={styles.mainImg} source={require('../image/img_offer.png')} />
        <Image style={styles.bgTextImg} source={require('../image/bg_gradient.png')} />
        <Text style={styles.nameText}>Ilustrator</Text>
        <Text style={styles.priceText}>CDD - 3400€/ M</Text>
        <Text style={styles.addressText}>Bordeaux</Text>
        <Image style={styles.icPlane} source={require('../image/ic_red_plane.png')} />
      </View>
    );
  }
}
