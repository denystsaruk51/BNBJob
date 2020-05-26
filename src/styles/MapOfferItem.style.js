import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  mapOfferItemContainer: {
    flex : 1,
    width: 250,
    height: 170,
    margin: 10,
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
    bottom: 50,
    marginLeft: 30,
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Bold',
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

  responseView: {
    position: 'absolute',
    borderBottomLeftRadius: 22,
    borderTopLeftRadius: 22,
    width: 100,
    height: 45,
    right: 0,
    marginTop: 120,
    backgroundColor: '#ff5b8c',
  },
  responseCount: {
    marginTop: 5,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
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
    height: 20,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#ffffff',
  },
  info: {
    marginTop: 3,
    textAlign: 'center',
    color:'#000000',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 10,
  }
});