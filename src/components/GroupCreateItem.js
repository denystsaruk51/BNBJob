import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../styles/groupCreateItem.style';
import I18n from '../locale-data/i18n';

export default class GroupCreateItem extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }

  render () {
    return (
      <View style={styles.groupCreateItemContainer}>
        <TouchableOpacity>
          <Image style={styles.mainImg} source={require('../image/img_create_group.png')} />
          <Text style={styles.nameText} numberOfLines={1}>{I18n.t('Create a group')}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
