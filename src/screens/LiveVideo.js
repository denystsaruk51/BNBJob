import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/liveVideo.style';
import StatusBar from '../components/StatusBar';
import UserAvatar from '../components/UserAvatar';

class LiveVideo extends Component {
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
  goBack(){
    Actions.pop();
  }
  showAllVideoCvs() {
    
  }
  gotoFilterScreen() {
    
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />        
        {/* <SafeAreaView/> */}
        <Image style={styles.backgroundImg} source={require('../image/sample_know_them.png')} />
        
        <TouchableOpacity style={styles.backImgView} onPress={this.goBack}>
          <Image style={styles.backImgButton} source={require('../image/ic_back.png')} />
        </TouchableOpacity>

        <View style={styles.topView}>
          <View style={styles.progressView}>
            <View style={styles.backgroundProgressView}/>
            <View style={styles.progressValueView}/>
          </View>
          <View style={styles.profileInfoView}>
            <View style={styles.avatarView}>
              <UserAvatar/>
            </View>
            <View style={styles.descGroupView}>
              <Text style={styles.nameText} numberOfLines={1}>Paul Houille</Text>
              <Text style={styles.descText} numberOfLines={1}>Product Designer</Text>  
            </View>
          </View>
        </View>
        <View style={styles.btnGroupView}>
            <View style={styles.leftBtnView}>
              <Image style={styles.messageIcon} source={require('../image/ic_message_white.png')} />
            </View>
            <View style={styles.centerBtnView}>
              <Image style={styles.messageIcon} source={require('../image/ic_phone_call_white.png')} />
            </View>
            <View style={styles.rightBtnView}>
              <Image style={styles.messageIcon} source={require('../image/ic_video_call_white.png')} />
            </View>
          </View>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(LiveVideo);