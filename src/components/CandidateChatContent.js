import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../styles/CandidateChatContent.style';

export default class CandidateChatContent extends Component {
  constructor(props) {
    super(props);

    this.handleFileMessageItemClick=this.handleFileMessageItemClick.bind(this);
  }
  handleFileMessageItemClick(){
    const { messageData } = this.props;
    if(this.props.handleDownloadFile){
      this.props.handleDownloadFile(messageData._id, messageData.fileName);
    }
  }

  renderChatContent(){
    const { chatType, chatContent, roundStyle, emoticon, chatTime, messageData } = this.props;

    if(chatType === "sent"){
      return (
        <View style={styles.sent}>
          <TouchableOpacity onPress={this.handleFileMessageItemClick}>
            <View style={roundStyle === "2side" ? styles.sentRound2 : styles.sentRound3}>
              <Text style={styles.sentText}>{chatContent}</Text>
              <Image style={emoticon === "laugh" ? styles.emoticonImg : styles.emoticonImgNone} source={require('../image/ic_emoticon_laugh.png')} />
            </View>
            <Text style={styles.timeText}>{chatTime}</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (chatType === 'recv'){
        return (
          <View>
            <TouchableOpacity onPress={this.handleFileMessageItemClick}>
              <View style={roundStyle === "2side" ? styles.recvRound2 : styles.recvRound3}>
                <Text style={styles.recvText}>{chatContent}</Text>
                <Image style={emoticon === "laugh" ? styles.emoticonImg : styles.emoticonImgNone} source={require('../image/ic_emoticon_laugh.png')} />
              </View>
              <View style={styles.row}>
                <Image style={styles.stateImg} source={require('../image/ic_checked.png')} />
                <Text style={styles.timeText}>{chatTime}</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
    }  
  }

  render () {
    const renderContent = this.renderChatContent();

    return(
      <View style={styles.chatContainer}>
        {renderContent}
      </View>
    );
  }
}
