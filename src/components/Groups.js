import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {styles} from '../styles/groups.style';
import GroupItem from './GroupItem';
import GroupCreateItem from './GroupCreateItem';

export default class Groups extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render () {
    return (
      <ScrollView style={styles.groupsContainer} horizontal={true} directionalLockEnabled={false}>
        <GroupCreateItem/>
        <GroupItem/>
        <GroupItem/>
      </ScrollView>
    );
  }
}
