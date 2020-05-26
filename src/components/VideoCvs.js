import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {styles} from '../styles/videocvs.style';
import VideoCvItem from './VideoCvItem';

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
      <ScrollView style={styles.videoCvsContainer} horizontal={true} directionalLockEnabled={false}>
        <VideoCvItem
          onClickItem = {this.onClickItem}
        />
        <VideoCvItem
          onClickItem = {this.onClickItem}
        />
        <VideoCvItem
          onClickItem = {this.onClickItem}
        />
      </ScrollView>
    );
  }
}
