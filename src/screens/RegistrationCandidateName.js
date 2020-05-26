import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity ,
  ScrollView,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/registrationCandidateName.style';
import StatusBar from '../components/StatusBar';
import InputField from '../components/InputField';
import I18n from '../locale-data/i18n';

class RegistrationCandidateName extends Component {
  constructor(props){
    super(props);

    this.state = {firstName:'', lastName:'', nextButtonEnabled : false}
    this.handleFirstNameChangeValue = this.handleFirstNameChangeValue.bind(this);
    this.handleLastNameChangeValue = this.handleLastNameChangeValue.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.gotoRegistrationCandidateMailPass = this.gotoRegistrationCandidateMailPass.bind(this);
  }

  static propTypes = {
    routes: PropTypes.object,
  };

  static navigationOptions = {
    header: null ,
  };
  componentDidMount() {
    const { fbEmail, fbPicture, fbFirstName, fbLastName, fbName, fbId } = this.props;

    this.setState({
      firstName: fbFirstName,
      lastName: fbLastName,
      nextButtonEnabled: (fbFirstName != '' && fbLastName != ''),
    });
  }

  goBack(){
    Actions.pop();
  }
  
  gotoRegistrationCandidateMailPass() {
    const {firstName, lastName} = this.state;
    const { fbEmail, fbPicture, fbFirstName, fbLastName, fbName, fbId } = this.props;
    Actions.registrationCandidateMailPass({firstName, lastName, fbEmail, fbPicture, fbName, fbId});
  }

  handleFirstNameChangeValue(value) {
    const {lastName} = this.state;
    this.setState({
      firstName: value,
      nextButtonEnabled: (value != '' && lastName != '')
    });
  }

  handleLastNameChangeValue(value) {
    const {firstName} = this.state;
    this.setState({
      lastName: value,
      nextButtonEnabled: (firstName != '' && value != '')
    });
  }
  handleNext(){
    if (!this.state.nextButtonEnabled) {
      return;
    }

    Alert.alert(
      I18n.t('Allow access location data when using the app'),
      I18n.t('Used to send you candidates Close to you'),
        [
          {
            text: I18n.t('Refuse'),
            onPress: this.gotoRegistrationCandidateMailPass
          },
          {
            text: I18n.t('Allow'),
            onPress: this.gotoRegistrationCandidateMailPass
          },
        ],
        { cancelable: false }
    )
  }
  
  render() {
    const {firstName, lastName} = this.state;
    return (
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          <SafeAreaView/>
          <View style={{height: 10}}></View>
          <TouchableOpacity style={styles.backImgView} onPress={this.goBack}>
            <View>
              <Image style={styles.backImgButton} source={require('../image/ic_back.png')} />
            </View>
          </TouchableOpacity>
          <Text style={styles.title}>{I18n.t('Registration')}</Text>
          <Text style={styles.subtitle}>{I18n.t('Identify yourself personal data')}</Text>

          <View style={styles.gap100}></View>

          <View style={styles.gap} />
            <InputField
              type={'firstName'}
              value={firstName}
              onChangeValue={this.handleFirstNameChangeValue}
            />
            <InputField
              type={'lastName'}
              value={lastName}
              onChangeValue={this.handleLastNameChangeValue}
            />

          <View style={styles.gap100}></View>

          <View style={styles.nextButtonView}>
              <TouchableOpacity
                onPress={this.handleNext }
                style={[styles.nextButton, { backgroundColor: this.state.nextButtonEnabled ? '#007AFE' : '#aaaaaa' }]} 
                enabled={this.state.nextButtonEnabled} >
                <View>
                    <Text style={styles.whiteText}>{I18n.t('Next')}</Text>
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default connect(({routes}) => ({routes}))(RegistrationCandidateName)