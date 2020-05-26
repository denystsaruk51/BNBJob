import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {styles} from '../styles/HomeCountryOffers.style';
import HomeCountryOfferItem from './HomeCountryOfferItem';

export default class HomeCountryOffers extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render () {
    return (
      <ScrollView style={styles.homeCountryOfferContainer} horizontal={true} directionalLockEnabled={false}>
        <HomeCountryOfferItem/>
        <HomeCountryOfferItem/>
      </ScrollView>
    );
  }
}
