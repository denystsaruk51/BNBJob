import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {styles} from '../styles/marketPlaces.style';
import MarketPlaceItem from './MarketPlaceItem';

export default class MarketPlaces extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render () {
    return (
      <ScrollView style={styles.marketPlacesContainer} horizontal={true} directionalLockEnabled={false}>
        <MarketPlaceItem/>
        <MarketPlaceItem/>
        <MarketPlaceItem/>
      </ScrollView>
    );
  }
}
