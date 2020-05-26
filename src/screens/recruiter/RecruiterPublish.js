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
import {styles} from '../../styles/recruiterpublish.style';
import StatusBar from '../../components/StatusBar';
import I18n from '../../locale-data/i18n';

class RecruiterPublish extends Component {
  constructor(props) {
    super(props);

    this.gotoHome = this.gotoHome.bind(this);
    this.onPublish = this.onPublish.bind(this);
  }
  static propTypes = {
    routes: PropTypes.object,
  };

  static navigationOptions = {
    header: null ,
  };

  gotoHome() {
    this.props.navigation.replace('recruiterHome');
  }

  onPublish() {
    this.props.navigation.replace('recruiterHome');
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <SafeAreaView/>
        <View style={styles.slide}>
          <Image resizeMode='contain' style={styles.appLogoImg} source={require('../../image/img_app_title.png')} />
          <Image resizeMode='contain' style={styles.image} source={require('../../image/img_completed_profile_recruiter.png')} />
          <Text style={styles.title}>{I18n.t('You do not have any offers yet')}</Text>
          <Text style={styles.description}>{I18n.t('Publish your offer to receive applications instantly')}</Text>
        </View>
        
        <View style={styles.buttonGroup}>
          <View style={styles.redButtonView}>
            <TouchableOpacity onPress={this.onPublish}>
              <View>
                <Text style={styles.button}>{I18n.t('Publish')}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.laterButtonView}>
            <TouchableOpacity onPress={this.gotoHome}>
              <View>
                <Text style={styles.grayButton}>{I18n.t('Later')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    
    );
  }
}

export default connect(({routes}) => ({routes}))(RecruiterPublish);