import React, { Component } from 'react';

import {
  View,
  Image,
} from 'react-native';

import {styles} from '../styles/ContactAvatar.style';

export default class ContactAvatar extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.profileAvatarContainer}>
        <Image style={styles.avatarImg} source={require('../image/sample_offer_2.png')} />
        <Image style={styles.stateIcon} source={require('../image/ic_user_net_state_online.png')} />
      </View>
    );
  }
}
