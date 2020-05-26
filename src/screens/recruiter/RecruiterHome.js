import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  AppRegistry,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../../styles/recruiterHome.style';
import StatusBar from '../../components/StatusBar';
import I18n from '../../locale-data/i18n';
import HomeSearchBar from '../../components/HomeSearchBar';
import HomeTabBar from '../../components/HomeTabBar';
import VideoCvs from '../../components/VideoCvs';
import LatestOffers from '../../components/LatestOffers';
import CloseCandidates from '../../components/CloseCandidates';
import MarketPlaces from '../../components/MarketPlaces';
import KnowThem from '../../components/KnowThem';
import Groups from '../../components/Groups';
import Offers from '../../components/Offers';
import Home from '../Home';

class RecruiterHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab : 'home',
    };

    this.gotoLiveVideoScreen = this.gotoLiveVideoScreen.bind(this);
    this.gotoVideosScreen = this.gotoVideosScreen.bind(this);
    this.onPressHome = this.onPressHome.bind(this);
    this.onPressFriends = this.onPressFriends.bind(this);
    this.onPressVideo = this.onPressVideo.bind(this);
    this.onPressProfile = this.onPressProfile.bind(this);
  }
  static propTypes = {
    routes: PropTypes.object,
  };

  static navigationOptions = {
    header: null ,
  };

  showAllVideoCvs() {
    Actions.videoCvsAll({text: 'Live video'});
  }
  showAllLatestOffers(){
    Actions.allLatestOffersScreen({text: 'Live video'});
  }
  gotoFilterScreen() {
    
  }

  gotoLiveVideoScreen() {
    Actions.liveVideo({text: 'Live video'});
  }
  gotoVideosScreen() {

  }
  onPressHome(){

  }
  onPressFriends(){

  }
  onPressVideo(){
    Actions.videoCvsAll({text: 'Live video'});
  }
  onPressProfile(){

  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <SafeAreaView/>
        <View style={styles.scrollViewStyle}>
            <Image resizeMode='contain' style={styles.appLogoImg} source={require('../../image/img_app_title.png')} />
            <HomeSearchBar
              userType='Recruiter'
            />

            <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Video cvs')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity onPress={this.showAllVideoCvs}>
                  <Text style={styles.showAll}>{I18n.t('Show all')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <VideoCvs onClickItem = {this.gotoLiveVideoScreen} />
            
            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Your latest offers')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity >
                  <Text style={styles.showAll}>{I18n.t('Show all')}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <LatestOffers onClickItem={this.showAllLatestOffers}/>

            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Candidates close to you')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity >
                  <Text style={styles.showAll}>{I18n.t('Show all')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <CloseCandidates/>

            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Marketplace')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity >
                  <Text style={styles.showAll}>{I18n.t('Show all')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <MarketPlaces/>

            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Do you know them')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity >
                  <Text style={styles.showAll}>{I18n.t('Show all')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <KnowThem/>

            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Group')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity >
                  <Text style={styles.showAll}>{I18n.t('Show all')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Groups/>

            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Latest candidates')}</Text>
            </View>
            <View style={styles.latestCandidateView}>
              <View style={styles.latestCandidateWaitingView}>
                <Text style={styles.waitingText}>{I18n.t('Waiting')}</Text>
                <View style={styles.waitingValueView}>
                  <Text style={styles.waitingValue}>61</Text>
                </View>
              </View>
              <View style={styles.latestCandidateInterviewView}>
                <Text style={styles.interviewText}>{I18n.t('Interview')}</Text>
                <Text style={styles.interviewValue}>61</Text>
              </View>
            </View>

            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Offer')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity >
                  <Text style={styles.showAll}>{I18n.t('Show all')}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.subDescription}>{I18n.t('Connectivity Architect H F')}</Text>
            
            <Offers/>

            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Offer')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity >
                  <Text style={styles.showAll}>{I18n.t('Show all')}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.subDescription}>{I18n.t('Flight attendant')}</Text>
            
            <Offers/>

            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Potential candidates')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity >
                  <Text style={styles.showAll}>{I18n.t('Show all')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <CloseCandidates/>

            <View style={{height: 150}}></View>
          </ScrollView>
        </View>
        <HomeTabBar
          selectedTab={'Home'}
          onPressHome={this.onPressHome}
          onPressFriends={this.onPressFriends}
          onPressVideo={this.onPressVideo}
          onPressProfile={this.onPressProfile}
        />
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(RecruiterHome);

AppRegistry.registerComponent('RecruiterHome',() => RecruiterHome);