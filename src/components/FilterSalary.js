import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity ,
} from 'react-native';

import {styles} from '../styles/FilterSalary.style';
import I18n from '../locale-data/i18n';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default class FilterSalary extends Component {
  constructor(props) {
    super(props);
    this.state = {values: [1000, 1500],};
  }

  multiSliderValuesChange = (values) => {
    this.setState({
        values:values,
    });
  }
  
  render() {
    return (
      <View style={styles.roundRect}>
        <Text style={styles.titleText}>{I18n.t('Salary')}</Text>
        <Text style={styles.priceText}>{this.state.values[0]}€ - {this.state.values[1]}€</Text>
        <View style={styles.multiSlider}>
          <MultiSlider
              values={[this.state.values[0], this.state.values[1]]}
              onValuesChange={this.multiSliderValuesChange}
              min={0}
              max={2000}
              step={50}
          />
        </View>
      </View>
    )
  }
}
