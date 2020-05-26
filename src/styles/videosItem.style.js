import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  videoItemContainer: {
    flex : 1,
    width: '90%',
    height: 450,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
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
  topView: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  profileInfoView: {
    marginLeft: 20,
  },
  avatarView: {
    
  },
  descGroupView:{
    position: 'absolute',
    width: '70%',
    marginLeft: 40,
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
    marginTop: 5,
  },


});