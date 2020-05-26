import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity ,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import CountryPicker from 'react-native-country-picker-modal';
import {countries} from 'country-data';

import {styles} from '../styles/registrationCandidateMailPass.style';
import StatusBar from '../components/StatusBar';
import InputField from '../components/InputField';
import I18n from '../locale-data/i18n';
import Config from '../services/Config';

class RegistrationCandidateMailPass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:'',
      phone:'',
      firstName:'',
      lastName:'',
      cca2: 'FR',
      countryCode: '+33',
      isValidPhoneNumber: false,
      isGotFocusPhoneNumber: false,
      valuePhoneNumber:'',
      isValidEmail: false,
      isValidPassword: false,
      nextButtonEnabled : false,
    }
    this.handleEmailChangeValue = this.handleEmailChangeValue.bind(this);
    this.handlePasswordChangeValue = this.handlePasswordChangeValue.bind(this);
    this.handlePhoneChangeValue = this.handlePhoneChangeValue.bind(this);
    this.handleCountryPick=this.handleCountryPick.bind(this);
    this.onPhoneNumberFocusGet=this.onPhoneNumberFocusGet.bind(this);
    this.onPhoneNumberFocusLost=this.onPhoneNumberFocusLost.bind(this);
    this.isValidPhoneNumber=this.isValidPhoneNumber.bind(this);
    this.gotoRegistrationCandidateSMS = this.gotoRegistrationCandidateSMS.bind(this);
    this.isValidEmail=this.isValidEmail.bind(this);
    this.isValidPassword=this.isValidPassword.bind(this);
    this.phoneNumberValue='';
  }
  static propTypes = {
    routes: PropTypes.object,
  };

  static navigationOptions = {
    header: null ,
  };
  componentDidMount() {
    const {firstName, lastName, fbEmail, fbPicture, fbName, fbId} = this.props;
    let password = '';
    let isValidEmail = false;
    let isValidPassword = false;
    if(fbEmail && fbEmail.length > 0){
      password = Config.FACEBOOK_PASSWORD;
      isValidEmail = true;
      isValidPassword = true;
    }
    this.setState({
      firstName,
      lastName,
      email: fbEmail,
      password,
      isValidEmail,
      isValidPassword,
    });
  }

  goBack(){
    Actions.pop();
  }
  
  gotoRegistrationCandidateSMS() {
    const {email, password, countryCode, valuePhoneNumber, firstName, lastName, isValidEmail, isValidPassword, isValidPhoneNumber} = this.state;
    const phoneNumber = valuePhoneNumber;
    if(isValidEmail && isValidPassword && isValidPhoneNumber){
      // Actions.registrationCandidateSMS({email, password, countryCode, phoneNumber, firstName, lastName});
      Actions.registrationCandidatePrivacy({email, password, countryCode, phoneNumber, firstName, lastName}); 
    }
  }

  isValidEmail(valid){
    this.setState({isValidEmail: valid});
  }
  isValidPassword(valid){
    this.setState({isValidPassword: valid});
  }
  handleEmailChangeValue(value) {
    const { isValidEmail, isValidPassword, isValidPhoneNumber } = this.state;
    this.setState({
      email: value,
      nextButtonEnabled: (isValidEmail && isValidPassword && isValidPhoneNumber),
    });
  }
  handlePasswordChangeValue(value) {
    const { isValidEmail, isValidPassword, isValidPhoneNumber } = this.state;
    this.setState({
      password: value,
      nextButtonEnabled: (isValidEmail && isValidPassword && isValidPhoneNumber),
    });
  }
  handlePhoneChangeValue(value) {
    const { isValidEmail, isValidPassword } = this.state;
    let phoneNum = value.replace(" ", '')
      .replace("-", '')
      .replace(".", '')
      .replace("+", '')
      .replace("*", '')
      .replace("#", '')
      .replace(";", '')
      .replace(",", '')
      .replace("N", '')
      .replace("(", '')
      .replace(")", '')
      .replace("/", '');
    if(isNaN(phoneNum) || phoneNum.length != 10){
      this.setState({
        isValidPhoneNumber: false,
        valuePhoneNumber: value,
        nextButtonEnabled: false,
      });
    } else {
      this.setState({
        isValidPhoneNumber: true,
        valuePhoneNumber: value,
        nextButtonEnabled: (isValidEmail && isValidPassword),
      });
    }
  }
  handleCountryPick(value) {
    const countryCallingCode = countries[value.cca2].countryCallingCodes;
    const countryName = countries[value.cca2].name;
    this.setState({
      countryCode: countryCallingCode,
      cca2: value.cca2,
    });
  }

  onPhoneNumberFocusGet() {
    this.setState({isGotFocusPhoneNumber: true});
  }
  onPhoneNumberFocusLost() {
    this.setState({isGotFocusPhoneNumber: false});
  }
  isValidPhoneNumber(value){
    this.handlePhoneChangeValue(value);
  }
  renderPhoneNumberStateIcon(){
    if(this.state.isValidPhoneNumber){
      return(
        <View style={styles.statePhoneView}>
        <Image style={styles.statePhoneNumberImg} source={require('../image/ic_checked.png')} />
        </View>
      );
    } else {
      return(
        <View style={styles.statePhoneView}>
        <Image style={styles.statePhoneNumberImg} source={require('../image/ic_cancel.png')} />
        </View>
      );
    }
  }
  renderPhoneNumberBottomLine() {
    if(this.state.isGotFocusPhoneNumber){
      return (
        <View style={styles.bottomPhoneNumberLineViewActive}></View>
      );
    } else {
      return (
        <View style={styles.bottomPhoneNumberLineView}></View>
      );
    }
  }

  render() {
    const stateIconPhoneNumber = this.renderPhoneNumberStateIcon();
    const bottomLinePhoneNumber = this.renderPhoneNumberBottomLine();

    const {fbEmail, fbPicture, fbName, fbId} = this.props;
    const {email, password} = this.state;

    let isFacebook = false;
    if(fbEmail && fbEmail.length > 0){
      isFacebook = true;
    }

    return (
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
    
        <View style={styles.container}>
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          <SafeAreaView/>
          <View style={styles.row}>
            <TouchableOpacity style={styles.backImgView} onPress={this.goBack}>
              <View>
                <Image style={styles.backImgButton} source={require('../image/ic_back.png')} />
              </View>
            </TouchableOpacity>
            <Text style={styles.title}>{I18n.t('We are almost there')}</Text>
          </View>
          
          <Text style={styles.subtitle}>{I18n.t('More than a few details')}</Text>

          <InputField
            type={'email'}
            onChangeValue={this.handleEmailChangeValue}
            isValidEmail={this.isValidEmail}
            value={email}
            isFacebook={isFacebook}
          />
          <InputField
            type={'password'}
            onChangeValue={this.handlePasswordChangeValue}
            isValidPassword={this.isValidPassword}
            value={password}
            isFacebook={isFacebook}
          />
          
          <View style={styles.inputPhoneFieldContainer}>
            <View style={styles.inputPhoneNumberContainer}>
              <CountryPicker
                style={styles.countryPicker}
                onChange={this.handleCountryPick}
                cca2={this.state.cca2}
                translation='eng'
              />
              <View style={styles.divider}></View>
              <TextInput 
                style={styles.valuePhoneNumberText} 
                keyboardType = 'phone-pad'
                onFocus={this.onPhoneNumberFocusGet}
                onBlur={this.onPhoneNumberFocusLost}
                onChangeText={(text) => {this.phoneNumberValue = text; this.isValidPhoneNumber(text)}}
                />
              {stateIconPhoneNumber}
            </View>
            {bottomLinePhoneNumber}
          </View>

          <View 
            style={styles.nextButtonView}>
              <TouchableOpacity 
                style={[styles.nextButton, { backgroundColor: this.state.nextButtonEnabled ? '#007AFE' : '#aaaaaa' }]} 
                onPress={this.gotoRegistrationCandidateSMS} >
                  <View>
                      <Text style={styles.whiteText}>{I18n.t('Next')}</Text>
                  </View>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    )
  }
}

export default connect(({routes}) => ({routes}))(RegistrationCandidateMailPass)