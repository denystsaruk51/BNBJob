import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity ,
} from 'react-native';

import {styles} from '../styles/inputField.style';
import I18n from '../locale-data/i18n';

export default class InputField extends Component{
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
    if(type === 'email'){
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(value) === false) {
        this.setState({isValid: false, value});
        if(this.props.isValidEmail){
          this.props.isValidEmail(false);
        }
      } else {
        this.setState({isValid: true, value});
        if(this.props.isValidEmail){
          this.props.isValidEmail(true);
        }
      }
    } else if (type === 'password'){
      if(value.length < 6){
        this.setState({isValid: false, value});
        if(this.props.isValidPassword){
          this.props.isValidPassword(false);
        }
      } else {
        this.setState({isValid: true, value});
        if(this.props.isValidPassword){
          this.props.isValidPassword(true);
        }
      }
    } else if (type === 'firstName' || type === 'lastName'){
      if(value.length === 0){
        this.setState({isValid: false, value});
      } else {
        this.setState({isValid: true, value});
      }
    } else if (type === 'phone'){
      let phonenum = value.replace(" ", '').replace("-", '');
      if(isNaN(phonenum)){
        this.setState({isValid: false, value});
      } else {
        this.setState({isValid: true, value});
      }
    } else {

    }

    this.props.onChangeValue(value);
  }

  renderIcon(){
    const { type } = this.props;

    if(type === 'email'){
      if(this.state.isValid){
        return (
          <View>
            <Image style={styles.iconImg} source={require('../image/ic_email_active.png')} />
          </View>
        );
      } else {
        return (
          <View>
            <Image style={styles.iconImg} source={require('../image/ic_email.png')} />
          </View>
        );
      }
    } else if (type === 'password'){
      if(this.state.isValid){
        return (
          <View>
            <Image style={styles.iconImg} source={require('../image/ic_password_active.png')} />
          </View>
        );
      } else {
        return (
          <View>
            <Image style={styles.iconImg} source={require('../image/ic_password.png')} />
          </View>
        );
      }
    } else if (type === 'firstName'){
      if(this.state.isValid){
        return (
          <View>
            <Image style={styles.iconImg} source={require('../image/ic_firstname_active.png')} />
          </View>
        );
      } else {
        return (
          <View>
            <Image style={styles.iconImg} source={require('../image/ic_firstname.png')} />
          </View>
        );
      }
    } else if (type === 'lastName'){
      if(this.state.isValid){
        return (
          <View>
            <Image style={styles.iconImg} source={require('../image/ic_lastname_active.png')} />
          </View>
        );
      } else {
        return (
          <View>
            <Image style={styles.iconImg} source={require('../image/ic_lastname.png')} />
          </View>
        );
      }
    } else if (type === 'phone'){
      return (
        <View>
          <Image style={styles.iconImg} source={require('../image/ic_phone.png')} />
        </View>
      );
    }
    if(this.state.isValid){
      return (
        <View>
          <Image style={styles.iconImg} source={require('../image/ic_email_active.png')} />
        </View>
      );
    }
    return (
      <View>
        <Image style={styles.iconImg} source={require('../image/ic_email.png')} />
      </View>
    );      
  }
  renderStateIcon(){
    const { type } = this.props;

    if(type === 'email' || type === 'firstName' || type === 'lastName'){
      if(this.state.isValid){
        return(
          <Image style={styles.stateImg} source={require('../image/ic_checked.png')} />
        );
      } else {
        return(
          <View></View>
        );
      }
    } else if (type === 'password'){
      if(this.state.isValid){
        return(
          <Image style={styles.stateImg} source={require('../image/ic_checked.png')} />
        );
      } else {
        return(
          <Image style={styles.stateImg} source={require('../image/ic_show_password.png')} />
        );
      }
    } else if (type === 'phone'){
      if(this.state.isValid){
        return(
          <Image style={styles.stateImg} source={require('../image/ic_checked.png')} />
        );
      } else {
        return(
          <Image style={styles.stateImg} source={require('../image/ic_cancel.png')} />
        );
      }
    } else {
      if(this.state.isValid){
        return(
          <Image style={styles.stateImg} source={require('../image/ic_checked.png')} />
        );
      } else {
        return(
          <View></View>
        );
      }
    }
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

    if(type === 'email'){
      return (
        <Text style={styles.typeText}>{I18n.t('E-mail')}</Text>
      );
    
    } else if (type === 'password'){
      return(
        <Text style={styles.typeText}>{I18n.t('Password')}</Text>
      );
    } else if (type === 'firstName'){
      return(
        <Text style={styles.typeText}>{I18n.t('First Name')}</Text>
      );
    } else if (type === 'lastName'){
      return(
        <Text style={styles.typeText}>{I18n.t('Last Name')}</Text>
      );
    } else if (type === 'phone'){
      return(
        <Text style={styles.typeText}>{I18n.t('Phone number')}</Text>
      );
    } 
    return (
      <Text style={styles.typeText}>{I18n.t('E-mail')}</Text>
    );      
  }
  renderInputContent(){
    const { type, value } = this.props;

    let txtValue = '';
    if( value != null) {
      txtValue = value;
    }
    let editable = true;
    if(this.props.isFacebook){
      editable = false;
    }

    if (type === 'password'){
      return(
        <TextInput style={styles.valueText} 
            onFocus={this.onFocusGet}
            onBlur={this.onFocuseLost}
            onChangeText={(text) => {this.textValue = text; this.isValid()}}
            secureTextEntry={true}
            value = {txtValue}
            editable={editable}/>
      );
    } else if (type === 'phone'){
      return(
        <TextInput style={styles.valueText} 
            keyboardType = 'phone-pad'
            onFocus={this.onFocusGet}
            onBlur={this.onFocuseLost}
            onChangeText={(text) => {this.textValue = text; this.isValid()}}
            value = {txtValue}
            />
      );
    } else if (type === 'email'){
      return(
        <TextInput style={styles.valueText} 
            keyboardType = 'email-address'
            onFocus={this.onFocusGet}
            onBlur={this.onFocuseLost}
            onChangeText={(text) => {this.textValue = text; this.isValid()}}
            value = {txtValue}
            editable={editable}/>
      );
    } 
    
    return(
      <TextInput style={styles.valueText} 
            onFocus={this.onFocusGet}
            onBlur={this.onFocuseLost}
            onChangeText={(text) => {this.textValue = text; this.isValid()}}
            value = {txtValue}
            editable={editable}/>
    );
  }
  render(){
    const icon = this.renderIcon();
    const stateIcon = this.renderStateIcon();
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
          {stateIcon}
        </View>
        {bottomLine}
      </View>
    );
  }
}