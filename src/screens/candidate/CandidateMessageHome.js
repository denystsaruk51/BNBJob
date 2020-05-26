import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  AsyncStorage,
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../../styles/candidateMessageHome.style';
import Loader from 'react-native-modal-loader';

import I18n from '../../locale-data/i18n';
import StatusBar from '../../components/StatusBar';
import CandidateContactItems from '../../components/CandidateContactItems';
import CandidateContact from '../../components/CandidateContact';
import { GetChats } from '../../services/Common';
import Config from '../../services/Config';

class CandidateMessageHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTab: 'friend',
      friendCount: 0,
      enterpriseCount: 0,
      groupCount: 0,
      friends: [],
      enterprises: [],
      groups: [],
      token: '',
    }

    this.renderFriendItem = this.renderFriendItem.bind(this);
    this.renderEnterpriseItem = this.renderEnterpriseItem.bind(this);
    this.renderGroupItem = this.renderGroupItem.bind(this);
    this.renderFriendList = this.renderFriendList.bind(this);

    this.renderEnterprisesList=this.renderEnterprisesList.bind(this);
    this.renderGroupList=this.renderGroupList.bind(this);
    this.renderEmptyView=this.renderEmptyView.bind(this);
    this.getChats=this.getChats.bind(this);
  }

  async componentDidMount() {
    // AsyncStorage.getItem(Config.STORAGE_USER_ID_KEY)
    // .then((token) => {
    //   alert(token);
    //   this.setState({token});
    //   this.props.navigation.addListener('willFocus', this.load)
    // });
    this.getChats();
  }
  // load(){
  //   alert('aaaaaaaaaaaaaaaa');
  //   this.getChats();
  // }
  async getChats() {
    const token = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    this.setState({ isLoading: true });

    GetChats(token)
    .then((res) => {
      this.setState({ isLoading: false });

      if(res.success === true) {
        const data = res.data;

        const friendList = Object.keys(data.friends).map(_id => ({
          ...data.friends[_id],
          id: _id,
        }));
        this.setState({ 
          friends: friendList,
          friendCount: friendList.length
        });

        const enterpriseList = Object.keys(data.enterprises).map(_id => ({
          ...data.enterprises[_id],
          id: _id,
        }));
        this.setState({ 
          enterprises: enterpriseList,
          enterpriseCount: enterpriseList.length
        });

        const groupList = Object.keys(data.groups).map(_id => ({
          ...data.groups[_id],
          id: _id,
        }));
        this.setState({ 
          groups: groupList,
          groupCount: groupList.length
        });
      } else {
        alert(JSON.stringify(res.error));
      }
    })
    .catch((reason) => {
      this.setState({ isLoading: false });
      alert(reason);
    });
  }

  static navigationOptions = {
    header: null,
  };

  goBack(){
    Actions.pop();
  }

  showFriend = () => {
    this.setState({showTab: 'friend'});
  }

  showEnterprise = () => {
    this.setState({showTab: 'enterprise'});
  }

  showGroup = () => {
    this.setState({showTab: 'group'});
  }

  renderFriendList() {
    const { friends } = this.state;
    const fieldsContainerContent = [];

    if(friends && friends.length > 0){
      friends.forEach((item, index) => {
        fieldsContainerContent.push(
          this.renderFriendItem(item, index)
        );
      });
      return fieldsContainerContent;
    } else {
      return this.renderEmptyView();
    }
  }

  renderEnterprisesList() {
    const { enterprises } = this.state;
    const fieldsContainerContent = [];

    if(enterprises && enterprises.length){
      enterprises.forEach((item, index) => {
        fieldsContainerContent.push(
          this.renderEnterpriseItem(item, index)
        );
      });

      return fieldsContainerContent;
    } else {
      return this.renderEmptyView();
    }
  }

  renderGroupList() {
    const { groups } = this.state;
    const fieldsContainerContent = [];

    if(groups && groups.length > 0){
      groups.forEach((item, index) => {
        fieldsContainerContent.push(
          this.renderGroupItem(item, index)
        );
      });

      return fieldsContainerContent;
    } else {
      return this.renderEmptyView();
    }
  }
  renderEmptyView() {
    return (
      <View>
        <View style={styles.backImg}>
          <Image source={require('../../image/img_message_home.png')} />
        </View>

        <View style={styles.descTextView}>
          <Text style={styles.descText}>{I18n.t('You do not have group participate')}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <View style={styles.buttonRowPurple}>
              <Text style={styles.longText}>{I18n.t('Search')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  renderFriendItem(friend, index) {
    if (friend.unreadMessageCount == 0) {
      return (
        <CandidateContact
          type='seen'
          missingNum= {friend.unreadMessageCount}
          friendName={friend.first_name}
          message={friend.lastMessage}
          date={friend.lastDate}
          friendId={friend._id}
          chat_room_id={friend.chat_room_id}>
        </CandidateContact>
      );
    } else {
      return (
        <CandidateContact
          type='missing'
          missingNum={friend.unreadMessageCount}
          friendName={friend.first_name}
          message={friend.lastMessage}
          date={friend.lastDate}
          friendId={friend._id}
          chat_room_id={friend.chat_room_id}>
        </CandidateContact>
      );
    }
  }

  renderEnterpriseItem(enterprise, index) {
    if (enterprise.unreadMessageCount == 0) {
      return (
        <CandidateContact
          type='seen'
          missingNum= {enterprise.unreadMessageCount}
          friendName={enterprise.first_name}
          message={enterprise.lastMessage}
          date={enterprise.lastDate}
          friendId={enterprise._id}>
        </CandidateContact>
      );
    } else {
      return (
        <CandidateContact
          type='missing'
          missingNum={enterprise.unreadMessageCount}
          friendName={enterprise.first_name}
          message={enterprise.lastMessage}
          date={enterprise.lastDate}
          friendId={enterprise._id}>
        </CandidateContact>
      );
    }
  }

  renderGroupItem(group, index) {
    if (group.unreadMessageCount == 0) {
      return (
        <CandidateContact
          type='seen'
          missingNum= {group.unreadMessageCount}
          friendName={group.title}
          message={group.lastMessage}
          date={group.lastDate}
          friendId={group._id}
          isGroup='true'
          members={group.members}
          >
        </CandidateContact>
      );
    } else {
      return (
        <CandidateContact
          type='missing'
          missingNum={group.unreadMessageCount}
          friendName={group.title}
          message={group.lastMessage}
          date={group.lastDate}
          friendId={group._id}
          isGroup='true'
          members={group.members}
          >
        </CandidateContact>
      );
    }
  }

  render () {
    const friendsContainerContent = this.renderFriendList(this);
    const enterprisesContainerContent = this.renderEnterprisesList(this);
    const groupsContainerContent = this.renderGroupList(this);

    const { friendCount, enterpriseCount, groupCount } = this.state;
    
    return (
      <View style={styles.container}>
        <Loader loading={this.state.isLoading} color="#ff66be" />
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <View style={styles.titleBar}>
          <Text style={styles.title}>{I18n.t('Messaging')}</Text>
          <View style={styles.backImgView}>
            <TouchableOpacity  onPress={this.goBack}>
                <Image style={styles.backImgButton} source={require('../../image/ic_back.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={this.showFriend}>
            <View style={ this.state.showTab === 'home' || this.state.showTab === 'friend' ? styles.buttonRowPurple : styles.buttonRowWhite}>
                <Text style={ this.state.showTab === 'home' || this.state.showTab === 'friend' ? styles.buttonTextWhite : styles.buttonTextPurple}>{I18n.t('Friends')}</Text>
                <View style={styles.roundNumView}>
                <Text style={styles.roundNumText}>{friendCount ? friendCount : 0}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.showEnterprise}>
            <View style={ this.state.showTab === 'enterprise' ? styles.buttonRowPurple : styles.buttonRowWhite}>
                <Text style={ this.state.showTab === 'enterprise' ? styles.buttonTextWhite : styles.buttonTextPurple}>{I18n.t('Enterprise')}</Text>
                <View style={styles.roundNumView}>
                <Text style={styles.roundNumText}>{enterpriseCount ? enterpriseCount : 0}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.showGroup}>
            <View style={ this.state.showTab === 'group' ? styles.buttonRowPurple : styles.buttonRowWhite}>
                <Text style={ this.state.showTab === 'group' ? styles.buttonTextWhite : styles.buttonTextPurple}>{I18n.t('Group')}</Text>
                <View style={styles.roundNumView}>
                <Text style={styles.roundNumText}>{groupCount ? groupCount : 0}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        
        <ScrollView showsVerticalScrollIndicator={true}>
          { this.state.showTab == 'friend' ?
            <View>
              <CandidateContactItems />
              <View>                
                {friendsContainerContent}
              </View>
            </View>
          : null }

          { this.state.showTab == 'enterprise' ?
            <View>
              <CandidateContactItems />
              <View>                
                {enterprisesContainerContent}
              </View>
            </View>
          : null }

          { this.state.showTab == 'group' ?
            <View>
              <CandidateContactItems />
              <View>               
                {groupsContainerContent}
              </View>
            </View>
          : null }  
        </ScrollView> 
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(CandidateMessageHome);