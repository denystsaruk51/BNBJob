import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../styles/MapOfferListItem.style';

import I18n from '../locale-data/i18n';
import UserAvatar from './UserAvatar';

export default class MapOfferListItem extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.mapItemContainer}>
      <View style={styles.mapOfferItemContainer}>
        <Image style={styles.mainImg} source={require('../image/img_offer.png')} />
        <Image style={styles.bgTextImg} source={require('../image/bg_gradient.png')} />
        <Text style={styles.nameText}>Ilustrator</Text>
        <Text style={styles.priceText}>CDD - 3400€/ M</Text>
        <Text style={styles.addressText}>Bordeaux</Text>
        <Image style={styles.loveImg} source={require('../image/ic_love.png')} />

          <View style={styles.responseView}>
            <TouchableOpacity>
              <View>
              <Text style={styles.responseCount}>{I18n.t('Apply')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        <View style={styles.infoView}>
          <Text style={styles.info}>ll y a 2m</Text>
        </View>

        <View style={styles.avatarView}>
          <UserAvatar/>
        </View>
      </View>
      </View>
    );
  }
}
