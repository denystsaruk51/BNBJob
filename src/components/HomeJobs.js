import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {styles} from '../styles/HomeJobs.style';
import HomeJobItem from './HomeJobItem';

export default class HomeJobs extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render () {
    return (
      <ScrollView style={styles.homeJobsContainer} horizontal={true} directionalLockEnabled={false}>
        <HomeJobItem/>
        <HomeJobItem/>
      </ScrollView>
    );
  }
}
