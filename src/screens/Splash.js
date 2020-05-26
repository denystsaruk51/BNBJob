import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Image,
  PermissionsAndroid, 
  AsyncStorage,
  Platform,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import * as Animate from 'react-native-animatable'

import {styles} from '../styles/splash.style'
import StatusBar from '../components/StatusBar'

import { SignInUser } from '../services/Auth';
import Config from '../services/Config';

class Splash extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if (Platform.OS === 'android'){
      this.requestCameraAndAudioAndroidPermission().then(() => {
        this.startTimer();
      });
    } else {
      this.startTimer();
    }
  }
  static propTypes = {
    routes: PropTypes.object,
  };

  static navigationOptions = {
    header: null ,
  }
  async requestCameraAndAudioAndroidPermission() {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  gotoHomeScreen(userType) {
    if(userType === 'Recruit') {
      Actions.reset("recruiterHome");
    } else { // Candidate
      Actions.reset("candidateMain");
    }
  }
  async saveToken(token) {
    try {
      await AsyncStorage.setItem(Config.STORAGE_TOKEN_KEY, token);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
  async startTimer(){
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    const email = await AsyncStorage.getItem(Config.STORAGE_EMAIL_KEY);
    const password = await AsyncStorage.getItem(Config.STORAGE_PASSWORD_KEY);
    const userType = await AsyncStorage.getItem(Config.STORAGE_USERTYPE_KEY);

    setTimeout(() => {
      if(TOKEN && TOKEN.length > 0){
        SignInUser(email, password)
        .then((res) => {
          this.setState({ isLoading: false });
          if(res.success === true) {
            const authToken = res.data.remember_token;
            this.saveToken(authToken);
            this.gotoHomeScreen(userType);
          } else {
            alert(JSON.stringify(res.error));
          }
        })
        .catch((reason) => {
          this.setState({ isLoading: false });
          alert(reason);
        });
      } else {
        this.props.navigation.replace('welcome');
      }
    }, 3000);
  }
  render () {
    return (
      <View style={styles.outerContainer}>
        <StatusBar backgroundColor="#091822" barStyle="light-content" />
        <Image style={styles.bgImage} source={require('../image/bg_splash.png')} />
        <Image style={styles.mapImage} source={require('../image/img_splash_map.png')} />
        <Image style={styles.appName} source={require('../image/img_app_title.png')} />
        <Animate.View
          duration={3000}
          animation={{
            from: {
              rotate: '-360deg',
            },
            to: {
              rotate: '0deg',
            }
          }}
          iterationCount="infinite"
          iterationDelay={0}
          easing="linear"
          useNativeDriver
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            height: 100,
            width: 100,
        }}>
          <Image style={styles.logo} source={require('../image/img_splash_loading.png')} />
        </Animate.View>
      </View>
    )
  }
}

export default connect(({routes}) => ({routes}))(Splash)