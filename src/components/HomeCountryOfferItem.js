import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
} from 'react-native';

import {styles} from '../styles/HomeCountryOfferItem.style';
import UserAvatar from './UserAvatar';

export default class HomeCountryOfferItem extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.homeCountryItemContainer}>
        <Image style={styles.mainImg} source={require('../image/sample_offer_country.png')} />
        <Image style={styles.bgTextImg} source={require('../image/bg_gradient.png')} />
        <Text style={styles.countryText}>England</Text>
        <Text style={styles.addressText}>Plus de 15 258 offres</Text>
      </View>
    );
  }
}
