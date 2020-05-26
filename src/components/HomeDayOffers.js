import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {styles} from '../styles/HomeDayOffers.style';
import HomeDayOfferItem from './HomeDayOfferItem';

export default class HomeDayOffers extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render () {
    return (
      <ScrollView style={styles.homeDayOffersContainer} horizontal={true} directionalLockEnabled={false}>
        <HomeDayOfferItem/>
        <HomeDayOfferItem/>
      </ScrollView>
    );
  }
}
