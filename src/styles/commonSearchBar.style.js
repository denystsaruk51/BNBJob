import React, {
    StyleSheet,
  } from 'react-native';
  
  export const styles = StyleSheet.create({
    searchBarContainer: {
      width: '90%',
      height: 40,
      borderColor: '#9aa5ac',
      borderWidth: 1,
      borderRadius: 20,
      alignItems: 'flex-start',
    },
    searchIcon: {
      position: 'absolute',
      width: 15,
      height: 15,
      marginLeft: 13,
      marginTop: 12,
      resizeMode: 'contain',
    },
    searchText: {
      position: 'absolute',
      fontFamily: 'AvenirNextLTPro-Regular',
      fontSize: 15,
      lineHeight: 15,
      height: 19,
      color: '#000000',
      marginTop: 11,
      marginLeft: 35,
      width: '80%',
      paddingVertical: 0,
    },
  });