import React, { Component } from 'react';

import { FlatGrid } from 'react-native-super-grid';
import {styles} from '../styles/CandidateInviteList.style';
import CandidateInviteListItem from './CandidateInviteListItem';

export default class CandidateInviteList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {invites, searchedInvites, isSearching, setLoading, refresh} = this.props;

    let items ;
    if(isSearching) {
      items = searchedInvites;
    } else {
      items = invites;
    }
    
    return (
      <FlatGrid
          itemDimension={130}
          items={items}
          style={styles.gridView}
          renderItem={({ item, index }) => (
            <CandidateInviteListItem
              data={item}
              index={index}
              setLoading={setLoading}
              refresh={refresh}
            />
          )}
        />
    );
  }
}
