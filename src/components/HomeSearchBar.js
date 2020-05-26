import React, { Component } from 'react';

import {
  View,
  Image,
  TextInput,
  TouchableOpacity ,
} from 'react-native';

import {styles} from '../styles/homeSearchBar.style';
import I18n from '../locale-data/i18n';
import { Actions } from 'react-native-router-flux';

export default class HomeSearchBar extends Component {
  constructor(props) {
    super(props);

    this.goFilter=this.goFilter.bind(this);
  }
  componentDidMount() {
    const { selectedTab } = this.props;
  }

  goFilter(){
    const { userType } = this.props;
    if(userType === 'Recruiter'){
      Actions.recruiterFilter({text: 'Recruiter Filter'});
    } else {
      Actions.candidateFilter({text: 'Candidate Filter'});
    }
  }

  render () {
    return (
      <View style={styles.searchBarContainer}>
        <Image style={styles.searchIcon} source={require('../image/ic_search.png')} />
        <TextInput style={styles.searchText} placeholder={I18n.t('Search')}/>

        <View style={styles.filterTool}>
          <TouchableOpacity  onPress={this.goFilter}>
            <View>
            <Image style={styles.filterIcon} source={require('../image/ic_search_tool.png')} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
