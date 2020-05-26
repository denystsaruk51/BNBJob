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
import {styles} from '../../styles/candidateFilterSubField.style';
import StatusBar from '../../components/StatusBar';
import I18n from '../../locale-data/i18n';

import TouchableSubField from '../../components/TouchableSubField';

class CandidateFilterSubField extends Component {
  constructor(props){
    super(props);

    this.state = {firstName:'', lastName:'', nextButtonEnabled : false}

    this.gotoHomeScreen = this.gotoHomeScreen.bind(this);
  }

  static propTypes = {
    routes: PropTypes.object,
  };

  static navigationOptions = {
    header: null ,
  };

  gotoHomeScreen() {
    // Actions.candidateHomePopup({text: 'Candidate Home Popup'});
    Actions.pop();
  }

  goBack(){
    Actions.pop();
  }

  render() {
    return (        
        <View style={styles.container}>
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          <SafeAreaView style={{backgroundColor: '#ffffff'}}/>

          <View style={styles.row}>
            <Text style={styles.title}>{I18n.t('Professional Field')} filter</Text>
            <View style={styles.backImgView}>
            <TouchableOpacity  onPress={this.goBack}>
                <Image style={styles.backImgButton} source={require('../../image/ic_back.png')} />
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.highLightView}>
            <View style={styles.margin20}>
              <TouchableOpacity onPress={this.goBack}>
                <Image style={styles.whiteBackImg} source={require('../../image/ic_back_white.png')} />
              </TouchableOpacity>
              <Text style={styles.highLightWhiteText}>{I18n.t('Administration')}</Text>
              <Image style={styles.highLightRightImg} source={this.state.pressed ? require('../../image/ic_check_round_white.png'):
              require('../../image/ic_check_round_white.png')} />
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={true}>

          <View style={styles.margin20}>
            <TouchableSubField
              type="candidate"
              typeText={I18n.t('Actuary')}
              typeBorderColor="#cadbea">
            </TouchableSubField>

            <TouchableSubField
              type="candidate"
              typeText={I18n.t('Director of property')}
              typeBorderColor="#cadbea">
            </TouchableSubField>
            
            <TouchableSubField
              type="candidate"
              typeText={I18n.t('Tax Reporting Agent')}
              typeBorderColor="#cadbea">
            </TouchableSubField>

            <TouchableSubField
              type="candidate"
              typeText={I18n.t('Real estate agent')}
              typeBorderColor="#cadbea">
            </TouchableSubField>

            <TouchableSubField
              type="candidate"
              typeText={I18n.t('Real estate agent')}
              typeBorderColor="#cadbea">
            </TouchableSubField>
          </View>
      
          </ScrollView>

          <View style={styles.alignRight}>
            <TouchableOpacity onPress={this.gotoHomeScreen}>
              <View style={styles.redButton}>
                <Text style={styles.thankyouText}>{I18n.t('Great thank you')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

    );
  }
}

export default connect(({routes}) => ({routes}))(CandidateFilterSubField)