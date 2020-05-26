import React, { Component } from 'react';

import {
  View,
  Image,
  TextInput,
} from 'react-native';

import {styles} from '../styles/titleSearchBar.style';
import I18n from '../locale-data/i18n';

export default class HomeSearchBar extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <View style={styles.searchBarContainer}>
        <Image style={styles.searchIcon} source={require('../image/ic_search.png')} />
        <TextInput style={styles.searchText} placeholder={I18n.t('Search')}/>
        <Image style={styles.filterTool} source={require('../image/ic_search_tool.png')} />
      </View>
    );
  }
}
