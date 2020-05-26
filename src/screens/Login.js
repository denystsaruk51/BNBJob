import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
import Loader from 'react-native-modal-loader';

import {styles} from '../styles/login.style';
import StatusBar from '../components/StatusBar';
import InputField from '../components/InputField';
import I18n from '../locale-data/i18n';

import { SignInUser } from '../services/Auth';
import Config from '../services/Config';

class Login extends Component {
  constructor(props) {
  super(props)

  this.state = {
    email:'',
    password:'',
    userType:'Recruit',
    isLoading: false,
  }

  this.handleEmailChangeValue = this.handleEmailChangeValue.bind(this)
  this.handlePassowrdChangeValue = this.handlePassowrdChangeValue.bind(this)
  this.handleLogin = this.handleLogin.bind(this)
  this.gotoHomeScreen=this.gotoHomeScreen.bind(this)
  this.createAccount=this.createAccount.bind(this)
}

  componentDidMount() {
    const {userType} = this.props;
    this.setState({userType: userType})
  }

  static propTypes = {
    routes: PropTypes.object,
  }

  static navigationOptions = {
    header: null ,
  }

  goBack(){
    Actions.pop();
  }

  forgotPassword() {

  }
  
  createAccount() {
    const { userType } = this.props;
    if(userType === 'Recruit') {
      Actions.registrationRecruiterType({fbEmail:'', fbPicture:'', fbFirstName:'', fbLastName:'', fbName:'', fbId:''});
    } else { // Candidate
      Actions.registrationCandidateName({fbEmail:'', fbPicture:'', fbFirstName:'', fbLastName:'', fbName:'', fbId:''});
    }
  }
  async saveToken(token, personInfo) {
    const {email, password} = this.state;
    const { userType } = this.props;
    const countryCode = '' + personInfo.phone_region;
    const phoneNumber = '' + personInfo.phone_number;
    const firstName = personInfo.first_name;
    const lastName = personInfo.last_name;   
    const userId = '' + personInfo._id;
    try {
      await AsyncStorage.setItem(Config.STORAGE_TOKEN_KEY, token);
      await AsyncStorage.setItem(Config.STORAGE_EMAIL_KEY, email);
      await AsyncStorage.setItem(Config.STORAGE_USER_ID_KEY, userId);
      await AsyncStorage.setItem(Config.STORAGE_PASSWORD_KEY, password);
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
    const {email, password} = this.state;
    if(email === '' || password ==='' ){
      return;
    }

    this.setState({ isLoading: true });
    SignInUser(email, password)
      .then((res) => {
        this.setState({ isLoading: false });
        if(res.success === true) {
          const authToken = res.data.remember_token;
          this.saveToken(authToken, res.data);
          
          this.gotoHomeScreen();
        } else {
          // alert(JSON.stringify(res.error));
          alert('Authentication failed.');
        }
      })
      .catch((reason) => {
        this.setState({ isLoading: false });
        alert(reason);
      });
  }
  gotoHomeScreen() {
    const { userType } = this.props;
    if(userType === 'Recruit') {
      Actions.reset("recruiterHome");
    } else { // Candidate
      Actions.reset("candidateMain");
    }
  }

  handleEmailChangeValue(value) {
    this.setState({email: value});
  }
  handlePassowrdChangeValue(value) {
    this.setState({password: value});
  }
  render() {
    const {email, password} = this.state;

    return (
      <View style={styles.container}>
        <Loader loading={this.state.isLoading} color="#ff66be" />
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <SafeAreaView/>
        <View style={{height: 10}}></View>
        <TouchableOpacity style={styles.backImgView} onPress={this.goBack}>
          <View>
            <Image style={styles.backImgButton} source={require('../image/ic_back.png')} />
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>{I18n.t('Log in')}</Text>
        <InputField
          type={'email'}
          onChangeValue={this.handleEmailChangeValue}
          value={email}
        />
        <InputField
          type={'password'}
          onChangeValue={this.handlePassowrdChangeValue}
          value={password}
        />
        <TouchableOpacity onPress={this.forgotPassword}>
          <View style={{right:0}}>
            <Text style={styles.forgotPassword}>{I18n.t('Forgot your password')}</Text>
          </View>
        </TouchableOpacity>
      
        <TouchableOpacity onPress={this.createAccount}>
          <View style={styles.createAccontView}>
            <Text style={styles.noAccount}>{I18n.t('I do not have an account')}</Text>
            <Text style={styles.createAccount}>{I18n.t('Create')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 80}} onPress={this.handleLogin}>
          <View style={styles.redButtonView}>
            <Text style={styles.button}>{I18n.t('Log in')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(Login);