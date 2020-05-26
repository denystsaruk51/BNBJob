import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../../styles/candidateMapOfferList.style';
import StatusBar from '../../components/StatusBar';
import I18n from '../../locale-data/i18n';
import CandidateSearchBar from '../../components/CandidateSearchBar';
import MapOfferListItem from '../../components/MapOfferListItem';

class CandidateMapOfferList extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null ,
  };

  goBack(){
    Actions.pop();
  }

  render () {
    return (
      
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <SafeAreaView/>

        <View style={styles.row}>
          <View style={styles.flexRow1}>
            <TouchableOpacity style={styles.backImgView} onPress={this.goBack}>
              <View>
                <Image style={styles.backImgButton} source={require('../../image/ic_back.png')} />
              </View>
            </TouchableOpacity>
          </View>

          <Text style={[styles.title, styles.flexRow2]}>{I18n.t('Offers around')}</Text>

          <View style={styles.flexRow1}>
            <CandidateSearchBar />
          </View>
        </View>

        <ScrollView style={styles.scrollViewStyle}>
          <MapOfferListItem/>
          <MapOfferListItem/>
          <MapOfferListItem/>
          <MapOfferListItem/>
          <MapOfferListItem/>
          <View style={styles.gap50} />
        </ScrollView>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(CandidateMapOfferList);