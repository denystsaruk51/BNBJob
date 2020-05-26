import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../../styles/candidateFriendsHome.style';

import I18n from '../../locale-data/i18n';

class CandidateFriendsHome extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null ,
  };

  gotoCandidateFriends() {
    Actions.candidateFriends({text: 'candidateFriends'});
  }
  render () {
    return (      
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>{I18n.t('Friends')}</Text>
          </View>

          <View style={styles.gap100} />
          
          <View style={styles.backImg}>
            <Image source={require('../../image/img_friends_back1.png')} />
          </View>

          <View style={styles.descTextView}>
            <Text style={styles.descText}>{I18n.t('You do not have any friends yet')}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.gotoCandidateFriends}>
              <View style={styles.buttonRowRed}>
                <Text style={styles.buttonTextWhite}>{I18n.t('Search')}</Text>
              </View>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(CandidateFriendsHome);