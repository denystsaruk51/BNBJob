import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/candidatePresentation.style';
import StatusBar from '../components/StatusBar';
import I18n from '../locale-data/i18n';
import Loader from 'react-native-modal-loader';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from "react-native-fbsdk";

import { SignInUser } from '../services/Auth';
import Config from '../services/Config';

class CandidatePresentation extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      isLoading: false,
      fbEmail: '',
      fbPicture: '',
      fbFirstName: '',
      fbLastName: '',
      fbName: '',
      fbId: '',
    }

    this.gotoFacebookLogin=this.gotoFacebookLogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.gotoHomeScreen=this.gotoHomeScreen.bind(this);
    this.gotoRegisterCandidate=this.gotoRegisterCandidate.bind(this);
    this.gotoRegisterCandidateWithFacebook=this.gotoRegisterCandidateWithFacebook.bind(this);
    this.saveToken=this.saveToken.bind(this);
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
  gotoLogin() {
    Actions.login({userType: 'Candidate'});
  }
  gotoRegisterCandidate() {
    Actions.registrationCandidateName({fbEmail:'', fbPicture:'', fbFirstName:'', fbLastName:'', fbName:'', fbId:''});
  }
  gotoRegisterCandidateWithFacebook() {
    const { fbEmail, fbPicture, fbFirstName, fbLastName, fbName, fbId } = this.state;
    Actions.registrationCandidateName({fbEmail, fbPicture, fbFirstName, fbLastName, fbName, fbId});
  }
  gotoFacebookLogin() {
    const self = this;
    LoginManager.logInWithReadPermissions(["email", "public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
          alert("Facebook Login cancelled");
        } else {
          console.log( "Login success with permissions: " + result.grantedPermissions.toString() );
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              const infoRequest = new GraphRequest('/me', {
                httpMethod: 'GET',
                version: 'v2.5',
                accessToken: data.accessToken,
                parameters: {
                  fields: {
                    string: 'id,first_name,last_name,name,picture.type(large),email'
                  }
                }
              }, (err, res) => {
                if (err) {
                  alert('Error fetching data: ' + err.toString());
                } else {
                  self.setState({
                    fbEmail: res.email,
                    fbPicture: res.picture.data.url,
                    fbFirstName: res.first_name,
                    fbLastName: res.last_name,
                    fbName: res.name,
                    fbId: res.id,
                  });
                  self.handleLogin();
                  // alert(JSON.stringify(res));
                }
              });
              new GraphRequestManager().addRequest(infoRequest).start();
            }
          )
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
        alert("Facebook Login fail with error: " + error);
      }
    );
  }

  async saveToken(token, personInfo) {
    const {fbEmail} = this.state;
    const { userType } = this.props;
    const countryCode = '' + personInfo.phone_region;
    const phoneNumber = '' + personInfo.phone_number;
    const firstName = personInfo.first_name;
    const lastName = personInfo.last_name;   
    const userId = '' + personInfo._id;

    try {
      await AsyncStorage.setItem(Config.STORAGE_TOKEN_KEY, token);
      await AsyncStorage.setItem(Config.STORAGE_EMAIL_KEY, fbEmail);
      await AsyncStorage.setItem(Config.STORAGE_PASSWORD_KEY, Config.FACEBOOK_PASSWORD);
      await AsyncStorage.setItem(Config.STORAGE_USER_ID_KEY, userId);
      await AsyncStorage.setItem(Config.STORAGE_PHONEREGION_KEY, countryCode);
      await AsyncStorage.setItem(Config.STORAGE_PHONENUMBER_KEY, phoneNumber);
      await AsyncStorage.setItem(Config.STORAGE_FIRSTNAME_KEY, firstName);
      await AsyncStorage.setItem(Config.STORAGE_LASTNAME_KEY, lastName);
      await AsyncStorage.setItem(Config.STORAGE_USERTYPE_KEY, userType);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
  handleLogin() {
    const { fbEmail } = this.state;
    const password = Config.FACEBOOK_PASSWORD;

    this.setState({ isLoading: true });
    SignInUser(fbEmail, password)
      .then((res) => {
        this.setState({ isLoading: false });
        if(res.success === true) {
          const authToken = res.data.remember_token;
          this.saveToken(authToken, res.data);
          this.gotoHomeScreen();
        } else {
          this.gotoRegisterCandidateWithFacebook();
        }
      })
      .catch((reason) => {
        this.setState({ isLoading: false });
        this.gotoRegisterCandidateWithFacebook();
      });
  }
  gotoHomeScreen() {
    Actions.reset("candidateMain");
  }


  render () {
    return (
      <View style={styles.container}>
        <Loader loading={this.state.isLoading} color="#ff66be" />
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <SafeAreaView/>
        <Swiper style={styles.wrapper} height={240} loop={false}
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: '#ff5b8c', width: 16, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}>
          <View style={styles.slide}>
            <Image resizeMode='contain' style={styles.image} source={require('../image/img_presentation1.png')} />
            <Text style={styles.title}>{I18n.t('Cv by video')}</Text>
            <Text style={styles.description}>{I18n.t('Create your video resume and introduce yourself to thousands of employers')}</Text>
          </View>
          <View style={styles.slide}>
            <Image resizeMode='contain' style={styles.image} source={require('../image/img_presentation2.png')} />
            <Text style={styles.title}>{I18n.t('Job minute')}</Text>
            <Text style={styles.description}>{I18n.t('Find jobs that fit you in less than 90 minutes')}</Text>
          </View>
          <View style={styles.slide}>
            <Image resizeMode='contain' style={styles.image} source={require('../image/img_presentation3.png')} />
            <Text style={styles.title}>{I18n.t('geolocated')}</Text>
            <Text style={styles.description}>{I18n.t('No matter where you are, BNBjob offers offers around you')}</Text>
          </View>
        </Swiper>
        
        <TouchableOpacity style={styles.backImgView} onPress={this.goBack}>
          <View>
            <Image style={styles.backImgButton} source={require('../image/ic_back.png')} />
          </View>
        </TouchableOpacity>
        
        <View style={styles.buttonGroup}>
          <View style={styles.redGroup}>
            <View style={styles.redButtonView}>
              <TouchableOpacity onPress={this.gotoLogin}>
                <View>
                  <Text style={styles.button}>{I18n.t('Log in')}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.redBorderButtonView}>
              <TouchableOpacity onPress={this.gotoRegisterCandidate}>
                <View>
                  <Text style={styles.redButton}>{I18n.t('Registration')}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={{marginTop: 15}} onPress={this.gotoFacebookLogin}>
            <View style={styles.facebookButtonView} >
              <Image style={styles.facebookImage} source={require('../image/ic_facebook.png')} />
              <Text style={styles.facebookButton}>{I18n.t('Connect with Facebook')}</Text>
            </View>
          </TouchableOpacity>
        </View>
        
      </View>
    )
  }
}

export default connect(({routes}) => ({routes}))(CandidatePresentation);