import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import {styles} from '../styles/CandidateInviteListItem.style';
import UserAvatar from './UserAvatar';

import { SetInviteAccept, SetInviteDecline } from '../services/Common';
import Config from '../services/Config';

export default class CandidateInviteListItem extends Component {
  constructor(props) {
    super(props);

    this.handleAccept=this.handleAccept.bind(this);
    this.handleDecline=this.handleDecline.bind(this);
  }
  componentDidMount() {
    
  }
  async handleAccept() {
    const {data, index } = this.props;
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    this.props.setLoading(true);
    SetInviteAccept(TOKEN, data.user)
    .then((res) => {
      if(res.success === true) {
        this.props.setLoading(false);
        this.props.refresh();
      } else {
        this.props.setLoading(false);
        alert(JSON.stringify(res.error));
      }
    })
    .catch((reason) => {
      this.props.setLoading(false);
      alert(reason);
    });
  }
  async handleDecline() {
    const {data, index } = this.props;
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    this.props.setLoading(true);

    SetInviteDecline(TOKEN, data.user)
    .then((res) => {
      if(res.success === true) {
        this.props.setLoading(false);
        this.props.refresh();
      } else {
        this.props.setLoading(false);
        alert(JSON.stringify(res.error));
      }
    })
    .catch((reason) => {
      this.props.setLoading(false);
      alert(reason);
    });
  }

  render () {
    const {data, index } = this.props;

    return (
      <View style={styles.inviteItemContainer}>
        <Image style={styles.mainImg} source={require('../image/sample_offer_2.png')} />
        <Image style={styles.bgTextImg} source={require('../image/bg_gradient.png')} />
        {/* <Text style={styles.nameText} numberOfLines={1}>{data.user.first_name + ' ' + data.user.last_name}</Text> */}
        <Text style={styles.descText} numberOfLines={1}>{data.friend.first_name + ' ' + data.friend.last_name}</Text>
        <View style={styles.avatarView}>
          <UserAvatar/>
        </View>
        <View style={styles.btnGroupView}>
          <TouchableOpacity style={styles.messageBtnView} onPress={this.handleAccept}>
            <Image style={styles.messageIcon} source={require('../image/ic_checked.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelBtnView}  onPress={this.handleDecline}>
              <Image style={styles.messageIcon} source={require('../image/ic_cancel_red.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
