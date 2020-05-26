import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  AppRegistry,
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/videoCvsAll.style';
import I18n from '../locale-data/i18n';
import TitleSearchBar from '../components/TitleSearchBar';
import VideosItem from '../components/VideosItem';
import StatusBar from '../components/StatusBar';

class VideoCvsAll extends Component {
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
  
  gotoLiveVideoScreen() {
    Actions.liveVideo({text: 'Live video'});
  }
  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <SafeAreaView/>
        
        <TouchableOpacity style={styles.backImgView} onPress={this.goBack}>
          <Image style={styles.backImgButton} source={require('../image/ic_back.png')} />
        </TouchableOpacity>

        <View style={styles.scrollViewStyle}>
          
            <View style={{alignItems: "center"}}>
              <TitleSearchBar/>
            </View>
            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{I18n.t('Today')}</Text>
            </View>
          <ScrollView showsVerticalScrollIndicator={true}>
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

export default connect(({routes}) => ({routes}))(VideoCvsAll);

AppRegistry.registerComponent('Videos',() => VideoCvsAll);