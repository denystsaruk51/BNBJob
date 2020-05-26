import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  closeCandidateItemContainer: {
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
    marginBottom: 60,
    marginLeft: 9,
    marginRight: 9,
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 16,
  },
  descText: {
    position: 'absolute',
    bottom: 5,
    marginBottom: 40,
    marginLeft: 9,
    marginRight: 9,
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
  },
  avatarView: {
    position: 'absolute',
    marginLeft: 9,
    marginTop: 9,
  },
  loveImg: {
    position: 'absolute',
    width: 25,
    height: 25,
    right: 0,
    marginTop:10,
    marginRight: 10,
    resizeMode: 'contain',
  },
  btnGroupView:{
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  messageBtnView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    height: 30,
    borderColor: '#8e86e9',
    borderWidth: 2,
    borderRadius: 15,
  },
  messageIcon: {
    width: 14,
    height: 14,
  },
  cancelBtnView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    height: 30,
    borderColor: '#ff5b8c',
    borderWidth: 2,
    borderRadius: 15,
  },
  cancelIcon: {
    width: 14,
    height: 14,
  },
});