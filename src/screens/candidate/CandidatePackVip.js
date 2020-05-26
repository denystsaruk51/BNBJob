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
import {styles} from '../../styles/candidatePackVip.style';
import StatusBar from '../../components/StatusBar';
import I18n from '../../locale-data/i18n';

class CandidatePackVip extends Component {
  constructor(props) {
    super(props);

    this.state={ selectedItem: 0};
    this.selectItemOne=this.selectItemOne.bind(this);
    this.selectItemTwo=this.selectItemTwo.bind(this);
    this.selectItemThree=this.selectItemThree.bind(this);
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

  selectItemOne(){
    this.setState({selectedItem: 1});
  }
  selectItemTwo(){
    this.setState({selectedItem: 2});
  }
  selectItemThree(){
    this.setState({selectedItem: 3});
  }

  render () {
    const {selectedItem} = this.state;
    let itemStyleOne, itemStyleTwo, itemStyleThree;
    if (selectedItem === 1) {
      itemStyleOne = styles.priceItemSelected;
      itemStyleTwo = styles.priceItem;
      itemStyleThree = styles.priceItem;
    } else if (selectedItem === 2) {
      itemStyleOne = styles.priceItem;
      itemStyleTwo = styles.priceItemSelected;
      itemStyleThree = styles.priceItem;
    } else if (selectedItem === 3){
      itemStyleOne = styles.priceItem;
      itemStyleTwo = styles.priceItem;
      itemStyleThree = styles.priceItemSelected;
    } else {
      itemStyleOne = styles.priceItem;
      itemStyleTwo = styles.priceItem;
      itemStyleThree = styles.priceItem;
    }

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
        <SafeAreaView/>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <TouchableOpacity style={styles.backImgView} onPress={this.goBack}>
            <View>
              <Image style={styles.backImgButton} source={require('../../image/ic_back.png')} />
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.topView}>
          <Image style={styles.mainImage} source={require('../../image/img_premium_pack_vip.png')} />
          <View style={styles.descriptionView}>
            <Text style={styles.subTitle}>{I18n.t('VIP Pack')}</Text>
            <Text style={styles.description}>{I18n.t('Add 5 photos')}</Text>
            <Text style={styles.description}>{I18n.t('Video 1: 30mn')}</Text>
            <Text style={styles.description}>{I18n.t('See the employer s details')}</Text>
          </View>
        </View>
        <View style={styles.bottomView}>          
          <TouchableOpacity style={itemStyleOne} onPress={this.selectItemOne}>
            <Image style={styles.priceItemImg} source={require('../../image/ic_vip_offer.png')} />
            <View style={styles.infoView}>
              <Text style={styles.offerTitle}>{I18n.t('Offer')}</Text>
              <Text style={styles.offerCount}>1 {I18n.t('month')}</Text>
            </View>
            <View style={styles.priceInfoView}>
              <Text style={styles.priceText}>19,00€</Text>
            </View>
          </TouchableOpacity>
        
          <TouchableOpacity style={itemStyleTwo} onPress={this.selectItemTwo}>
            <Image style={styles.priceItemImg} source={require('../../image/ic_vip_offer.png')} />
            <View style={styles.infoView}>
              <Text style={styles.offerTitle}>{I18n.t('Offer')}</Text>
              <Text style={styles.offerCount}>3 {I18n.t('month')}</Text>
            </View>
            <View style={styles.priceInfoView}>
              <Text style={styles.priceText}>48,45€</Text>
              <Text style={styles.priceDesc}>{I18n.t('15% discount')}</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={itemStyleThree} onPress={this.selectItemThree}>
            <Image style={styles.priceItemImg} source={require('../../image/ic_vip_offer.png')} />
            <View style={styles.infoView}>
              <Text style={styles.offerTitle}>{I18n.t('Offer')}</Text>
              <Text style={styles.offerCount}>6 {I18n.t('month')}</Text>
            </View>
            <View style={styles.priceInfoView}>
              <Text style={styles.priceText}>85,50€</Text>
              <Text style={styles.priceLastDesc}>{I18n.t('25% discount')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(CandidatePackVip);