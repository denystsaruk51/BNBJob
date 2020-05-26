import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  searchBarContainer: {
    width: '90%',
    height: 40,
    backgroundColor: '#eff1f2',
    borderRadius: 20,
    alignItems: 'flex-start',
  },

  searchIcon: {
    position: 'absolute',
    top: -5,
    width: 20,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  
  searchText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    lineHeight: 15,
    height: 43,
    color: '#000000',
    marginLeft: 35,
    width: '60%',
  },
});