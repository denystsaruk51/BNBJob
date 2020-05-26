import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import {styles} from '../styles/CandidateFriendItem.style';
import I18n from '../locale-data/i18n';
import { SetUserFriend, SetUserUnFriend } from '../services/Common';
import Config from '../services/Config';

export default class CandidateFriendItem extends Component {
  constructor(props) {
    super(props);
    this.friends=this.friends.bind(this);
    this.unFriends=this.unFriends.bind(this);
    this.handleFriends=this.handleFriends.bind(this);
  }

  handleFriends() {
    const { userInfo, index } = this.props;
    const isFriend = userInfo.is_friend;
    if(isFriend){
      this.unFriends();
    } else {
      this.friends();
    }
  }
  async friends(){
    const { userInfo, index } = this.props;
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    this.props.setLoading(true);
    SetUserFriend(TOKEN, userInfo._id)
    .then((res) => {
      if(res.success === true) {
        this.props.setLoading(false);
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
  async unFriends(){
    const { userInfo, index } = this.props;
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    this.props.setLoading(true);
    SetUserUnFriend(TOKEN, userInfo._id)
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
    const { userInfo, index } = this.props;
    const data = userInfo.friends;
    const friendList = Object.keys(data).map(_id => ({
      ...data[_id],
      id: _id,
    }));
    const isFriend = userInfo.is_friend;
    
    let friendsText;

    if(isFriend){
      friendsText = 'UnFriends';
    } else {
      friendsText = 'Friends';
    }

    return (
      <View style={styles.friendContainer}>
        <View>
          <Image style={styles.friendAvatar} source={require('../image/sample_close_candidate.png')} />
        </View>

        <View style={styles.friendInfo}>
          <Text style={styles.nameText}>{userInfo.first_name + ' ' + userInfo.last_name}</Text>
          <Text style={styles.descText}>{friendList.length} amis en commun</Text>
        </View>
        
        
        <View style={styles.buttonViewBlue}>
          <TouchableOpacity onPress={this.handleFriends}>
            <Text style={styles.buttonTextBlue}>{I18n.t(friendsText)}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomLine}></View>
      </View>
    );
  }
}
