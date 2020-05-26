import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../styles/HomeMapOfferItem.style';
import I18n from '../locale-data/i18n';
import { Actions } from 'react-native-router-flux';

export default class HomeMapOfferItem extends Component {
  constructor(props) {
    super(props);
  }

  gotoCandidateOfferExpiredPopup() {
    Actions.candidateOfferExpiredPopup({text: 'Candidate Offer Expired Popup'});
  }
  
  render () {
    return (
      <View style={styles.mapOfferItemContainer}>
        <Image style={styles.mainImg} source={require('../image/sample_around_offer.png')} />
        <Image style={styles.bgTextImg} source={require('../image/bg_gradient.png')} />
        <Text style={styles.nameText}>Ilustrator</Text>
        <Text style={styles.priceText}>CDD - 3400€/ M</Text>
        <Text style={styles.addressText}>Bordeaux</Text>
        <Image style={styles.loveImg} source={require('../image/ic_love.png')} />
        <View style={styles.greyButton}>
          <TouchableOpacity onPress={this.gotoCandidateOfferExpiredPopup}>
            <View>
              <Text style={styles.btnText}>{I18n.t('Offer expired')}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.info}>ll y a 2m</Text>
        </View>
      </View>
    );
  }
}
