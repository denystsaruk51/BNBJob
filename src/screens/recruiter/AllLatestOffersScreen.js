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
import {styles} from '../../styles/allLatestOffers.style';
import StatusBar from '../../components/StatusBar';
import I18n from '../../locale-data/i18n';
import AllLatestOffersRow from '../../components/AllLatestOffersRow';

class AllLatestOffersScreen extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    routes: PropTypes.object,
  };

  static navigationOptions = {
    header: null ,
  };

  goBack(){
    Actions.pop();
  }
  
  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <SafeAreaView/>
        <View style={styles.scrollViewStyle}>
          
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <TouchableOpacity style={styles.backImgView} onPress={this.goBack}>
                <View>
                  <Image style={styles.backImgButton} source={require('../../image/ic_back.png')} />
                </View>
              </TouchableOpacity>
              <View style={styles.titleView}>
                <Image style={styles.titleImage} source={require('../../image/sample_offer.png')} />
                <Text style={styles.title}>Architecte de connectivite</Text>
              </View>
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

            <ScrollView showsVerticalScrollIndicator={true}>
            
            <AllLatestOffersRow/>
            <AllLatestOffersRow/>
            <AllLatestOffersRow/>
            <AllLatestOffersRow/>
            <AllLatestOffersRow/>

            <View style={{height: 50}}></View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(AllLatestOffersScreen);

AppRegistry.registerComponent('AllLatestOffersScreen',() => AllLatestOffersScreen);