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
import Loader from 'react-native-modal-loader';
import {styles} from '../../styles/candidateGroupHome.style';

import I18n from '../../locale-data/i18n';
import StatusBar from '../../components/StatusBar';
import CandidateGroupItem from '../../components/CandidateGroupItem';
import GroupEmpty from '../../components/GroupEmpty';

import { GetParticipateGroups, GetCreatedGroups } from '../../services/Common';
import Config from '../../services/Config';

class CandidateGroupHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showParticipate: true,
      participates:[],
      participatesCount: 0,
      created:[],
      createdCount: 0,
      isLoading: false,
    };

    this.refresh=this.refresh.bind(this);
    this.getParticipantsGroups=this.getParticipantsGroups.bind(this);
    this.getCreatedGroups=this.getCreatedGroups.bind(this);
    this.renderCreatedGroups=this.renderCreatedGroups.bind(this);
    this.renderParticipantsGroups=this.renderParticipantsGroups.bind(this);
    this.renderGroupItem=this.renderGroupItem.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }
  refresh(){
    this.getParticipantsGroups();
  }
  async getParticipantsGroups(){
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    this.setState({ isLoading: true });
    GetParticipateGroups(TOKEN)
      .then((res) => {
        if(res.success === true) {
          const data = res.data;
          const dataList = Object.keys(data).map(_id => ({
            ...data[_id],
            id: _id,
          }));
          let count = dataList.length;
          this.setState({ 
            participates: dataList,
            participatesCount: count,
          });
          this.getCreatedGroups();
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
  async getCreatedGroups(){
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    GetCreatedGroups(TOKEN)
    .then((res) => {
      if(res.success === true) {
        const data = res.data;
        const dataList = Object.keys(data).map(_id => ({
          ...data[_id],
          id: _id,
        }));
        let count = dataList.length;
        this.setState({ 
          isLoading: false,
          created: dataList,
          createdCount: count,
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

  static navigationOptions = {
    header: null ,
  };

  goBack(){
    Actions.pop();
  }

  showParticipateScreen = () => {
    this.setState({showParticipate: true});
  }

  showCreatedScreen = () => {
    this.setState({showParticipate: false});
  }
  handleAdd(){
    Actions.createGroup({text: 'createGroup'});
  }
  renderGroupItem(group, index){
    return (
      <CandidateGroupItem
        key={group._id}
        group={group}
        index={index}>
      </CandidateGroupItem>
    );
  }  
  renderParticipantsGroups(){
    const { participates, participatesCount } = this.state;
    if(participatesCount > 0 ) {
      const fieldsContainerContent = [];
      if (participates && participates.length) {
        participates.forEach((item, index) => {
          fieldsContainerContent.push(
            this.renderGroupItem(item, index)
          );
        });
      }
      return fieldsContainerContent;
    } else {
      return (
        <GroupEmpty/>
      );
    }
  }
  renderCreatedGroups(){
    const { created, createdCount } = this.state;
    if(createdCount > 0 ) {
      const fieldsContainerContent = [];
      if (created && created.length) {
        created.forEach((item, index) => {
          fieldsContainerContent.push(
            this.renderGroupItem(item, index)
          );
        });
      }
      return fieldsContainerContent;
    } else {
      return (
        <GroupEmpty/>
      );
    }
  }
  render () {
    const { createdCount, participatesCount, showParticipate } = this.state;
    let ContainerContent;
    if(showParticipate){
      ContainerContent = this.renderParticipantsGroups();
    } else {
      ContainerContent = this.renderCreatedGroups();
    }
    return (
      <View style={styles.container}>
        <Loader loading={this.state.isLoading} color="#ff66be" />
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />

          <View style={styles.titleBar}>
            <Text style={styles.title}>{I18n.t('My groups')}</Text>
            <View style={styles.backImgView}>
            <TouchableOpacity  onPress={this.goBack}>
                <Image style={styles.backImgButton} source={require('../../image/ic_back.png')} />
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.showParticipateScreen}>
              <View style={ this.state.showParticipate ? styles.buttonRowRed : styles.buttonRowWhite}>
                <Text style={ this.state.showParticipate ? styles.buttonTextWhite : styles.buttonTextRed}>{I18n.t('Participate')}</Text>
              </View>
              <View style={styles.roundNumView}>
                <Text style={styles.roundNumText}>{participatesCount}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.showCreatedScreen}>
              <View style={ this.state.showParticipate ? styles.buttonRowWhite : styles.buttonRowRed}>
                  <Text style={ this.state.showParticipate ? styles.buttonTextRed : styles.buttonTextWhite }>{I18n.t('Created')}</Text>
              </View>
              <View style={styles.roundNumView}>
                  <Text style={styles.roundNumText}>{createdCount}</Text>
              </View>
            </TouchableOpacity>
          </View>

        <ScrollView showsVerticalScrollIndicator={true}>          

          {ContainerContent}

        </ScrollView>

        <View style={styles.buttonFixed}>
          <TouchableOpacity onPress={this.handleAdd}>
            <View style={styles.buttonRowBlue}>
              <Text style={styles.buttonAdd}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(CandidateGroupHome);