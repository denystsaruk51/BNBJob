import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../styles/closeCandidateItem.style';
import UserAvatar from './UserAvatar';

export default class CloseCandidateItem extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }

  render () {
    return (
      <View style={styles.closeCandidateItemContainer}>
        <Image style={styles.mainImg} source={require('../image/sample_offer_2.png')} />
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
              <Image style={styles.messageIcon} source={require('../image/ic_message_blue.png')}/>
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
