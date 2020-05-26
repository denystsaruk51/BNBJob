import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableHighlight ,
} from 'react-native';
import {styles} from '../styles/touchableSubField.style';

export default class TouchableSubField extends Component{
  constructor(props) {
    super(props);
    this.handleItemClick=this.handleItemClick.bind(this);
  }

  renderTypeIcon(){
    const { type } = this.props;

    if(type === 'title') {
      return(
        <Image style={styles.recruiterImg} source={require('../image/ic_back_white.png')} />
      );
    } else {
      return(
        <View></View>
      );
    }
  }

  handleItemClick() {
    const { index, data } = this.props;
    if(this.props.handleItemClick)
      this.props.handleItemClick(data, index);
  }
  
  render(){
    const { typeText, selected, data } = this.props;
    const typeIconImg = this.renderTypeIcon();

    return (
      <TouchableHighlight
          onPress={this.handleItemClick}
          underlayColor={'#ffffff'} >
          <View style={styles.fieldRow}>
            <View style={styles.contentView}>
              {typeIconImg}
              <Text style={styles.fontAvenir}>{typeText}</Text>
              <Image style={[styles.fieldImg]} source={selected ?
                      require('../image/ic_check_round_active.png'):
                      require('../image/ic_check_round.png')} />
            </View>
            <View style={styles.bottomLineView}></View>
          </View>
      </TouchableHighlight>
    );
  }
}