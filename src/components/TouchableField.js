import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/touchableField.style';

export default class TouchableField extends Component{
  constructor(props) {
    super(props);
    this.gotoCandidateSubField = this.gotoCandidateSubField.bind(this);
    this.gotoRecruiterSubField = this.gotoRecruiterSubField.bind(this);
  }

  gotoCandidateSubField() {
    const { index, data } = this.props;
    this.props.handleItemClick(data, index);
  }

  gotoRecruiterSubField() {
    const { index, data } = this.props;
    this.props.handleItemClick(data, index);
  }

  gotoFilterSubField() {
    Actions.candidateFilterSubField({text: 'candidateFilterSubField'});
  }

  renderContent() {
    const { typeText, selected, data } = this.props;
    return (
        <View style={styles.centerAlign}>
          <View style={styles.row}>
            <Image style={styles.fieldImg} source={selected ? require('../image/ic_professional_item_active.png'):
              require('../image/ic_professional_item.png')} />
            
            <Text style={styles.typeText}>{typeText}</Text>
            <Image style={styles.fieldRightImg} source={selected ? require('../image/ic_check_round_active.png'):
              require('../image/ic_check_round.png')} />
          </View>
        </View>
    );
  }

  render(){
    const { selected, data, isFilter, typeBorderColor, typeUser } = this.props;

    const renderContent = this.renderContent();

    if (isFilter === 'true') {
      return (
        <TouchableHighlight
            onPress={this.gotoFilterSubField}
            underlayColor={'#ffffff'} >
            {renderContent}
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableOpacity onPress={typeUser ==='candidate' ? this.gotoCandidateSubField : this.gotoRecruiterSubField}>
          {renderContent}
        </TouchableOpacity>
      );
    }
    
  }
}