import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {styles} from '../styles/offers.style';
import OfferItem from './OfferItem';

export default class CloseCandidates extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render () {
    return (
      <ScrollView style={styles.offerContainer} horizontal={true} directionalLockEnabled={false}>
        <OfferItem/>
        <OfferItem/>
        <OfferItem/>
        <OfferItem/>
        <OfferItem/>
      </ScrollView>
    );
  }
}
