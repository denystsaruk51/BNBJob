import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
} from 'react-native';

import {styles} from '../styles/HomeResearchItem.style';
import UserAvatar from './UserAvatar';

export default class HomeResearchItem extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.homeResearchItemContainer}>
        <Image style={styles.mainImg} source={require('../image/sample_around_offer.png')} />
        <Image style={styles.bgTextImg} source={require('../image/bg_gradient.png')} />
        <Text style={styles.nameText}>Ilustrator</Text>
        <Text style={styles.addressText}>Bordeaux</Text>
        <Image style={styles.loveImg} source={require('../image/ic_love.png')} />
        <Image style={styles.icPlane} source={require('../image/ic_red_plane.png')} />
        <View style={styles.infoView}>
          <Text style={styles.info}>ll y a 22j</Text>
        </View>
        <View style={styles.avatarView}>
          <UserAvatar/>
        </View>
        
      </View>
    );
  }
}
