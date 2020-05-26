import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../styles/groupItem.style';
import UserAvatar from './UserAvatar';

export default class GroupItem extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }

  render () {
    return (
      <View style={styles.groupItemContainer}>
        <Image style={styles.mainImg} source={require('../image/sample_group.png')} />
        <Image style={styles.bgTextImg} source={require('../image/bg_gradient.png')} />
        <View style={styles.avatarView}>
          <UserAvatar/>
        </View>
        <View style={styles.descGroupView}>
          <Text style={styles.descText} numberOfLines={1}>Groupe</Text>
          <Text style={styles.nameText} numberOfLines={1}>Atelier De photo</Text>
          <Text style={styles.descText} numberOfLines={1}>Paris, France, Aquitai</Text>  
        </View>
      </View>
    );
  }
}
