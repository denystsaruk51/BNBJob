import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  searchBarContainer: {
    width: '95%',
    height: 35,
    borderColor: '#9aa5ac',
    borderWidth: 1,
    borderRadius: 18,
    alignItems: 'flex-start',
    marginTop: 20,
    marginBottom: 10,
    marginLeft:10,
    marginRight: 10,
  },
  filterTool: {
    position: 'absolute',
    right : 0,
    width: 43,
    height: 35,
    marginRight: -1,
    marginTop: -1,
  },
  filterIcon: {
    width: 43,
    height: 35,
    resizeMode: 'contain',
  },
  searchIcon: {
    position: 'absolute',
    width: 15,
    height: 15,
    marginLeft: 15,
    marginTop: 10,
    resizeMode: 'contain',
  },
  searchText: {
    position: 'absolute',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    lineHeight: 15,
    height: 20,
    color: '#000000',
    marginTop: 9,
    marginLeft: 40,
    width: '65%',
    paddingVertical: 0,
  },
});