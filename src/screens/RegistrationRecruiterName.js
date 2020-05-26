import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity ,
  ScrollView,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import {styles} from '../styles/registrationRecruiterName.style'
import StatusBar from '../components/StatusBar'
import InputField from '../components/InputField'
import I18n from '../locale-data/i18n'
import Config from '../services/Config'

class RegistrationRecruiterName extends Component {
  constructor(props){
    super(props)

    this.state = {
      firstName:'',
      lastName:'',
      nextButtonEnabled : false,
    }

    this.handleFirstNameChangeValue = this.handleFirstNameChangeValue.bind(this)
    this.handleLastNameChangeValue = this.handleLastNameChangeValue.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  static propTypes = {
    routes: PropTypes.object,
  }

  static navigationOptions = {
    header: null ,
  }
  componentDidMount() {
    const { fbEmail, fbPicture, fbFirstName, fbLastName, fbName, fbId } = this.props;

    this.setState({
      firstName: fbFirstName,
      lastName: fbLastName,
      nextButtonEnabled: (fbFirstName != '' && fbLastName != ''),
    });
  }

  gotoWelcome() {
    Actions.welcome({text: 'Candidate Presentation'});
  }

  goBack(){
    Actions.pop()
  }

  gotoRegistrationRecruiterMailPass(recruiterType) {
    const {firstName, lastName} = this.state;
    const { fbEmail, fbPicture, fbFirstName, fbLastName, fbName, fbId } = this.props;
    Actions.registrationRecruiterMailPass({recruiterType, firstName, lastName, fbEmail, fbPicture, fbName, fbId});
  }

  gotoRegistrationRecruiterEnterprise(recruiterType) {
    const {firstName, lastName} = this.state;
    const { fbEmail, fbPicture, fbFirstName, fbLastName, fbName, fbId } = this.props;
    Actions.registrationRecruiterEnterprise({recruiterType, firstName, lastName, fbEmail, fbPicture, fbName, fbId});
  }

  gotoRegistrationRecruiterAssociation(recruiterType) {
    const {firstName, lastName} = this.state;
    const { fbEmail, fbPicture, fbFirstName, fbLastName, fbName, fbId } = this.props;
    Actions.registrationRecruiterAssociation({recruiterType, firstName, lastName, fbEmail, fbPicture, fbName, fbId});
  }

  gotoRegistrationRecruiterOrganization(recruiterType) {
    const {firstName, lastName} = this.state;
    const { fbEmail, fbPicture, fbFirstName, fbLastName, fbName, fbId } = this.props;
    Actions.registrationRecruiterOrganize({recruiterType, firstName, lastName, fbEmail, fbPicture, fbName, fbId});
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
    const { recruiterType } = this.props
    if (!this.state.nextButtonEnabled) {
      return;
    }    

    if (recruiterType == Config.RECRUITER_INDIVIDUAL) {
      this.gotoRegistrationRecruiterMailPass(recruiterType)
    } else if (recruiterType == Config.RECRUITER_COMPANY) {
      this.gotoRegistrationRecruiterEnterprise(recruiterType)
    } else if (recruiterType == Config.RECRUITER_ASSOCIATION) {
      this.gotoRegistrationRecruiterAssociation(recruiterType)
    } else if (recruiterType == Config.RECRUITER_ORGANIZATION) {
      this.gotoRegistrationRecruiterOrganization(recruiterType)
    }
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
          <Text style={styles.title}>{I18n.t('What is your name')}</Text>

          <View style={styles.gap100} />

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

          <View style={styles.nextButtonView} >
              <TouchableOpacity
                onPress={this.handleNext}
                style={[styles.nextButton, { backgroundColor: this.state.nextButtonEnabled ? '#007AFE' : '#aaaaaa' }]}
                enabled={this.state.nextButtonEnabled}>
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

export default connect(({routes}) => ({routes}))(RegistrationRecruiterName)