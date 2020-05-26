import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {styles} from '../styles/HomeMapOffers.style';
import HomeMapOfferItem from './HomeMapOfferItem';

export default class HomeMapOffers extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render () {
    return (
      <ScrollView style={styles.homeMapOfferContainer} horizontal={true} directionalLockEnabled={false}>
        <HomeMapOfferItem/>
        <HomeMapOfferItem/>
      </ScrollView>
    );
  }
}
