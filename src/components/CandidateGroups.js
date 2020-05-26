import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {styles} from '../styles/candidateGroups.style';
import CandidateGroupItem from './CandidateGroupItem';

export default class CandidateGroups extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render () {
    return (
      <ScrollView style={styles.groupsContainer} directionalLockEnabled={false}>
        <CandidateGroupItem/>
        <CandidateGroupItem/>
      </ScrollView>
    );
  }
}
