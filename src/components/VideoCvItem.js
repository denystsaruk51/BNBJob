import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../styles/videoCvItem.style';
import UserAvatar from './UserAvatar';

export default class VideoCvs extends Component {
  constructor(props) {
    super(props);
    this.onClickItem = this.onClickItem.bind(this);
  }
  componentDidMount() {
    
  }

  onClickItem(){
    this.props.onClickItem();
  }

  render () {
    return (
      <View style={styles.videoCvItemContainer}>
        <TouchableOpacity onPress={this.onClickItem}>
          <Image style={styles.mainImg} source={require('../image/sample_video_cv.png')} />
          <Image style={styles.bgTextImg} source={require('../image/bg_gradient.png')} />
          <Text style={styles.nameText} numberOfLines={1}>Joseph, sevenur</Text>
          <View style={styles.avatarView}>
            <UserAvatar/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
