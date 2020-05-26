import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {styles} from '../styles/LiveOffers.style';
import LiveOfferItem from './LiveOfferItem';

export default class LiveOffers extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render () {
    return (
      <ScrollView style={styles.liveOffersContainer} horizontal={true} directionalLockEnabled={false}>
        <LiveOfferItem/>
        <LiveOfferItem/>
        <LiveOfferItem/>
      </ScrollView>
    );
  }
}
