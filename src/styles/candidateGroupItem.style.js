import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  groupItemContainer: {
    // flex : 1,
    width: '90%',
    height: 250,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
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
  avatarView: {
    position: 'absolute',
    marginLeft: 10,
    bottom: 0,
    marginBottom: 22,
  },
  descGroupView:{
    position: 'absolute',
    bottom: 0,
    width: '67%',
    marginBottom: 5,
    marginLeft: '15%',
  },
  nameText: {
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 16,
  },
  descText: {
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
  },
});