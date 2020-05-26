import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {styles} from '../styles/knowThem.style';
import KnowThemItem from './KnowThemItem';

export default class KnowThem extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render () {
    return (
      <ScrollView style={styles.knowThemContainer} horizontal={true} directionalLockEnabled={false}>
        <KnowThemItem/>
        <KnowThemItem/>
        <KnowThemItem/>
      </ScrollView>
    );
  }
}
