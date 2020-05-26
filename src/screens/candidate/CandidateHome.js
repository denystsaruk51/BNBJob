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
import StatusBar from '../../components/StatusBar';
import {styles} from '../../styles/candidateHome.style';
import I18n from '../../locale-data/i18n';
import HomeSearchBar from '../../components/HomeSearchBar';
import VideoCvs from '../../components/VideoCvs';
import LiveOffers from '../../components/LiveOffers';
import HomeMapOffers from '../../components/HomeMapOffers';
import HomeResearchItems from '../../components/HomeResearchItems';
import HomeJobs from '../../components/HomeJobs';
import HomeDayOffers from '../../components/HomeDayOffers';
import HomeCountryOffers from '../../components/HomeCountryOffers';

import MarketPlaces from '../../components/MarketPlaces';
import KnowThem from '../../components/KnowThem';
import Groups from '../../components/Groups';

class CandidateHome extends Component {
  constructor(props) {
    super(props);

    this.gotoLiveVideoScreen = this.gotoLiveVideoScreen.bind(this);
  }
  static propTypes = {
    routes: PropTypes.object,
  };

  static navigationOptions = {
    header: null ,
  };
  gotoLiveVideoScreen() {
    Actions.liveVideo({text: 'Live video'});
  }
  showAllVideoCvs() {
    Actions.videoCvsAll({text: 'Video CVs'});
  }
  showMapOffers() {
    Actions.candidateMapOffer({text: 'candidateMapOffer'});
  }
  gotoTop =()=>{
    this.refs._mainScrollView.scrollTo({animated: true}, 0);
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <View style={styles.scrollViewStyle}>
          <Image resizeMode='contain' style={styles.appLogoImg} source={require('../../image/img_app_title.png')} />
          <HomeSearchBar/>
          <ScrollView 
            ref='_mainScrollView'
            showsVerticalScrollIndicator={true}>
            
            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Live offers')}</Text>
            </View>

            <LiveOffers/>
            
            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Offers around you')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity onPress={this.showMapOffers}>
                  <Text style={styles.showAll}>{I18n.t('Show All')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <HomeMapOffers />

            <View style={styles.buttonGroup}>
              <View style={styles.whiteButtonView}>
                <TouchableOpacity onPress={this.showMapOffers}>
                  <View style={styles.row}>
                    <Image resizeMode='contain' style={styles.mapImg} source={require('../../image/ic_map_locate2.png')} />
                    <Text style={styles.redTextbutton}>{I18n.t('See in the map')}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Marketplace')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity onPress={this.showMapAllVideoCvs}>
                  <Text style={styles.showAll}>{I18n.t('Show All')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <MarketPlaces/>

            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Recent Research')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity >
                  <Text style={styles.showAll}>{I18n.t('Show all')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <HomeResearchItems />

            <View style={styles.subJobView}>
              <View style={styles.subTitleView}>
                <Text style={styles.subTitleWhite}>{I18n.t('Job minute')}</Text>
                <View style={styles.showAllView}>
                  <TouchableOpacity onPress={this.showMapOffers}>
                    <Text style={styles.showAllWhite}>{I18n.t('Show All')}</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <HomeJobs />
            </View>

            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Video cvs')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity onPress={this.showAllVideoCvs}>
                  <Text style={styles.showAll}>{I18n.t('Show all')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <VideoCvs onClickItem = {this.gotoLiveVideoScreen}/>

            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('You know')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity>
                  <Text style={styles.showAll}>{I18n.t('Show All')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <KnowThem/>

            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Offers of the day')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity onPress={this.showMapOffers}>
                  <Text style={styles.showAll}>{I18n.t('Show All')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <HomeDayOffers />

            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Group')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity>
                  <Text style={styles.showAll}>{I18n.t('Show All')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Groups/>

            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Offer by country')}</Text>
              <View style={styles.showAllView}>
                <TouchableOpacity onPress={this.showMapOffers}>
                  <Text style={styles.showAll}>{I18n.t('Show All')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <HomeCountryOffers />

            <TouchableOpacity onPress={this.gotoTop}>
              <View>
                <Image style={styles.topImgButton} source={require('../../image/ic_top.png')} />
              </View>
            </TouchableOpacity>

            <View style={{height: 100}}></View>
          </ScrollView>
        </View>        
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(CandidateHome);
AppRegistry.registerComponent('CandidateHome',() => CandidateHome);