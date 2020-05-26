import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  AppRegistry,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../../styles/candidateHomePopup.style';
import StatusBar from '../../components/StatusBar';
import I18n from '../../locale-data/i18n';
import HomeSearchBar from '../../components/HomeSearchBar';
import LiveOffers from '../../components/LiveOffers';

class CandidateOfferExpiredPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab : 'home',
    }
  }
  static propTypes = {
    routes: PropTypes.object,
  };

  static navigationOptions = {
    header: null ,
  };

  showMapOffers() {
    Actions.candidateMapOffer({text: 'candidateMapOffer'});
  }
  goBack() {
    Actions.pop();
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        
        <View style={styles.container} opacity={0.6}>
          <View style={styles.scrollViewStyle}>
            <Image resizeMode='contain' style={styles.backImg} source={require('../../image/img_map_popup.png')} />
          </View>
        </View>

        <TouchableOpacity>
          <View>
            <Image style={styles.closeImgButton} source={require('../../image/ic_close_white.png')} />
          </View>
        </TouchableOpacity>
        <View style={styles.popupContainer}>
          <Image resizeMode='contain' style={styles.popupImg} source={require('../../image/img_popup_expire.png')} />
          <Text style={styles.redText}>{I18n.t('Offer expired')}</Text>
          <Text style={styles.descText}>{I18n.t('We are sorry the offer has exceeded 48h')}</Text>

          <View style={styles.redButtonView}>
            <TouchableOpacity onPress={this.goBack}>
              <View>
                <Text style={styles.button}>{I18n.t('Ok')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(CandidateOfferExpiredPopup);

AppRegistry.registerComponent('CandidateOfferExpiredPopup',() => CandidateOfferExpiredPopup);