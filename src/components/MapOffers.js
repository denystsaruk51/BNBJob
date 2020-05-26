import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {styles} from '../styles/MapOffers.style';
import MapOfferItem from './MapOfferItem';

export default class MapOffers extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render () {
    return (
      <ScrollView style={styles.mapOfferContainer} horizontal={true} directionalLockEnabled={false}>
        <MapOfferItem/>
        <MapOfferItem/>
        <MapOfferItem/>
        <MapOfferItem/>
        <MapOfferItem/>
      </ScrollView>
    );
  }
}
