import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  AppRegistry,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../../styles/candidatePremium.style';
import StatusBar from '../../components/StatusBar';
import I18n from '../../locale-data/i18n';

class CandidatePremium extends Component {
  constructor(props) {
    super(props);
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

  gotoPackPremium(){
    Actions.candidatePackPremium({text: ''});
  }
  gotoPackVIP() {
    Actions.candidatePackVip({text: ''});
  }
  gotoPackGold() {
    Actions.candidatePackGold({text: ''});
  }
  
  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
        <SafeAreaView/>
        <View style={styles.scrollViewStyle}>
          <ScrollView showsVerticalScrollIndicator={true}>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <TouchableOpacity style={styles.backImgView} onPress={this.goBack}>
                <View>
                  <Image style={styles.backImgButton} source={require('../../image/ic_back.png')} />
                </View>
              </TouchableOpacity>
              <View style={styles.titleView}>
                <Text style={styles.title}>Premium</Text>
              </View>
            </View>
            
            <View style={styles.premiumItemContainer}>
              <View style={styles.priceLabel}>
                <Text style={styles.priceLabelText}>9,00€</Text>
              </View>
              <Image style={styles.mainImage} source={require('../../image/img_premium_pack_premium.png')} />
              <Text style={styles.subTitle}>{I18n.t('Premium Pack')}</Text>
              <Text style={styles.description}>{I18n.t('Add 4 photos')}</Text>
              <Text style={styles.description}>{I18n.t('1mn video')}</Text>
              <View style={styles.priceButtonView}>
                <TouchableOpacity onPress={this.gotoPackPremium}>
                  <Text style={styles.priceButtonText}>9.00€ {I18n.t('per month')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.premiumItemContainer}>
              <View style={styles.priceVIPLabel}>
                <Text style={styles.priceLabelText}>19,00€</Text>
              </View>
              <Image style={styles.mainImage} source={require('../../image/img_premium_pack_vip.png')} />
              <Text style={styles.subTitle}>{I18n.t('VIP Pack')}</Text>
              <Text style={styles.description}>{I18n.t('Add 5 photos')}</Text>
              <Text style={styles.description}>{I18n.t('Video 1: 30mn')}</Text>
              <Text style={styles.description}>{I18n.t('See the employer s details')}</Text>
              <View style={styles.priceVIPButtonView}>
                <TouchableOpacity onPress={this.gotoPackVIP}>
                  <Text style={styles.priceButtonText}>19,00€ {I18n.t('per month')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.premiumItemContainer}>
              <View style={styles.priceGoldLabel}>
                <Text style={styles.priceLabelText}>29,00€</Text>
              </View>
              <Image style={styles.mainImage} source={require('../../image/img_premium_pack_gold.png')} />
              <Text style={styles.subTitle}>{I18n.t('Gold Pack')}</Text>
              <Text style={styles.description}>{I18n.t('Add 6 photos')}</Text>
              <Text style={styles.description}>{I18n.t('2mn video')}</Text>
              <Text style={styles.description}>{I18n.t('See the employer s details')}</Text>
              <Text style={styles.description}>{I18n.t('Contact employer by chat')}</Text>
              <View style={styles.priceGoldButtonView}>
                <TouchableOpacity onPress={this.gotoPackGold}>
                  <Text style={styles.priceButtonText}>29,00€ {I18n.t('per month')}</Text>
                </TouchableOpacity>
              </View>
            </View>
            
          
            <View style={{height: 50}}></View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(CandidatePremium);

AppRegistry.registerComponent('CandidatePremium',() => CandidatePremium);