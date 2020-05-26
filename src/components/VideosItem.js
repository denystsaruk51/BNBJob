import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../styles/videosItem.style';
import UserAvatar from './UserAvatar';

export default class VideosItem extends Component {
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
      <View style={styles.videoItemContainer}>
        <TouchableOpacity onPress={this.onClickItem}>
          <Image style={styles.mainImg} source={require('../image/sample_know_them.png')} />
          <Image style={styles.bgTextImg} source={require('../image/bg_gradient_top.png')} />
          <View style={styles.topView}>
          <View style={styles.profileInfoView}>
            <View style={styles.avatarView}>
              <UserAvatar/>
            </View>
            <View style={styles.descGroupView}>
              <Text style={styles.nameText} numberOfLines={1}>Paul Houille</Text>
              <Text style={styles.descText} numberOfLines={1}>Product Designer</Text>  
            </View>
          </View>
        </View>
        
        </TouchableOpacity>
      </View>
    );
  }
}
