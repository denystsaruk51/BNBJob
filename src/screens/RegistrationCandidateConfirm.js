import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Image,
  TouchableOpacity ,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/registrationCandidateConfirm.style';
import StatusBar from '../components/StatusBar';
import I18n from '../locale-data/i18n';

class RegistrationCandidateConfirm extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    routes: PropTypes.object,
  };

  static navigationOptions = {
    header: null ,
  };

  gotoCandidateField() {
    Actions.reset("candidateField");
  }
  
  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <SafeAreaView/>
        <View style={styles.slide}>
          <Image resizeMode='contain' style={styles.image} source={require('../image/img_registered2.png')} />
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
              <TouchableOpacity onPress={this.gotoCandidateField}>
                <View>
                  <Text style={styles.button}>{I18n.t('Great thank you')}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
      </View>
    )
  }
}

export default connect(({routes}) => ({routes}))(RegistrationCandidateConfirm);