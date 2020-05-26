import React, { Component } from 'react';

import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../styles/candidateChatBox.style';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

export default class CandidateChatBox extends Component {
  constructor(props) {
    super(props);

    this.sendMessageHandle = this.sendMessageHandle.bind(this);
    this.handleMessageTextChangeValue = this.handleMessageTextChangeValue.bind(this);
    this.handleAttachFile=this.handleAttachFile.bind(this);
  }

  sendMessageHandle(value) {
    this.textInput.clear()
    
    if (this.props.sendMessageHandle) {
      this.props.sendMessageHandle(value)
    }
  }

  handleMessageTextChangeValue(value) {
    if(this.props.handleMessageTextChangeValue){
      this.props.handleMessageTextChangeValue(value);
    }
  }
  handleAttachFile(){
    DocumentPicker.show({
      filetype: [DocumentPickerUtil.images()],
    },(error,res) => {
      // Android
      if(res != null && this.props.handleSendFile)
        this.props.handleSendFile(res.uri, res.type, res.fileName, res.fileSize);
    });

  }

  render () {
    return (
      <View>
      <View style={styles.chatBoxContainer}>
        <View style={styles.attachView}>
          <TouchableOpacity onPress={this.handleAttachFile}>        
            <Image style={styles.imgIcon} source={require('../image/ic_attach.png')} />        
          </TouchableOpacity>
        </View>
        <View style={styles.chatBox}>
          
          <TextInput
           style={styles.textChat}
           ref={input => { this.textInput = input }}
           placeholder='A'
           onChangeText={this.handleMessageTextChangeValue}/>

          <View style={styles.filterTool}>
            <TouchableOpacity>
              <View>
              <Image style={styles.filterIcon} source={require('../image/ic_emoji.png')} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.smsView}>
          <TouchableOpacity onPress={this.sendMessageHandle}>
          <Image style={styles.imgIcon} source={require('../image/ic_sms.png')} />
          </TouchableOpacity>
        </View>

      </View>
      </View>
    );
  }
}
