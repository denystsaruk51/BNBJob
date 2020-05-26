import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity ,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/HomeTabBar.style';
import I18n from '../locale-data/i18n';

export default class HomeTabBar extends Component {
  constructor(props) {
    super(props);

    this.onPressHome = this.onPressHome.bind(this);
    this.onPressFriends = this.onPressFriends.bind(this);
    this.onPressGroup = this.onPressGroup.bind(this);
    this.onPressProfile = this.onPressProfile.bind(this);
  }
  componentDidMount() {
    const { selectedTab } = this.props;
  }

  onPressHome(){
    if(this.props.onPressHome)
      this.props.onPressHome();
  }
  onPressFriends(){
    if(this.props.onPressFriends)
      this.props.onPressFriends();
  }
  onPressGroup(){
    if(this.props.onPressVideo)
      this.props.onPressVideo();
  }
  onPressProfile(){
    if(this.props.onPressProfile)
      this.props.onPressProfile();
  }

  render () {
    const { selectedTab } = this.props;
    let homeImg, friendsImg, videoImg, profileImg;
    if(selectedTab === 'Home'){
      homeImg = require('../image/ic_main_tab_home.png');
      friendsImg = require('../image/ic_main_tab_friends.png');
      videoImg = require('../image/ic_main_tab_group.png');
      profileImg = require('../image/ic_main_tab_profile.png');
    } else if(selectedTab === 'Friends'){
      homeImg = require('../image/ic_main_tab_home_disable.png');
      friendsImg = require('../image/ic_main_tab_friends_active.png');
      videoImg = require('../image/ic_main_tab_group.png');
      profileImg = require('../image/ic_main_tab_profile.png');
    } else if(selectedTab === 'Video'){
      homeImg = require('../image/ic_main_tab_home_disable.png');
      friendsImg = require('../image/ic_main_tab_friends.png');
      videoImg = require('../image/ic_main_tab_group_active.png');
      profileImg = require('../image/ic_main_tab_profile.png');
    } else {
      homeImg = require('../image/ic_main_tab_home_disable.png');
      friendsImg = require('../image/ic_main_tab_friends.png');
      videoImg = require('../image/ic_main_tab_group.png');
      profileImg = require('../image/ic_main_tab_profile_active.png');
    }
    
    return (
      <View style={styles.tabBarContainer}>
        <View style={styles.tabItemView}>
        <TouchableOpacity onPress={this.onPressHome}>
          <Image style={styles.searchIcon} source={homeImg} />
        </TouchableOpacity>
        </View>
        <View style={styles.tabItemView}>
          <TouchableOpacity onPress={this.onPressFriends}>
            <Image style={styles.searchIcon} source={friendsImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.tabItemView}>
          <TouchableOpacity onPress={this.onPressGroup}>
            <Image style={styles.searchIcon} source={videoImg} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.tabItemView}>
          <TouchableOpacity onPress={this.onPressProfile}>
            <Image style={styles.searchIcon} source={profileImg} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
