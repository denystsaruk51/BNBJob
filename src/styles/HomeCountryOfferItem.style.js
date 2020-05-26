import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  homeCountryItemContainer: {
    flex : 1,
    width: 250,
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
  countryText: {
    position: 'absolute',
    bottom: 30,
    marginLeft: 10,
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 22,
  },

  addressText: {
    position: 'absolute',
    bottom: 10,
    marginLeft: 10,
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
  },
});