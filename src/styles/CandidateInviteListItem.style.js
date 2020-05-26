import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  inviteItemContainer: {
    flex : 1,
    justifyContent: 'flex-end',
    height: 250,
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
    marginBottom: 65,
    marginLeft: 9,
    marginRight: 9,
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 15,
  },
  descText: {
    position: 'absolute',
    bottom: 5,
    marginBottom: 45,
    marginLeft: 9,
    marginRight: 9,
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 13,
  },
  avatarView: {
    position: 'absolute',
    marginLeft: 9,
    top: 9,
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
    height: 40,
    borderColor: '#00ccd2',
    borderWidth: 2,
    borderRadius: 20,
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
    height: 40,
    borderColor: '#ff5b8c',
    borderWidth: 2,
    borderRadius: 20,
  },
  cancelIcon: {
    width: 14,
    height: 14,
  },
});