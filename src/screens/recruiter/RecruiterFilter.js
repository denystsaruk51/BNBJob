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
import SwitchToggle from 'react-native-switch-toggle';

import {styles} from '../../styles/recruiterFilter.style';

import I18n from '../../locale-data/i18n';

import StatusBar from '../../components/StatusBar';
import FilterSkill from '../../components/FilterSkill';
import FilterLocation from '../../components/FilterLocation';
import FilterCountry from '../../components/FilterCountry';

class RecruiterFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switchOn1: false,
      switchOn2: false,
    };
  }

  static navigationOptions = {
    header: null ,
  };

  goBack(){
    Actions.pop();
  }

  showMapOffers() {
    
  }

  onPress1 = () => {
    this.setState({ switchOn1: !this.state.switchOn1 });
  }
  onPress2 = () => {
    this.setState({ switchOn2: !this.state.switchOn2 });
  }
  
  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
        <SafeAreaView />

        <View style={styles.greyContainer}>

        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={styles.row}>
            <Text style={styles.title}>{I18n.t('Filters')}</Text>
            <View style={styles.backImgView}>
            <TouchableOpacity  onPress={this.goBack}>
                <Image style={styles.backImgButton} source={require('../../image/ic_back.png')} />
            </TouchableOpacity>
            </View>
          </View>

          <View style={{height: 30}}></View>
          <View style={styles.roundRectWhite}>
            <Text style={styles.subTitleText}>{I18n.t('profiles')}</Text>
            <View style={styles.profileItemView}>
              <View style={styles.rightView}>
                <SwitchToggle
                  containerStyle={styles.switchContainerView}
                  circleStyle={styles.switchCircleView}
                  switchOn={this.state.switchOn1}
                  onPress={this.onPress1}
                  circleColorOff='white'
                  circleColorOn='green'
                  duration={500}
                />
              </View>
              <Text style={styles.commonLabel}>{I18n.t('Online')}</Text>
            </View>
            <View style={styles.profileItemView}>
              <View style={styles.rightView}>
                <SwitchToggle
                  containerStyle={styles.switchContainerView}
                  circleStyle={styles.switchCircleView}
                  switchOn={this.state.switchOn2}
                  onPress={this.onPress2}
                  circleColorOff='white'
                  circleColorOn='green'
                  duration={500}
                />
              </View>
              <Text style={styles.commonLabel}>{I18n.t('With video')}</Text>
            </View>
          </View>

          <View style={styles.roundRectWhite}>
            <Text style={styles.subTitleText}>{I18n.t('Experience')}</Text>
            <View style={styles.experienceContentsView}>
              <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
                <View style={styles.experienceItemTextBlueBack}>
                  <Text style={styles.experienceItemTextWhite}>{I18n.t('All')}</Text>
                </View>

                <View style={styles.experienceItemTextBorder}>
                  <Text style={styles.experienceItemText}>- 1 {I18n.t('year')}</Text>
                </View>

                <View style={styles.experienceItemTextBorder}>
                  <Text style={styles.experienceItemText}>1 - 2 {I18n.t('years')}</Text>
                </View>
              </View>

              <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
                <View style={styles.experienceItemTextBorder}>
                  <Text style={styles.experienceItemText}>3 - 5 {I18n.t('years')}</Text>
                </View>
              
                <View style={styles.experienceItemTextBorder}>
                  <Text style={styles.experienceItemText}>6 - 10 {I18n.t('years')}</Text>
                </View>
              
                <View style={styles.experienceItemTextBorder}>
                  <Text style={styles.experienceItemText}>+ 11 {I18n.t('years')}</Text>
                </View>
              </View>
            </View>
          </View>

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
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(RecruiterFilter);


AppRegistry.registerComponent('RecruiterFilter',() => RecruiterFilter);