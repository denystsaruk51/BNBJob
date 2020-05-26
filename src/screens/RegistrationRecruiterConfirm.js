import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/registrationRecruiterConfirm.style';
import StatusBar from '../components/StatusBar';
import I18n from '../locale-data/i18n';

class RegistrationRecruiterConfirm extends Component {
  constructor(props) {
    super(props);

    this.gotoPublishScreen = this.gotoPublishScreen.bind(this);
    this.gotoRecruiterField = this.gotoRecruiterField.bind(this);
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
  gotoRecruiterField() {
    this.props.navigation.replace('recruiterField');
  }

  gotoPublishScreen() {
    this.props.navigation.replace('recruiterPublish');
  }  

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <SafeAreaView/>
        <TouchableOpacity onPress={this.gotoPublishScreen}>
          <View>
            <Text style={[styles.buttonTopRight, styles.textRight, styles.colorRed]}>{I18n.t('Later')}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.slide}>
          <Image resizeMode='contain' style={styles.image} source={require('../image/img_registered2_recruiter.png')} />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Paul , {I18n.t('welcome on BNBjob')}</Text>
          <View>
            <Text style={styles.description}>{I18n.t('Before continuing, inform us more details about you')}</Text>
          </View>
        </View>
        
        <View style={styles.buttonGroup}>
          <View style={styles.redGroup}>
            <View style={styles.redButtonView}>
              <TouchableOpacity onPress={this.gotoRecruiterField}>
                <View>
                  <Text style={styles.button}>{I18n.t('Ok')}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
      </View>
    )
  }
}

export default connect(({routes}) => ({routes}))(RegistrationRecruiterConfirm);