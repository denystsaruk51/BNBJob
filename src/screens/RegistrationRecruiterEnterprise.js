import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import {styles} from '../styles/registrationRecruiterEnterprise.style';
import StatusBar from '../components/StatusBar';
import InputFieldRecruiter from '../components/InputFieldRecruiter';
import I18n from '../locale-data/i18n';

class RegistrationRecruiterEnterprise extends Component {
  constructor(props){
    super(props);

    this.state = {
      institutionName:'',
      siret:'',
      nextButtonEnabled : false,
    }

    this.handleEnterpriseChangeValue = this.handleEnterpriseChangeValue.bind(this);
    this.handleSiretChangeValue = this.handleSiretChangeValue.bind(this);
    this.gotoRegistrationRecruiterMailPass = this.gotoRegistrationRecruiterMailPass.bind(this);
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

  gotoRegistrationRecruiterMailPass() {
    const { institutionName, siret } = this.state;
    const { recruiterType, firstName, lastName, fbEmail, fbPicture, fbName, fbId } = this.props;
    
    if (!this.state.nextButtonEnabled) {
      return;
    }

    Actions.registrationRecruiterMailPass({recruiterType, siret, institutionName, firstName, lastName, fbEmail, fbPicture, fbName, fbId});
  }

  handleEnterpriseChangeValue(value) {
    const { siret } = this.state;
    this.setState({nextButtonEnabled: (value != '' && siret != ''), institutionName: value});
  }

  handleSiretChangeValue(value) {
    const { institutionName } = this.state;
    this.setState({nextButtonEnabled: (institutionName != '' && value != ''), siret: value});
  }

  render() {

    const { firstName } = this.props;    

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
          <Text style={styles.title}>{I18n.t('Hello')}, {firstName}</Text>
          <Text style={styles.subtitle}>{I18n.t('Please identify the name of your company')}</Text>

          <View style={styles.gap100} />

          <InputFieldRecruiter
            type={'enterprise'}
            onChangeValue={this.handleEnterpriseChangeValue}
          />

          <InputFieldRecruiter
            type={'siret'}
            onChangeValue={this.handleSiretChangeValue}
          />

          <View style={styles.gap100}></View>

          <View style={styles.nextButtonView}>
              <TouchableOpacity
              onPress={this.gotoRegistrationRecruiterMailPass}
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

export default connect(({routes}) => ({routes}))(RegistrationRecruiterEnterprise);