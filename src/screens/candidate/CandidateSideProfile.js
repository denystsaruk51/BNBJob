import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  AppRegistry,
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../../styles/candidateSideProfile.style';
import StatusBar from '../../components/StatusBar';
import I18n from '../../locale-data/i18n';
import ProfileAvatar from '../../components/ProfileAvatar';

import * as RNIap from 'react-native-iap';
import * as Consts from '../../services/Const';
import Config from '../../services/Config';

class CandidateSideProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      notificationUnreadCount : 0,
      memberShip: '', // '', 'Premium', 'VIP', 'Gold'
    }

    this.goBack=this.goBack.bind(this);
    this.renderNotificationBadge=this.renderNotificationBadge.bind(this);
    this.renderMembershipButton=this.renderMembershipButton.bind(this);
    this.gotoCandidateFriendsHome=this.gotoCandidateFriendsHome.bind(this);
  }
  static navigationOptions = {
    header: null ,
  };
  async componentDidMount() {
    const userFirstName = await AsyncStorage.getItem(Config.STORAGE_FIRSTNAME_KEY);
    const userLastName = await AsyncStorage.getItem(Config.STORAGE_LASTNAME_KEY);
    this.setState({firstName: userFirstName, lastName: userLastName});
    // try {
    //   const subscriptions = await RNIap.getSubscriptions(Consts.IAPItemSkus);
    //   const history = await RNIap.getPurchaseHistory();
    //   this.setState({ subscriptions });
    // } catch(err) {
    //   console.warn(err); // standardized err.code and err.message available
    // }
  }
  gotoCandidateFriendsHome() {
    // Actions.candidateFriendsHome({text: 'candidateFriendsHome'});
    if(this.props.onPressFriends){
      this.props.onPressFriends();
    }
  }

  gotoCandidateGroupHome() {
    Actions.candidateGroupHome({text: 'candidateGroupHome'});
  }

  gotoCandidateMessageHome() {
    Actions.candidateMessageHome({text: 'candidateMessageHome'});
  }

  gotoProfilePremium() {
    Actions.candidatePremium({text: 'candidatePremium'});
  }

  goBack(){
    if(this.props.onCloseProfile)
      this.props.onCloseProfile();
  }

  renderNotificationBadge() {
    const {notificationUnreadCount} = this.state;
    if(notificationUnreadCount > 0) {
      return (
        <View style={styles.notificationView}>
          <Text style={styles.notificationNum}>+{notificationUnreadCount}</Text>
        </View>
      );
    } else {
      return (
        <View></View>
      );
    }
  }
  renderMembershipButton() {
    const {memberShip} = this.state;
    if(memberShip === 'Premium') {
      return (
        <View style={styles.listView}>
          <TouchableOpacity onPressOut={this.gotoProfilePremium}>
            <View style={styles.premiumBack}>
              <Image style={styles.listImg} source={require('../../image/ic_premiem_package.png')} />
              <Text style={styles.premiumTitle}>{I18n.t('Premium Pack activated')}</Text>
            </View>
          </TouchableOpacity>
            
          <View style={styles.alignRight}>
            <TouchableOpacity onPressIn={this.goBack}>
              <View>
                <Image style={styles.closeImgButton} source={require('../../image/ic_close_white.png')} />
              </View>
            </TouchableOpacity>
          </View>  
        </View>
      );
    } else if(memberShip === 'VIP') {

    } else if(memberShip === 'Gold') {
      
    } else {
      return (
        <View style={styles.listView}>
          <TouchableOpacity onPressOut={this.gotoProfilePremium}>
            <View style={styles.membershipBack}>
              <Image style={styles.listImg} source={require('../../image/ic_premium.png')} />
              <Text style={styles.premiumTitle}>{I18n.t('Be Premium')}</Text>
            </View>
          </TouchableOpacity>
            
          <View style={styles.alignRight}>
            <TouchableOpacity onPressIn={this.goBack}>
              <View>
                <Image style={styles.closeImgButton} source={require('../../image/ic_close_white.png')} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  render () {
    const notificationBadge = this.renderNotificationBadge();
    const membershipButton = this.renderMembershipButton();
    const { firstName, lastName } =this.state;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <View style={styles.popupContainer}>
          <View style={styles.content}>

            <View style={styles.profileView}>
              <View style={styles.avatarView}>
                <ProfileAvatar />
              </View>
              <View style={styles.subTitleView}>
                <Text style={styles.title}>{I18n.t('Hi')}</Text>
                <Text style={styles.subTitle}>{firstName} {lastName}</Text>
              </View>
            </View>

            <View style={styles.statusView}>
                <Text style={styles.label}>{I18n.t('Visibility')} :</Text>
                <Text style={styles.levelText}>{I18n.t('Very Low')}</Text>
                <Image style={styles.editImg} source={require('../../image/ic_profile_edit.png')} />
                <Text style={styles.profileStatusText}>{I18n.t('Complete')}</Text>
            </View>

            <View style={styles.progressView}>
              <View style={styles.progressBar}>
                <View style={styles.progressBarChargeLow}>
                </View>
              </View>
              <Text style={styles.progressText}>15%</Text>
            </View>

            <TouchableOpacity>
            <View style={styles.listView}>
              <Image style={styles.listImg} source={require('../../image/ic_my_profile.png')} />
              <Text style={styles.listTitle}>{I18n.t('My profile')}</Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <View style={styles.listView}>
              <Image style={styles.listImg} source={require('../../image/ic_favorite.png')} />
              <Text style={styles.listTitle}>{I18n.t('Favorites')}</Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPressOut={this.gotoCandidateMessageHome}>
            <View style={styles.listView}>
              <Image style={styles.listImg} source={require('../../image/ic_message.png')} />
              <Text style={styles.listTitle}>{I18n.t('Messaging')}</Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <View style={styles.listView}>
              <Image style={styles.listImg} source={require('../../image/ic_notification.png')} />
              <Text style={styles.listTitle}>{I18n.t('Notifications')}</Text>

              {notificationBadge}

            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPressOut={this.gotoCandidateFriendsHome}>
            <View style={styles.listView}>
              <Image style={styles.listImg} source={require('../../image/ic_friends.png')} />
              <Text style={styles.listTitle}>{I18n.t('Friends')}</Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPressOut={this.gotoCandidateGroupHome}>
            <View style={styles.listView}>
              <Image style={styles.listImg} source={require('../../image/ic_group.png')} />
              <Text style={styles.listTitle}>{I18n.t('Groups')}</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.listView}>
              <Image style={styles.listImg} source={require('../../image/ic_marketplace.png')} />
              <Text style={styles.listTitle}>{I18n.t('Marketplace')}</Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
              <View style={styles.listView}>
              <Image style={styles.listImg} source={require('../../image/ic_preference.png')} />
              <Text style={styles.listTitle}>{I18n.t('Preferences')}</Text>
            </View>
            </TouchableOpacity>

            {membershipButton}

          </View>
        </View>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(CandidateSideProfile);

AppRegistry.registerComponent('CandidateSideProfile',() => CandidateSideProfile);