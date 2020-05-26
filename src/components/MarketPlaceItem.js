import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../styles/marketPlaceItem.style';

export default class MarketPlaceItem extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }

  render () {
    return (
      <View style={styles.marketPlaceItemContainer}>
        <Image style={styles.mainImg} source={require('../image/sample_marketplace.png')} />
        <Image style={styles.bgTextImg} source={require('../image/bg_gradient.png')} />
        <Text style={styles.nameText} numberOfLines={1}>PARROT</Text>
        <Text style={styles.descText} numberOfLines={1}>398€</Text>
        <Image style={styles.loveImg} source={require('../image/ic_love_black.png')} />
      </View>
    );
  }
}
