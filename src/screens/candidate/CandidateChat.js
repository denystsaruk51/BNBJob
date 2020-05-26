import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  AsyncStorage,
  Alert,
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import RNFetchBlob from 'react-native-fetch-blob'
import {styles} from '../../styles/candidateChat.style';

import StatusBar from '../../components/StatusBar';
import ChatAvatar from '../../components/ChatAvatar';
import CandidateChatContent from '../../components/CandidateChatContent';
import CandidateChatBox from '../../components/CandidateChatBox';

import Loader from 'react-native-modal-loader';
import { GetMessages, PostMessage, PostFileMessage, UpdateMessageStatus, PostMessageToGroup, UpdateMessageToRead } from '../../services/Common';
import Config from '../../services/Config';
import {Socket} from '../../services/SocketIo'
import I18n from '../../locale-data/i18n';

class CandidateChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      messageText: '',
      isLoading: false,
    }

    this.renderMessageItem = this.renderMessageItem.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.handleMessageTextChangeValue = this.handleMessageTextChangeValue.bind(this);
    this.sendMessageHandle = this.sendMessageHandle.bind(this);

    this.sendMessage=this.sendMessage.bind(this);
    this.waitMessages=this.waitMessages.bind(this);
    this.handleVideoCall=this.handleVideoCall.bind(this);
    this.handleAudioCall=this.handleAudioCall.bind(this);
    this.handleVideoCallCancel=this.handleVideoCallCancel.bind(this);
    this.waitVideoCall=this.waitVideoCall.bind(this);
    this.sendVideoCallAccept=this.sendVideoCallAccept.bind(this);
    this.sendVideoCallCancel=this.sendVideoCallCancel.bind(this);
    this.handleSendFile=this.handleSendFile.bind(this);
    this.getCurUserInfo=this.getCurUserInfo.bind(this);
    this.downloadFile=this.downloadFile.bind(this);
    this.setMessageRead=this.setMessageRead.bind(this);
    this.currentUserId = '';
  }

  static navigationOptions = {
    header: null ,
  };

  goBack(){
    Actions.pop();
  }

  componentDidMount() {
    this.waitMessages();
    this.getMessages();
    this.waitVideoCall();
    this.getCurUserInfo();
    this.setMessageRead();
  }
  async getCurUserInfo(){
    this.currentUserId = await AsyncStorage.getItem(Config.STORAGE_USER_ID_KEY);
  }
  async setMessageRead(){
    const { chat_room_id } = this.props;
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    UpdateMessageToRead(TOKEN, chat_room_id)
    .then((res) => {
      if(res.success === true) {
      
      } else {
        
      }
    })
    .catch((reason) => {
      
    });
  }
  async waitMessages() {
    Socket().on('chat-response', (message) => {
      AsyncStorage.getItem(Config.STORAGE_USER_ID_KEY)
      .then((currentUserId) => {
        AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY)
        .then((TOKEN) => {
          if ((message.reciever == currentUserId) && (message.reciever != message.sender)) {
            UpdateMessageStatus(TOKEN, message.message_id)        
            .then((res) => {
                this.setState({ isLoading: false });
              if(res.success === true) {
                  const {messages} = this.state
                  this.setState({
                    messages: [...messages, message],
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
          })
        })
    });
  }

  async getMessages() {
    const { friendId } = this.props;
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    this.setState({ isLoading: true });

    GetMessages(TOKEN, friendId)
    .then((res) => {
      this.setState({ isLoading: false });
      if(res.success === true) {
        const data = res.data;
        const messageList = Object.keys(data).map(_id => ({
          ...data[_id],
          id: _id,
        }));

        this.setState({
          messages: messageList,
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

  renderMessageList() {
    const { messages } = this.state;
    const messagesContainerContent = [];

    messages.forEach((item, index) => {
      messagesContainerContent.push(
        this.renderMessageItem(item, index)
      );
    });

    this.gotoBottom()

    return messagesContainerContent;
  }

  renderMessageItem(message, index) {
    const { friendId } = this.props;
    let msgContent = message.message;
    if(message.msgType && message.msgType === 'F'){
      msgContent = message.fileName;
    }
    if (message.sender == friendId) {
      return (
        <CandidateChatContent
          chatType = "recv"
          roundStyle = "3side"
          chatContent = {msgContent}
          chatTime = {message.created_at}
          messageData={message}
          handleDownloadFile={this.downloadFile}
        />
      );
    } else {
      return (
        <CandidateChatContent
          chatType = "sent"
          roundStyle = "3side"
          chatContent = {msgContent}
          chatTime = {message.created_at}
          messageData={message}
          handleDownloadFile={this.downloadFile}
        />              
      );
    } 
  }

  sendMessageHandle(value) {    
    this.sendMessage()
  }

  async  sendMessage() {
    const { messageText } = this.state;
    const { friendId, isGroup, members } = this.props;    
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    const currentUserId = await AsyncStorage.getItem(Config.STORAGE_USER_ID_KEY);    
    this.setState({ isLoading: true });

    if (isGroup == 'true') {
      PostMessageToGroup(TOKEN, friendId, messageText)
      .then((res) => {
        this.setState({ isLoading: false });
        if(res.success === true) {
          var curDate = new Date();
          var curTime = curDate.getHours() + ':' + curDate.getMinutes();
          let message = {message: messageText, sender: currentUserId, reciever: friendId, message_id: res.data._id, created_at: curTime}
          const {messages} = this.state

          this.setState({
            messages: [...messages, message],
          });

          members.forEach((item, index) => {
            let message = {message: messageText, sender: currentUserId, reciever: item, message_id: res.data._id}
            Socket().emit('chat', message)
          });
        } else {
          alert(JSON.stringify(res.error));
        }
      })
      .catch((reason) => {
        this.setState({ isLoading: false });
        alert(reason);
      });      
    } else {
      PostMessage(TOKEN, friendId, messageText)
      .then((res) => {
        this.setState({ isLoading: false });
        if(res.success === true) {
          let message = {message: messageText, sender: currentUserId, reciever: friendId, message_id: res.data._id}
          const {messages} = this.state

          this.setState({
            messages: [...messages, message],
          });
  
          Socket().emit('chat', message)
          
        } else {
          alert(JSON.stringify(res.error));
        }
      })
      .catch((reason) => {
        this.setState({ isLoading: false });
        alert(reason);
      });
    }
  }
  async handleSendFile(uri, type, fileName, fileSize) {
    const { friendId, isGroup, members } = this.props;    
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    const currentUserId = await AsyncStorage.getItem(Config.STORAGE_USER_ID_KEY);    
    this.setState({ isLoading: true });

    if (isGroup == 'true') {
      // PostMessageToGroup(TOKEN, friendId, messageText)
      // .then((res) => {
      //   this.setState({ isLoading: false });
      //   if(res.success === true) {
      //     var curDate = new Date();
      //     var curTime = curDate.getHours() + ':' + curDate.getMinutes();
      //     let message = {message: messageText, sender: currentUserId, reciever: friendId, message_id: res.data._id, created_at: curTime}
      //     const {messages} = this.state

      //     this.setState({
      //       messages: [...messages, message],
      //     });

      //     members.forEach((item, index) => {
      //       let message = {message: messageText, sender: currentUserId, reciever: item, message_id: res.data._id}
      //       Socket().emit('chat', message)
      //     });
      //   } else {
      //     alert(JSON.stringify(res.error));
      //   }
      // })
      // .catch((reason) => {
      //   this.setState({ isLoading: false });
      //   alert(reason);
      // });      
    } else {
      PostFileMessage(TOKEN, friendId, uri, fileName, type)
      .then((res) => {
        this.setState({ isLoading: false });
        if(res.success === true) {

          let message = {message: res.data.fileName, sender: currentUserId, reciever: friendId, message_id: res.data._id, msgType: 'F'}
          const {messages} = this.state

          this.setState({
            messages: [...messages, message],
          });
  
          Socket().emit('chat', message)          
        } else {
          alert(JSON.stringify(res.error));
        }
      })
      .catch((reason) => {
        this.setState({ isLoading: false });
        alert(reason);
      });
    }
  }
  downloadFile(messageId, fileName){
    this.setState({ isLoading: true });
    const URL = Config.domain + Config.apiBaseUrl + '/chats/' + messageId + '/download';
    let dirs = RNFetchBlob.fs.dirs
    RNFetchBlob
    .config({
      path : dirs.DownloadDir + '/' + fileName
    })
    .fetch('GET', URL, {
      //some headers ..
    })
    .then((res) => {
      this.setState({ isLoading: false });
      console.log('The file saved to ', res.path());
      // alert('The file saved to ' + res.path());
    })
    .catch((error) => {
      this.setState({ isLoading: false });
      alert(error);
    });
  }
  gotoBottom =()=>{
    setTimeout(() => {
      this.refs._mainScrollView.scrollToEnd({animated: true}, 0);
    }, 200);
  }      

  handleMessageTextChangeValue(value) {
    this.setState({
      messageText: value,
    });
  }

  handleVideoCallCancel(){

  }
  async waitVideoCall() {
    const { friendName, friendId, chat_room_id } = this.props;
    Socket().on('video-call-response', (message) => {
      const call_chat_room_id = message.chat_room_id;
      const type = message.type;
      const senderId = message.senderId;

      if(type === Config.VIDEO_CALL_TYPE_OFFER && senderId === friendId && call_chat_room_id === chat_room_id) {
        Alert.alert(
          friendName,
          'Incoming call...',
            [
              {
                text: I18n.t('Cancel'),
                onPress: this.sendVideoCallCancel
              },
              {
                text: 'Accept',
                onPress: this.sendVideoCallAccept
              },
            ],
            { cancelable: false }
        );
      }
    })
  }

  sendVideoCallCancel(){
    const { chat_room_id, friendId } = this.props;
    Socket().emit('video-call', {chat_room_id: chat_room_id, type: Config.VIDEO_CALL_TYPE_CANCEL, senderId: this.currentUserId} )
  }
  sendVideoCallAccept(){
    const { chat_room_id, friendId } = this.props;
    Socket().emit('video-call', {chat_room_id: chat_room_id, type: Config.VIDEO_CALL_TYPE_ACCEPT, senderId: this.currentUserId} )
    Actions.agoraVideoCall({chat_room_id, currentUserId: this.currentUserId, friendId});
  }
  handleVideoCall() {
    const { chat_room_id, friendId } = this.props;
    Socket().emit('video-call', {chat_room_id: chat_room_id, type: Config.VIDEO_CALL_TYPE_OFFER, senderId: this.currentUserId});
    Actions.agoraVideoCall({chat_room_id, currentUserId: this.currentUserId, friendId});
  }
  handleAudioCall() {
    
  }

  render () {
    const messagesContainerContent = this.renderMessageList()
    const { friendName, friendId } = this.props

    return (
      <View style={styles.container}>
        <Loader loading={this.state.isLoading} color="#ff66be" />

        <StatusBar barStyle="dark-content" />
        <SafeAreaView />

        <View style={styles.titleBar}>
          <View style={styles.backImgView}>
            <TouchableOpacity onPress={this.goBack}>
              <Image style={styles.backImgButton} source={require('../../image/ic_back.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.avatarView}>
            <ChatAvatar/>
          </View>
          <Text style={styles.title}>{friendName}</Text>
          <TouchableOpacity style={styles.videoCallButton} onPress={this.handleVideoCall}>
            <Image style={styles.videoCallImage} source={require('../../image/ic_chat_call_video.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.audioCallButton} onPress={this.handleAudioCall}>
            <Image style={styles.audioCallImage} source={require('../../image/ic_chat_call_audio.png')} />
          </TouchableOpacity>
        </View>

        <ScrollView
          ref='_mainScrollView'
          showsVerticalScrollIndicator={true}>
          <View style={styles.chatContainer}>
            {messagesContainerContent}
          </View>
        </ScrollView>

        <CandidateChatBox
          friendId={friendId}
          handleMessageTextChangeValue={this.handleMessageTextChangeValue}
          sendMessageHandle={this.sendMessageHandle}
          handleSendFile={this.handleSendFile}
        />
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(CandidateChat);