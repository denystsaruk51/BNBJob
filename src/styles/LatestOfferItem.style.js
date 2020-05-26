import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  latestOfferItemContainer: {
    flex : 1,
    width: 330,
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
    bottom: 30,
    marginLeft: 9,
    marginRight: 9,
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
  },
  responseView: {
    position: 'absolute',
    borderBottomLeftRadius: 22,
    borderTopLeftRadius: 22,
    width: 100,
    height: 45,
    right: 0,
    marginTop: 110,
    backgroundColor: '#ff5b8c',
  },
  responseCount: {
    marginTop: 8,
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
    lineHeight: 12,
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
  }
});