import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  videoCvItemContainer: {
    flex : 1,
    width: 130,
    margin: 5,
  },
  mainImg: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  bgTextImg: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  nameText: {
    position: 'absolute',
    bottom: 5,
    marginLeft: 9,
    marginRight: 9,
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
  },
  avatarView: {
    position: 'absolute',
    marginLeft: 9,
    marginTop: 9,
  }

});