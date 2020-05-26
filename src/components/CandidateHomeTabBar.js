import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity ,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/CandidateHomeTabBar.style';
import I18n from '../locale-data/i18n';

export default class CandidateHomeTabBar extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { selectedTab } = this.props;
  }

  gotoSideProfile() {
    Actions.candidateSideProfile({text: 'candidateSideProfile'});
  }

  render () {
    return (
      <View style={styles.tabBarContainer}>
        <View style={styles.tabItemView}>
          <Image style={styles.searchIcon} source={require('../image/ic_main_tab_home_disable.png')} />
        </View>
        <View style={styles.tabItemView}>
          <Image style={styles.searchIcon} source={require('../image/ic_main_tab_friends.png')} />
        </View>
        <View style={styles.tabItemView}>
          <Image style={styles.searchIcon} source={require('../image/ic_main_tab_group.png')} />
        </View>
        
        <View style={styles.tabItemView}>
          <TouchableOpacity onPress={this.gotoSideProfile}>
          <Image style={styles.searchIcon} source={require('../image/ic_main_tab_profile_active.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
