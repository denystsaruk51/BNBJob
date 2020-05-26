import React, { Component } from 'react';

import {
  View,
  TextInput,
} from 'react-native';

import {styles} from '../styles/smsField.style';

export default class SmsField extends Component{
  constructor(props) {
    super(props);

    this.state = {isValid: false, isGotFocus: false, value:''}
    this.isValid = this.isValid.bind(this);
    this.onFocusGet = this.onFocusGet.bind(this);
    this.onFocuseLost = this.onFocuseLost.bind(this);
    this.textValue='';
  }

  onFocusGet() {
    this.setState({isGotFocus: true});
  }
  onFocuseLost() {
    this.setState({isGotFocus: false});
  }
  isValid(){
    const value = this.textValue;
    // this.setState(value);

    if(isNaN(value)){
      this.setState({isValid: false, value});
    } else {
      this.setState({isValid: true, value});
    }

    this.props.onChangeValue(value);
  }

  renderBottomLine() {
    if(this.state.isGotFocus){
      return (
        <View style={styles.bottomLineViewActive}></View>
      );
    } else {
      return (
        <View style={styles.bottomLineView}></View>
      );
    }
  }

  renderInputContent(){
    return(
      <TextInput style={styles.valueSms}
        maxLength={1}
        keyboardType = 'numeric'
        onFocus={this.onFocusGet}
        onBlur={this.onFocuseLost}
        onChangeText={(text) => {this.textValue = text; this.isValid()}}
      />
    );
  }
  render(){
    const bottomLine = this.renderBottomLine();
    const content = this.renderInputContent();

    return(
      <View style={styles.inputFieldContainer}>
        {content}
        {bottomLine}
      </View>
    );
  }
}