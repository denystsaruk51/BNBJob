import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  tabBarContainer: {
    flex : 1,
    flexDirection: 'row',
    position: 'absolute',
    height: 50,
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  tabItemView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchIcon: {
    width: 30,
    resizeMode: 'contain',
  },
});