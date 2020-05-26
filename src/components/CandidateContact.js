import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import {styles} from '../styles/CandidateContact.style';
import { Actions } from 'react-native-router-flux';
import ContactAvatar from '../components/ContactAvatar';

export default class CandidateContact extends Component {
  constructor(props) {
    super(props);

    this.gotoCandidateChat = this.gotoCandidateChat.bind(this)
  }

  gotoCandidateChat() {
    const { friendName, friendId, isGroup, members, chat_room_id } = this.props;
    Actions.candidateChat({friendName, friendId, isGroup, members, chat_room_id});
  }

  renderMesssageStateIcon(){
    const { type, missingNum } = this.props;

    if(type === 'seen'){
      return (
        <View>
          <Image style={styles.stateImg} source={require('../image/ic_message_seen.png')} />
        </View>
      );
    } else if (type === 'notseen'){
      return (
        <View>
          <Image style={styles.stateImg} source={require('../image/ic_message_not_seen.png')} />
        </View>
      );
    } else if (type === 'sending'){
      return (
        <View>
          <Image style={styles.stateImg} source={require('../image/ic_message_sending.png')} />
        </View>
      );
    } else if (type === 'missing'){
      return (
        <View style={styles.stateNumView}>
          <Text style={styles.stateNum}>{missingNum}</Text>
        </View>
      );
    }

    return (
      <View>
        <Image style={styles.stateImg} source={require('../image/ic_message_sending.png')} />
      </View>
    );      
  }

  render () {
    const messsageStateIcon = this.renderMesssageStateIcon();
    const { friendName, message, date } = this.props;
    
    return (
      <View style={styles.contactContainer}>
        <TouchableOpacity onPress={this.gotoCandidateChat}>
        <View style={styles.contentContainer}>
          <View style={styles.avatarView}>
            <ContactAvatar/>
          </View>

          <View style={styles.contactInfo}>
            <Text style={styles.nameText}>{friendName}</Text>
            <Text style={styles.contactText}>{message}</Text>
          </View>
          
          <View style={styles.stateView}>
            <View><Text style={styles.timeText}>{date}</Text></View>
            {messsageStateIcon}
          </View>
          
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}
