import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {styles} from '../styles/HomeResearchItems.style';
import HomeResearchItem from './HomeResearchItem';

export default class HomeResearchItems extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render () {
    return (
      <ScrollView style={styles.homeMapOfferContainer} horizontal={true} directionalLockEnabled={false}>
        <HomeResearchItem/>
        <HomeResearchItem/>
      </ScrollView>
    );
  }
}
