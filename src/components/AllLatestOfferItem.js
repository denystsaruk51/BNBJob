import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../styles/allLatestOfferItem.style';
import UserAvatar from './UserAvatar';

export default class AllLatestOfferItem extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }

  render () {
    return (
      <View style={styles.offerItemContainer}>
        <Image style={styles.mainImg} source={require('../image/sample_offer_3.png')} />
        <Image style={styles.bgTextImg} source={require('../image/bg_gradient.png')} />
        <Text style={styles.nameText} numberOfLines={1}>Joseph, sevenur</Text>
        <Text style={styles.descText} numberOfLines={1}>Architecture connectivity</Text>
        <View style={styles.avatarView}>
          <UserAvatar/>
        </View>
        <Image style={styles.loveImg} source={require('../image/ic_love.png')} />
        <View style={styles.btnGroupView}>
          <View style={styles.messageBtnView}>
            <TouchableOpacity>
              <Image style={styles.messageIcon} source={require('../image/ic_checked.png')}/>
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
