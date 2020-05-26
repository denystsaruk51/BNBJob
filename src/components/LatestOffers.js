import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {styles} from '../styles/LatestOffers.style';
import LatestOfferItem from './LatestOfferItem';

export default class LatestOffers extends Component {
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
      <ScrollView style={styles.latestOfferContainer} horizontal={true} directionalLockEnabled={false}>
        <LatestOfferItem onClickItem = {this.onClickItem}/>
        <LatestOfferItem onClickItem = {this.onClickItem}/>
        <LatestOfferItem onClickItem = {this.onClickItem}/>
        <LatestOfferItem onClickItem = {this.onClickItem}/>
        <LatestOfferItem onClickItem = {this.onClickItem}/>
      </ScrollView>
    );
  }
}
