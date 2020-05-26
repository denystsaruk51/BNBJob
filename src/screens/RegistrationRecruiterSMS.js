import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';

import {
  View,
  Text,
  Image,
  TouchableOpacity ,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/registrationRecruiterSMS.style';
import StatusBar from '../components/StatusBar';
import SmsField from '../components/SmsField';
import I18n from '../locale-data/i18n';

class RegistrationRecruiterSMS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:'',
      countryCode:'',
      phoneNumber:'',
      firstName:'',
      lastName:'',
      siret: '',
      institutionName: '',
      recruiterType: 0,
      sms1:'',
      sms2:'',
      sms3:'',
      sms4:'',
    }
    this.handleSmsChangeValue1 = this.handleSmsChangeValue1.bind(this);
    this.handleSmsChangeValue2 = this.handleSmsChangeValue2.bind(this);
    this.handleSmsChangeValue3 = this.handleSmsChangeValue3.bind(this);
    this.handleSmsChangeValue4 = this.handleSmsChangeValue4.bind(this);
    this.gotoRegistrationRecruiterPrivacy = this.gotoRegistrationRecruiterPrivacy.bind(this);
    this.handleVerify=this.handleVerify.bind(this);
  }

  static propTypes = {
    routes: PropTypes.object,
  }

  static navigationOptions = {
    header: null ,
  }

  componentDidMount() {
    const {email, password, countryCode, phoneNumber, firstName, lastName, siret, institutionName, recruiterType} = this.props;
    this.setState({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      countryCode,
      siret,
      institutionName,
      recruiterType
    });    
  }

  goBack(){
    Actions.pop();
  }

  handleSmsChangeValue(value) {
    this.setState({sms: value});
  }

  gotoRegistrationRecruiterPrivacy() {
    const {email, password, countryCode, phoneNumber, firstName, lastName, siret, institutionName, recruiterType} = this.state;
    Actions.registrationRecruiterPrivacy({email, password, countryCode, phoneNumber, firstName, lastName, siret, institutionName, recruiterType});
  }

  handleSmsChangeValue1(value) {
    this.setState({sms1: value});
  }

  handleSmsChangeValue2(value) {
    this.setState({sms2: value});
  }

  handleSmsChangeValue3(value) {
    this.setState({sms3: value});
  }

  handleSmsChangeValue4(value) {
    this.setState({sms4: value});
  }

  handleResendCode(){

  }

  onDetectPin(pin) {
    
  }

  handleVerify(){
    const { sms1, sms2, sms3, sms4 } = this.state;
    const code = sms1+sms2+sms3+sms4;
    if(code.length === 4){
      this.gotoRegistrationRecruiterPrivacy();
    }
  }

  render() {
    const {countryCode, phoneNumber} = this.props;
    const title = '(' +  countryCode + ') ' + phoneNumber;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          <SafeAreaView/>
          <View style={styles.row}>
            <TouchableOpacity style={styles.backImgView} onPress={this.goBack}>
              <View>
                <Image style={styles.backImgButton} source={require('../image/ic_back.png')} />
              </View>
            </TouchableOpacity>
            <Text style={styles.blueTitleText}>{I18n.t('Sent to')} {title}</Text>
          </View>

          <View style={styles.backImgContainer}>
            <Image style={styles.backImg} source={require('../image/img_sms_verify.png')} />
          </View>

          <View style={styles.alignCenter}>
            <View style={styles.smsRow}>
              <SmsField onChangeValue={this.handleSmsChangeValue1} />
              <SmsField onChangeValue={this.handleSmsChangeValue2} />
              <SmsField onChangeValue={this.handleSmsChangeValue3} />
              <SmsField onChangeValue={this.handleSmsChangeValue4} />
            </View>

          </View>

          <View style={styles.alignCenter}>
            <Text style={styles.subtitle}>{I18n.t('I did not receive the code send back')}</Text>
            <TouchableOpacity onPress={this.handleResendCode} >
              <Text style={styles.redText}>{I18n.t('Return')}</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.gap100}>
          </View>
        </ScrollView>
        <View style={styles.alignBottomRight}>
            <TouchableOpacity onPress={this.handleVerify} >
                <View>
                    <Text style={styles.blueText}>{I18n.t('Completed')}</Text>
                </View>
            </TouchableOpacity>
          </View>
      </View>

    );
  }
}

export default connect(({routes}) => ({routes}))(RegistrationRecruiterSMS);