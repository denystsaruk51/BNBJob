import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../styles/knowThemItem.style';
import UserAvatar from './UserAvatar';

export default class KnowThemItem extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }

  render () {
    return (
      <View style={styles.knowThemItemContainer}>
        <Image style={styles.mainImg} source={require('../image/sample_offer_2.png')} />
        <Image style={styles.bgTextImg} source={require('../image/bg_gradient.png')} />
        <Text style={styles.nameText} numberOfLines={1}>Emmanuel Architecte</Text>
        <View style={styles.avatarView}>
          <UserAvatar/>
        </View>
        <View style={styles.btnGroupView}>
          <View style={styles.messageBtnView}>
            <TouchableOpacity>
              <Image style={styles.messageIcon} source={require('../image/ic_add_friend_blue.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.cancelBtnView}>
            <TouchableOpacity>
              <Image style={styles.messageIcon} source={require('../image/ic_cancel_red.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
