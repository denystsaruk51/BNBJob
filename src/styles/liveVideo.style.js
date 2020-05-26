import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  wrapper: {
  },
  backImgView: {
    position: 'absolute',
    flex: 1,
    marginTop: 45,
    marginLeft: 20,
    width: 35,
    height: 35,
  },
  
  backImgButton:{
      width: 20,
      height: 20,
      resizeMode: 'contain',
  },

  backgroundImg: {
    width: '100%',
    height: '100%',
  },
  topView: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    marginTop: 70,
  },
  progressView: {
    width: '90%',
    height: 5,
    margin: 20,
    borderRadius: 3,
  },
  backgroundProgressView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#ff5b8c88',
    borderRadius: 3,
  },
  progressValueView: {
    position: 'absolute',
    width: '25%',
    height: '100%',
    backgroundColor: '#ff5b8c',
    borderRadius: 3,
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
  },

  btnGroupView:{
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    margin: 20,
  },
  leftBtnView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#000000aa',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  centerBtnView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#000000aa',
    marginLeft: 2,
    marginRight: 2,
  },
  rightBtnView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#000000aa',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  messageIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});