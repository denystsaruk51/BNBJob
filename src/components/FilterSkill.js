import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity ,
} from 'react-native';

import {styles} from '../styles/FilterSkill.style';
import I18n from '../locale-data/i18n';
import { Actions } from 'react-native-router-flux';

export default class FilterSkill extends Component {
  constructor(props) {
    super(props);
  }

  goCandidateFilterField() {
    Actions.candidateFilterField({text: 'Candidate Filter Field'});
  }
  
  render() {
    return (      
      <View style={styles.roundRect}>
        <Text style={styles.titleText}>{I18n.t('Professional field')}</Text>

        <View style={styles.backImgView}>
          <TouchableOpacity onPress={this.goCandidateFilterField}>
              <Image style={styles.backImgButton} source={require('../image/ic_down.png')} />
          </TouchableOpacity>
        </View>
        
      </View>
    )
  }
}
