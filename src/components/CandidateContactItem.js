import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../styles/CandidateContactItem.style';
import UserAvatar from './UserAvatar';

export default class CandidateContactItem extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.contactItemContainer}>
        <TouchableOpacity onPress={this.onClickItem}>
          <Image style={styles.mainImg} source={require('../image/sample_message_contact_item.png')} />
          <Image style={styles.bgTextImg} source={require('../image/bg_gradient.png')} />
          <Text style={styles.nameText}>Amandine</Text>
          <View style={styles.avatarView}>
            <UserAvatar/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
