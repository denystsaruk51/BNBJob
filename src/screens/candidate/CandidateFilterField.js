import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity ,
  ScrollView,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../../styles/candidateFilterField.style';
import StatusBar from '../../components/StatusBar';
import I18n from '../../locale-data/i18n';

import TouchableField from '../../components/TouchableField';
import CommonSearchBar from '../../components/CommonSearchBar';

class CandidateFilterField extends Component {
  constructor(props){
    super(props);

    this.state = {firstName:'', lastName:'', nextButtonEnabled : false, search: ''}
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

  render() {
    return (
      
        <View style={styles.container}>
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          <SafeAreaView/>

          <View style={styles.row}>
            <Text style={styles.title}>{I18n.t('Professional Field')}</Text>
            <View style={styles.backImgView}>
            <TouchableOpacity  onPress={this.goBack}>
                <Image style={styles.backImgButton} source={require('../../image/ic_back.png')} />
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.searchBarContainer}>
            <CommonSearchBar />
          </View>

          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          <View style={styles.fieldContainer}>

            <TouchableField
              typeUser="candidate"
              isFilter="true"
              typeText={I18n.t('Administration')}
              typeIcon="organization"
              typeBorderColor="#cadbea">
            </TouchableField>

            <TouchableField
              type="candidate"
              isFilter="true"
              typeText={I18n.t('Management')}
              typeIcon="organization"
              typeBorderColor="#cadbea">
            </TouchableField>

            <TouchableField
              type="candidate"
              isFilter="true"
              typeText={I18n.t('Finance')}
              typeIcon="organization"
              typeBorderColor="#cadbea">
            </TouchableField>

          </View>
          </ScrollView>
          
        </View>

    );
  }
}

export default connect(({routes}) => ({routes}))(CandidateFilterField)