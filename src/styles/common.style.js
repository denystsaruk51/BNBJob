import React, {
  StyleSheet,
} from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  /* Scroll view*/
  scrollViewStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },

  /* Search related */

  topSearchContainerStyle: {
    backgroundColor: 'transparent',
    borderWidth: 1, //no effect
    borderRadius: 20,
    borderColor: '#888888',
    shadowColor: 'white', //no effect
    width: 150,
  },

  topSearchInputStyle: {
    backgroundColor: 'white',
  },

  searchContainerStyle: {
    backgroundColor: 'transparent',
    borderWidth: 1, //no effect
    borderRadius: 40,
    borderColor: '#888888',
    shadowColor: 'white', //no effect
  },

  searchInputStyle: {
    marginTop: 7,
    backgroundColor: 'white',
  },

  /* margin */
  margin20: {
    margin: 20,
  },

  /* gap */
  gap100 : {
    height:100,
  },


});