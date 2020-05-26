import React, { Component } from 'react';

import {
  View,
  Image,
  TextInput,
} from 'react-native';

import {styles} from '../styles/candidateSearchBar.style';

export default class CandidateSearchBar extends Component {
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
          onChangeText={(text) => {this.handleChangeText(text)}}
        />
      </View>
    );
  }
}
