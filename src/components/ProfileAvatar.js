import React, { Component } from 'react';

import {
  View,
  Image,
} from 'react-native';

import {styles} from '../styles/ProfileAvatar.style';

export default class ProfileAvatar extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.profileAvatarContainer}>
        <Image style={styles.avatarImg} source={require('../image/sample_offer_2.png')} />
        <Image style={styles.stateIcon} source={require('../image/ic_profile_plus.png')} />
      </View>
    );
  }
}
