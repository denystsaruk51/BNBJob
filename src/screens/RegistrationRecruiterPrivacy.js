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
import {styles} from '../styles/registrationRecruiterPrivacy.style';
import StatusBar from '../components/StatusBar';
import I18n from '../locale-data/i18n';
import { SignUpUser } from '../services/Auth';
import Config from '../services/Config';

class RegistrationRecruiterPrivacy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:'',
      countryCode:'',
      phoneNumber:'',
      firstName:'',
      lastName:'',
      recruiterType: 0,
      siret: '',
      institutionName: '',
      isLoading: false,
    }

    this.handleRegister=this.handleRegister.bind(this);
    this.saveToken=this.saveToken.bind(this);
    this.gotoRegistrationRecruiterConfirm = this.gotoRegistrationRecruiterConfirm.bind(this);
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

  static propTypes = {
    routes: PropTypes.object,
  }

  static navigationOptions = {
    header: null ,
  }

  goBack(){
    Actions.pop();
  }

  gotoRegistrationRecruiterConfirm() {
    Actions.reset('registrationRecruiterConfirm');
  }

  async handleRegister(){
    const {email, password, countryCode, phoneNumber, firstName, lastName, siret, institutionName, recruiterType} = this.state;
    const phoneRegion = countryCode.toString().replace('+', '');

    this.setState({ isLoading: true });

    SignUpUser(email, password, phoneRegion, phoneNumber, firstName, lastName, false, recruiterType, siret, institutionName)
      .then((res) => {
        this.setState({ isLoading: false });
        if(res.success === true) {
          const authToken = res.data.remember_token;
          this.saveToken(authToken);

          this.gotoRegistrationRecruiterConfirm();
        } else {
          alert(JSON.stringify(res.error));
        }
      })
      .catch((reason) => {
        this.setState({ isLoading: false });
        alert(reason);
      });
  }

  async saveToken(token) {
    const {email, password, countryCode, phoneNumber, firstName, lastName} = this.state;
    try {
      await AsyncStorage.setItem(Config.STORAGE_TOKEN_KEY, token);
      await AsyncStorage.setItem(Config.STORAGE_EMAIL_KEY, email);
      await AsyncStorage.setItem(Config.STORAGE_PASSWORD_KEY, password);
      await AsyncStorage.setItem(Config.STORAGE_PHONEREGION_KEY, countryCode);
      await AsyncStorage.setItem(Config.STORAGE_PHONENUMBER_KEY, phoneNumber);
      await AsyncStorage.setItem(Config.STORAGE_FIRSTNAME_KEY, firstName);
      await AsyncStorage.setItem(Config.STORAGE_LASTNAME_KEY, lastName);
      await AsyncStorage.setItem(Config.STORAGE_USERTYPE_KEY, 'Recruit');
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  render () {
    return (
      <View style={styles.container}>
      <Loader loading={this.state.isLoading} color="#ff66be" />
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <SafeAreaView/>
        <View style={styles.slide}>
          <Image resizeMode='contain' style={styles.image} source={require('../image/img_registered1_recruiter.png')} />
        </View>
        <View style={styles.container}>
          <Text style={styles.description}>{I18n.t('By clicking register you accept the')}</Text>
          <View style={styles.row}>
            <Text style={styles.descriptionRed}>{I18n.t('general conditions of use')}</Text>
            <Text style={styles.description}>{I18n.t('and')}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.descriptionRed}>{I18n.t('privacy policy')}</Text>
            <Text style={styles.description}>{I18n.t('of')}</Text>
            <Text style={styles.descriptionRed}>{I18n.t('BNBjob')}</Text>
          </View>
        </View>
        
        <View style={styles.buttonGroup}>
          <View style={styles.redGroup}>
            <View style={styles.redButtonView}>
              <TouchableOpacity onPress={this.handleRegister}>
                <View>
                  <Text style={styles.button}>{I18n.t('Register')}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
      </View>
    )
  }
}

export default connect(({routes}) => ({routes}))(RegistrationRecruiterPrivacy);