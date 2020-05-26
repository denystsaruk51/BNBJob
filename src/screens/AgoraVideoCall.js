
import React, {Component} from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, TextInput,
  AsyncStorage, SafeAreaView,
} from 'react-native';
import AgoraRTCView from '../components/agora';
import { Actions } from 'react-native-router-flux';
import StatusBar from '../components/StatusBar';
import Config from '../services/Config';
import {Socket} from '../services/SocketIo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    height: 44,
    paddingHorizontal:20,
    backgroundColor:'#6A71DD',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 10
  }
});

export default class AgoraVideoCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLive: false,
      error: undefined,
      channelProfile: 1,
      videoProfile: 40,
      clientRole: 1,
      uid: 0,
      swapWidthAndHeight: true,
      channelName: 'testChanel',
    };

    this.getInfoForCall=this.getInfoForCall.bind(this);
    this.waitVideoCall=this.waitVideoCall.bind(this);
    this.sendVideoCallEnd=this.sendVideoCallEnd.bind(this);
    this.handleCallDeclined=this.handleCallDeclined.bind(this);
    this.handleCallEnd=this.handleCallEnd.bind(this);
  }
  static navigationOptions = {
    header: null ,
  };

  componentDidMount() {
    this.getInfoForCall();
    this.waitVideoCall();
  }
  getInfoForCall(){
    const {chat_room_id, currentUserId, friendId} = this.props;
    const uid = Math.floor(Math.random() * 100);
    this.setState({
      uid: uid,//curUserId,
      showLive: true,
      channelName: chat_room_id,
    });
  }

  async waitVideoCall() {
    const { currentUserId, friendId, chat_room_id } = this.props;
    Socket().on('video-call-response', (message) => {
      const call_chat_room_id = message.chat_room_id;
      const type = message.type;
      const senderId = message.senderId;

      if(type === Config.VIDEO_CALL_TYPE_CANCEL && senderId === friendId && call_chat_room_id === chat_room_id) {
        this.handleCallDeclined();
      } else if(type === Config.VIDEO_CALL_TYPE_END && senderId === friendId && call_chat_room_id === chat_room_id) {
        this.handleCallEnd();
      }
    });
  }

  sendVideoCallEnd(){
    const { chat_room_id, currentUserId, friendId } = this.props;
    Socket().emit('video-call', {chat_room_id: chat_room_id, type: Config.VIDEO_CALL_TYPE_END, senderId: currentUserId} )
  }

  joinChannel = () => {
    this.setState({
      showLive: true
    });
  }

  handleCallDeclined() {
    this.setState({
      showLive: false,
      error: 'Call declined',
    });
    // alert('handleCallDeclined');
    this.goBack();
  }
  handleCallEnd() {
    this.setState({
      showLive: false,
      error: 'Call ended',
    });
    // alert('handleCallEnd');
    this.goBack();
  }
  onCancel = (error) => {
    // alert('onCancel');
    this.sendVideoCallEnd();
    this.setState({
      showLive: false,
      error: JSON.stringify(error)
    });

    this.goBack();
  }
  goBack(){
    Actions.pop('agoraVideoCall');
  }

  render() {
    if (this.state.showLive) {
      console.log('channelName', this.state.channelName);

      return (
        // <View style={styles.container}>
        //   <StatusBar barStyle="dark-content" />
        //   <SafeAreaView />
          <AgoraRTCView
            channelProfile={this.state.channelProfile}
            channelName={this.state.channelName}
            videoProfile={this.state.videoProfile}
            clientRole={this.state.clientRole}
            uid={this.state.uid}
            onCancel={this.onCancel}
          >
          </AgoraRTCView>  
        // </View>
      );
    }
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}