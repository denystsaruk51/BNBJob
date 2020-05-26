import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  titleBar: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },

  backImgView: {
    marginRight: 10,
  },
  
  backImgButton:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  avatarView: {
    width: 50,
    height: 50,
    marginRight: 20,
    marginTop: 5,
  },

  title: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 24,
    lineHeight: 24,
    color: '#000000',
  },
  videoCallButton:{
    position: 'absolute',
    right: 0,
    width: 30,
    height: 20,
    marginRight: 20,
  },
  videoCallImage: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  audioCallButton: {
    position: 'absolute',
    right: 0,
    width: 20,
    height: 20,
    marginRight: 75,
  },
  audioCallImage: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  chatContainer: {
    margin: 20,
  }

});