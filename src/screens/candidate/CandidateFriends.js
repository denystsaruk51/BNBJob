import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';

import { connect } from 'react-redux';
import {styles} from '../../styles/candidateFriends.style';
import Loader from 'react-native-modal-loader';
import I18n from '../../locale-data/i18n';
import CandidateSearchBar from '../../components/CandidateSearchBar';
import CandidateFriendItem from '../../components/CandidateFriendItem';
import CandidateInviteList from '../../components/CandidateInviteList';

import { GetUsers, GetInvites } from '../../services/Common';
import Config from '../../services/Config';

class CandidateFriends extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      showFriends: true,
      users:[],
      searchedUsers:[],
      friendsCount: '0',
      invites:[],
      invitesCount: '0',
      searchedInvites:[],
      isSearching: false,
      isLoading: false,
    }

    this.renderUserItem=this.renderUserItem.bind(this);
    this.renderUsersList=this.renderUsersList.bind(this);
    this.setLoading=this.setLoading.bind(this);
    this.refresh=this.refresh.bind(this);
    this.getUsers=this.getUsers.bind(this);
    this.getInvites=this.getInvites.bind(this);
    this.handleSearchText=this.handleSearchText.bind(this);
  }

  static navigationOptions = {
    header: null ,
  };
  componentDidMount() {
    this.refresh();
  }

  refresh(){
    this.getUsers();
  }
  async getUsers() {
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    this.setState({ isLoading: true });
    GetUsers(TOKEN)
      .then((res) => {
        if(res.success === true) {
          const data = res.data;
          const dataList = Object.keys(data).map(_id => ({
            ...data[_id],
            id: _id,
          }));
          let friendsCount = 0;
          dataList.forEach((item, index) => {
            if(item.is_friend){
              friendsCount = friendsCount + 1;
            }
          });

          this.setState({ 
            users: dataList,
            friendsCount: friendsCount,
          });
          this.getInvites();
        } else {
          this.setState({ isLoading: false });
          alert(JSON.stringify(res.error));
        }
      })
      .catch((reason) => {
        this.setState({ isLoading: false });
        alert(reason);
      });
  }
  async getInvites() {
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    GetInvites(TOKEN)
    .then((res) => {
      if(res.success === true) {
        const data = res.data;
        const dataList = Object.keys(data).map(_id => ({
          ...data[_id],
          id: _id,
        }));
        this.setState({ 
          isLoading: false,
          invites: dataList,
          invitesCount: dataList.length,
        });
      } else {
        this.setState({ isLoading: false });
        alert(JSON.stringify(res.error));
      }
    })
    .catch((reason) => {
      this.setState({ isLoading: false });
      alert(reason);
    });
  }

  showFriendScreen = () => {
    this.setState({showFriends: true});
  }

  showInviteScreen = () => {
    this.setState({showFriends: false});
  }

  setLoading(isLoading){
    this.setState({ 
      isLoading: isLoading,
    });
  }
  renderUserItem(user, index) {
    return (
      <CandidateFriendItem
        key={user._id}
        userInfo={user}
        index={index}
        setLoading={this.setLoading}
        refresh={this.refresh}>
      </CandidateFriendItem>
    );
  }
  renderUsersList() {
    const { users, searchedUsers, isSearching, showFriends } = this.state;
    const fieldsContainerContent = [];
    if( isSearching && showFriends ) {
      if (searchedUsers && searchedUsers.length) {
        searchedUsers.forEach((item, index) => {
          fieldsContainerContent.push(
            this.renderUserItem(item, index)
          );
        });
      }
    } else {
      if (users && users.length) {
        users.forEach((item, index) => {
          fieldsContainerContent.push(
            this.renderUserItem(item, index)
          );
        });
      }
    }

    return fieldsContainerContent;
  }

  handleSearchText(text) {
    const key = text.toLowerCase();
    const { users, invites } = this.state;
    if(key && key.length > 0) {
      const searchedUsers = [];
      users.forEach(fieldItem => {
        const name = fieldItem.first_name.toLowerCase() + ' ' + fieldItem.last_name.toLowerCase();
        if( name.indexOf(key) != -1 ) {
          searchedUsers.push(fieldItem);
        }
      });

      const searchedInvites = [];
      invites.forEach(fieldItem => {
        const name = fieldItem.user.first_name.toLowerCase() + ' ' + fieldItem.user.last_name.toLowerCase();
        if( name.indexOf(key) != -1 ) {
          searchedInvites.push(fieldItem);
        }
      });

      this.setState({
        searchedUsers: searchedUsers,
        searchedInvites: searchedInvites,
        isSearching: true,
      })
    } else {
      this.setState({
        searchedUsers: [],
        searchedInvites: [],
        isSearching: false,
      })
    }
  }

  render () {
    const friendsContainerContent = this.renderUsersList();
    const { invites, searchedInvites, isSearching, showFriends, friendsCount, invitesCount } = this.state;

    return (
      <View style={styles.container}>
        <Loader loading={this.state.isLoading} color="#ff66be" />
        
          <View style={styles.titleBar}>
            <Text style={styles.title}>{I18n.t('Friends')}</Text>
            <View style={styles.searchBarContainer}>
              <CandidateSearchBar handleChangeText={this.handleSearchText}/>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.showFriendScreen}>
              <View style={ this.state.showFriends ? styles.buttonRowRed : styles.buttonRowWhite}>
                <View style={styles.buttonView}>
                  <Text style={ this.state.showFriends ? styles.buttonTextWhite : styles.buttonTextRed}>{I18n.t('Friends')}</Text>
                </View>
                <View style={styles.roundNumView}>
                  <Text style={styles.roundNumText}>+{friendsCount}</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.showInviteScreen}>
              <View style={ this.state.showFriends ? styles.buttonRowWhite : styles.buttonRowRed}>
                <View style={styles.buttonView}>
                  <Text style={ this.state.showFriends ? styles.buttonTextRed : styles.buttonTextWhite}>{I18n.t('Invitations')}</Text>
                </View>
                <View style={styles.roundNumView}>
                  <Text style={styles.roundNumText}>{invitesCount}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={true}>

          { this.state.showFriends ? 
            <View>
              {friendsContainerContent}
            </View>
          :
            <CandidateInviteList
              invites={invites}
              searchedInvites={searchedInvites}
              isSearching={isSearching}
              setLoading={this.setLoading}
              refresh={this.refresh}
             />
          }
        </ScrollView>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(CandidateFriends);