import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  jobItemContainer: {
    width: 300,
    height: 300,
    margin: 10,
  },
  mainImg: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  
  nameText: {
    position: 'absolute',
    bottom: 50,
    marginLeft: 50,
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
  },

  priceText: {
    position: 'absolute',
    bottom: 30,
    marginLeft: 50,
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 12,
  },

  addressText: {
    position: 'absolute',
    bottom: 10,
    marginLeft: 50,
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 12,
  },

  icPlane: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 40,
    height: 40,
    resizeMode: 'contain',
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

  responseView: {
    position: 'absolute',
    borderRadius: 22,
    right: 10,
    bottom: 10,
    backgroundColor: '#ff5b8c',
  },
  responseCount: {
    margin: 12,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    lineHeight: 15,
  },
  responseLabel: {
    textAlign: 'center',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 12,
  },
  infoView: {
    position: 'absolute',
    borderRadius: 10,
    width: 70,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#ffffff',
  },
  info: {
    margin: 5,
    marginBottom: 3,
    textAlign: 'center',
    color:'#000000',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 10,
    lineHeight: 10,
  },

  avatarView: {
    position: 'absolute',
    marginLeft: 9,
    marginTop: 9,
    bottom: 35,
  }
});