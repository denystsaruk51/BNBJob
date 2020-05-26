import React, { Component } from 'react';

import {
  View,
} from 'react-native';

import {styles} from '../styles/allLatestOfferRow.style';
import AllLatestOfferItem from './AllLatestOfferItem';

export default class AllLatestOffersRow extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render () {
    return (
      <View style={styles.offerContainer}>
        <AllLatestOfferItem/>
        <AllLatestOfferItem/>
      </View>
    );
  }
}
