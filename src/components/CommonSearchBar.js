import React, { Component } from 'react';

import {
  View,
  Image,
  TextInput,
} from 'react-native';

import {styles} from '../styles/commonSearchBar.style';
import I18n from '../locale-data/i18n';

export default class CommonSearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChangeText=this.handleChangeText.bind(this);
  }
  handleChangeText(text){
    if(this.props.handleChangeText){
      this.props.handleChangeText(text);
    }
  }
  render () {
    return (
      <View style={styles.searchBarContainer}>
        <Image style={styles.searchIcon} source={require('../image/ic_search.png')} />
        <TextInput 
          style={styles.searchText} 
          placeholder={I18n.t('Search')}
          onChangeText={(text) => {this.handleChangeText(text)}}
          />
      </View>
    );
  }
}
