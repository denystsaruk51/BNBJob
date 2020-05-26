import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity ,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/registrationRecruiterOrganize.style';
import StatusBar from '../components/StatusBar';
import InputFieldRecruiter from '../components/InputFieldRecruiter';
import I18n from '../locale-data/i18n';

class RegistrationRecruiterOrganize extends Component {
  constructor(props){
    super(props);

    this.state = {
      institutionName:'',
      siret:'',
      nextButtonEnabled : false
    };

    this.handleOrganizeChangeValue = this.handleOrganizeChangeValue.bind(this);
    this.gotoRegistrationRecruiterMailPass = this.gotoRegistrationRecruiterMailPass.bind(this);
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

  gotoRegistrationRecruiterMailPass() {
    const { firstName, lastName, recruiterType, fbEmail, fbPicture, fbName, fbId } = this.props;
    const { institutionName } = this.state;

    if (!this.state.nextButtonEnabled) {
      return;
    }

    Actions.registrationRecruiterMailPass({firstName, lastName, recruiterType, institutionName, fbEmail, fbPicture, fbName, fbId});
  }

  handleOrganizeChangeValue(value) {
    this.setState({nextButtonEnabled: (value != ''), institutionName: value});
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
          <Text style={styles.subtitle}>{I18n.t('Please identify the name of your organization')}</Text>

          <View style={styles.gap100} />

          <InputFieldRecruiter
            type={'organization'}
            onChangeValue={this.handleOrganizeChangeValue}
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

export default connect(({routes}) => ({routes}))(RegistrationRecruiterOrganize)