import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  AppRegistry,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../../styles/candidateHomePopup.style';
import StatusBar from '../../components/StatusBar';
import I18n from '../../locale-data/i18n';
import HomeSearchBar from '../../components/HomeSearchBar';
import LiveOffers from '../../components/LiveOffers';

class CandidateHomePopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab : 'home',
    }
  }
  static propTypes = {
    routes: PropTypes.object,
  };

  static navigationOptions = {
    header: null ,
  };

  gotoCandidateHome() {
    Actions.reset("candidateMain");
  }

  render () {
    return (
      <View style={styles.container}>
        
        <View style={styles.container} opacity={0.6}>
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          <View style={styles.scrollViewStyle}>
            <Image resizeMode='contain' style={styles.appLogoImg} source={require('../../image/img_app_title.png')} />
            <HomeSearchBar/>
            <ScrollView showsVerticalScrollIndicator={true}>
              
              <View style={styles.subTitleView}>
                <Text style={styles.subTitle}>{I18n.t('Live offers')}</Text>
              </View>

              <LiveOffers/>
            </ScrollView>
          </View>

          
        </View>

        <TouchableOpacity onPress={this.gotoCandidateHome}>
          <View>
            <Image style={styles.closeImgButton} source={require('../../image/ic_close_white.png')} />
          </View>
        </TouchableOpacity>
        <View style={styles.popupContainer}>
          <Image resizeMode='contain' style={styles.popupImg} source={require('../../image/img_completed_profile.png')} />
          <Text style={styles.redText}>{I18n.t('Congratulations')}</Text>
          <Text style={styles.descText}>{I18n.t('You have just created your profile')}</Text>

          <View style={styles.redButtonView}>
            <TouchableOpacity onPress={this.gotoCandidateHome}>
              <View>
                <Text style={styles.button}>{I18n.t('Continue')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(CandidateHomePopup);

AppRegistry.registerComponent('CandidateHomePopup',() => CandidateHomePopup);