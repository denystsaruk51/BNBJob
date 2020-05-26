import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity ,
} from 'react-native';

import {styles} from '../styles/inputFieldRecruiter.style';
import I18n from '../locale-data/i18n';

export default class InputFieldRecruiter extends Component{
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

    const { type } = this.props;

    if (type === 'siret'){
      if(isNaN(value)){
        this.setState({isValid: false, value});
      } else {
        this.setState({isValid: true, value});
      }
    } else {
      if(value.length === 0){
        this.setState({isValid: false, value});
      } else {
        this.setState({isValid: true, value});
      }
    }
    
    this.props.onChangeValue(value);
  }

  renderIcon(){
    const { type } = this.props;

    if(type === 'organization'){
        return (
          <View>
            <Image style={styles.iconImg} source={require('../image/ic_organiztion.png')} />
          </View>
        );
    } else if (type === 'enterprise'){
        return (
          <View>
            <Image style={styles.iconImg} source={require('../image/ic_enterprise.png')} />
          </View>
        );
    } else if (type === 'association'){
        return (
          <View>
            <Image style={styles.iconImg} source={require('../image/ic_association.png')} />
          </View>
        );
    } else if (type === 'siret'){
        return (
          <View>
            <Image style={styles.iconImg} source={require('../image/ic_siret.png')} />
          </View>
        );
    }

    return (
      <View>
        <Image style={styles.iconImg} source={require('../image/ic_association.png')} />
      </View>
    );      
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
  renderTitle() {
    const { type } = this.props;

    if(type === 'organization'){
      return (
        <Text style={styles.typeText}>{I18n.t('Name of the organization')}</Text>
      );
    
    } else if (type === 'enterprise'){
      return(
        <Text style={styles.typeText}>{I18n.t('Name of the company')}</Text>
      );
    } else if (type === 'association'){
      return(
        <Text style={styles.typeText}>{I18n.t('Name of the association')}</Text>
      );
    } else if (type === 'siret'){
      return(
        <Text style={styles.typeText}>{I18n.t('Number Siret')}</Text>
      );
    }
     
    return (
      <Text style={styles.typeText}>{I18n.t('Number Siret')}</Text>
    );      
  }
  renderInputContent(){
    const { type } = this.props;

    if (type === 'siret'){
      return(
        <TextInput style={styles.valueText} 
            onFocus={this.onFocusGet}
            onBlur={this.onFocuseLost}
            keyboardType = 'numeric'
            onChangeText={(text) => {this.textValue = text; this.isValid()}}
            />
      );
    } else {
      return(
        <TextInput style={styles.valueText} 
        onFocus={this.onFocusGet}
        onBlur={this.onFocuseLost}
        onChangeText={(text) => {this.textValue = text; this.isValid()}}
        />);
    }
  }
  render(){
    const icon = this.renderIcon();
    const bottomLine = this.renderBottomLine();
    const title = this.renderTitle();
    const content = this.renderInputContent();

    return(
      <View style={styles.inputFieldContainer}>
        <View style={styles.topContainer}>
          {icon}
          {title}
        </View>
        <View style={styles.inputContainer}>
          {content}
        </View>
        {bottomLine}
      </View>
    );
  }
}