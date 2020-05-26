import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {styles} from '../styles/closeCandidates.style';
import CloseCandidateItem from './CloseCandidateItem';

export default class CloseCandidates extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render () {
    return (
      <ScrollView style={styles.closeCandidatesContainer} horizontal={true} directionalLockEnabled={false}>
        <CloseCandidateItem/>
        <CloseCandidateItem/>
        <CloseCandidateItem/>
        <CloseCandidateItem/>
        <CloseCandidateItem/>
      </ScrollView>
    );
  }
}
