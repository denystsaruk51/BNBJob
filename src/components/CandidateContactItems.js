import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {styles} from '../styles/CandidateContactItems.style';
import CandidateContactItem from './CandidateContactItem';
import CandidateCreateContactItem from './CandidateCreateContactItem';

export default class CandidateContactItems extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <ScrollView style={styles.contactItemsContainer} horizontal={true} directionalLockEnabled={false}>
        <CandidateCreateContactItem />
        <CandidateContactItem />
        <CandidateContactItem />
        <CandidateContactItem />
        <CandidateContactItem />
        <CandidateContactItem />
      </ScrollView>
    );
  }
}
