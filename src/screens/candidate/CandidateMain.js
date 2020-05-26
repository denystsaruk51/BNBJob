import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Sidebar from 'react-native-sidebar';

import {styles} from '../../styles/candidateMain.style';
import StatusBar from '../../components/StatusBar';
import HomeTabBar from '../../components/HomeTabBar';
import CandidateSideProfile from './CandidateSideProfile';
import CandidateFriends from './CandidateFriends';
import CandidateFriendsHome from './CandidateFriendsHome';
import CandidateHome from './CandidateHome';
import Videos from '../Videos';

class CandidateMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab : 'Home',
    }

    this.handleHomeTabPressed=this.handleHomeTabPressed.bind(this);
    this.handleFriendsTabPressed=this.handleFriendsTabPressed.bind(this);
    this.handleVideoTabPressed=this.handleVideoTabPressed.bind(this);
    this.handlePressProfile=this.handlePressProfile.bind(this);
    this.handleCloseProfile=this.handleCloseProfile.bind(this);
    this.renderContent=this.renderContent.bind(this);
  }
  static propTypes = {
    routes: PropTypes.object,
  };

  static navigationOptions = {
    header: null ,
  };

  handleHomeTabPressed() {
    this.setState({selectedTab : 'Home'});
  }
  handleFriendsTabPressed() {
    this.setState({selectedTab : 'Friends'});
    this._drawer.close();
  }
  handleVideoTabPressed() {
    this.setState({selectedTab : 'Video'});
  }
  handlePressProfile() {
    this._drawer.open('right');
  }
  handleCloseProfile() {
    setTimeout(() => {
      this._drawer.close();
    }, 200);
  }
  renderContent() {
    const { selectedTab} =  this.state;
    if( selectedTab === 'Home'){
      return ( <CandidateHome/>);
    } else if( selectedTab === 'Friends') {
      return ( <CandidateFriends/>);
    } else if( selectedTab === 'Video') {
      return ( <Videos/>);
    }
  }
  render () {
    const { selectedTab} =  this.state;
    const contents = this.renderContent();

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <Sidebar
          ref={(ref) => this._drawer = ref}
          rightSidebar={ 
            <CandidateSideProfile
              onCloseProfile={this.handleCloseProfile}
              onPressFriends={this.handleFriendsTabPressed}
            />
          }
          style={{ flex: 1, backgroundColor: '#ffffff' }}>

          { contents }
          
        </Sidebar>
        <HomeTabBar
          selectedTab={ selectedTab }
          onPressHome={this.handleHomeTabPressed}
          onPressFriends={this.handleFriendsTabPressed}
          onPressVideo={this.handleVideoTabPressed}
          onPressProfile={this.handlePressProfile}
        />
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(CandidateMain);