import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  AppRegistry,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../../styles/candidateFilter.style';

import I18n from '../../locale-data/i18n';

import StatusBar from '../../components/StatusBar';
import FilterSalary from '../../components/FilterSalary';
import FilterContractType from '../../components/FilterContractType';
import FilterSkill from '../../components/FilterSkill';
import FilterLocation from '../../components/FilterLocation';
import FilterCountry from '../../components/FilterCountry';

class CandidateFilter extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null ,
  };

  goBack(){
    Actions.pop();
  }

  showMapOffers() {
    Actions.candidateMapOffer({text: 'candidateMapOffer'});
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar  backgroundColor="#f5f5f5" barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={styles.row}>
            <Text style={styles.title}>{I18n.t('Filters')}</Text>
            <View style={styles.backImgView}>
            <TouchableOpacity  onPress={this.goBack}>
                <Image style={styles.backImgButton} source={require('../../image/ic_back.png')} />
            </TouchableOpacity>
            </View>
          </View>

          <FilterSalary />

          <FilterContractType />

          <FilterSkill />

          <FilterLocation />

          <FilterCountry />

          <View style={styles.gap50} />

          <View style={styles.redButtonView}>
            <TouchableOpacity onPress={this.showMapOffers}>
              <View>
                <Text style={styles.buttonText}>{I18n.t('Show all (3000) results')}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.gap50} />

        </ScrollView>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(CandidateFilter);