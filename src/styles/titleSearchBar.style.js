import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  searchBarContainer: {
    width: '80%',
    height: 35,
    borderColor: '#9aa5ac',
    borderWidth: 1,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: 15,
    height: 15,
    marginLeft: 15,
    resizeMode: 'contain',
  },
  searchText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    lineHeight: 15,
    marginTop: 3,
    height: 40,
    color: '#000000',
    marginLeft: 10,
    width: '65%',
  },
  filterTool: {
    position: 'absolute',
    right : 0,
    width: 43,
    height: 35,
    marginRight: -1,
    marginTop: -1,
  },
});