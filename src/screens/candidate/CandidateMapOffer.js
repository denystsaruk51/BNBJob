import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  AppRegistry,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../../styles/candidateMapOffer.style';
import StatusBar from '../../components/StatusBar';
import I18n from '../../locale-data/i18n';
import CandidateSearchBar from '../../components/CandidateSearchBar';
import MapOffers from '../../components/MapOffers';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class CandidateMapOffer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null ,
  };

  goCandidateMapOfferList() {
    Actions.candidateMapOfferList({text: 'Candidate Map Offer List'});
  }
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

          <Text style={[styles.title, styles.flexRow2]}>{I18n.t('Map')}</Text>

          <View style={styles.flexRow1}>
            <CandidateSearchBar />
          </View>
        </View>

        <MapView
          provider = { Platform.os === 'android' ? PROVIDER_GOOGLE : null }
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        
        <View style={styles.mapOffers}>
          <TouchableOpacity onPress={this.goCandidateMapOfferList}>
          <View>
            <Image style={styles.mapListButton} source={require('../../image/ic_map_list.png')} />
            </View>
          </TouchableOpacity>
          <MapOffers />
        </View>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(CandidateMapOffer);