import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  mapOfferItemContainer: {
    width: 300,
    height: 300,
    margin: 10,
  },
  mainImg: {
    width: 300,
    height: 300,
    borderRadius: 15,
  },
  bgTextImg: {
    position: 'absolute',
    bottom: 0,
    width: 300,
    height: 300,
    borderRadius: 15,
  },
  nameText: {
    position: 'absolute',
    bottom: 50,
    marginLeft: 30,
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
  },

  priceText: {
    position: 'absolute',
    bottom: 30,
    marginLeft: 30,
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 12,
  },

  addressText: {
    position: 'absolute',
    bottom: 10,
    marginLeft: 30,
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

  greyButton: {
    position: 'absolute',
    borderRadius: 22,
    height: 40,
    right: 20,
    bottom: 20,
    backgroundColor: '#DFE3E5',
  },
  btnText: {
    margin: 13,
    textAlign: 'center',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    lineHeight: 14,
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
    bottom: 40,
  }
});