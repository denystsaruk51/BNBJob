import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
} from 'react-native';

import {styles} from '../styles/candidateGroupItem.style';
import UserAvatar from './UserAvatar';

export default class CandidateGroupItem extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { group, index } = this.props;

    return (
      <View style={styles.groupItemContainer}>
        <Image style={styles.mainImg} source={require('../image/sample_group.png')} />
        <Image style={styles.bgTextImg} source={require('../image/bg_gradient.png')} />
        <View style={styles.avatarView}>
          <UserAvatar/>
        </View>
        <View style={styles.descGroupView}>
          <Text style={styles.descText} numberOfLines={1}>Groupe</Text>
          <Text style={styles.nameText} numberOfLines={1}>{group.title}</Text>
          <Text style={styles.descText} numberOfLines={1}>{group.description}</Text>  
        </View>
      </View>
    );
  }
}
