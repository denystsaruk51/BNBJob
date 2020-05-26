import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  AppRegistry,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/videos.style';
import I18n from '../locale-data/i18n';
import TitleSearchBar from '../components/TitleSearchBar';
import VideosItem from '../components/VideosItem';
import StatusBar from '../components/StatusBar';

class Videos extends Component {
  constructor(props) {
    super(props);
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
  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <SafeAreaView/>
        <View style={styles.scrollViewStyle}>
          <ScrollView showsVerticalScrollIndicator={true}>
          <View style={{alignItems: "center", marginTop: 20}}>
            <TitleSearchBar/>
          </View>
            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Today')}</Text>
            </View>

            <VideosItem onClickItem={this.gotoLiveVideoScreen} />
            <VideosItem onClickItem={this.gotoLiveVideoScreen} />
            <VideosItem onClickItem={this.gotoLiveVideoScreen} />

            <View style={{height: 50}}></View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(Videos);

AppRegistry.registerComponent('Videos',() => Videos);