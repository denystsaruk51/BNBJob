import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#FFFFFF',
    height: 60,
    borderRadius: 15,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  fieldImg: {
    width: 50,
    resizeMode: 'contain',
  },
  typeText: {
    width: '70%',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    lineHeight: 14,
    color: '#888888',
    marginLeft: 10,
  },

  fieldRightImg: {
    width: 25,
    resizeMode: 'contain',
    right: 0,
  },

});