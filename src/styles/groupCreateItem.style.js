import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  groupCreateItemContainer: {
    flex : 1,
    width: 130,
    margin: 5,
    borderStyle: 'dashed',
    borderColor: '#86939c',
    borderRadius: 15,
    borderWidth: 2,
  },
  mainImg: {
    width: '80%',
    height: '66%',
    resizeMode: 'contain',
    marginTop: 15,
    marginLeft: 18,
  },
  nameText: {
    marginTop: 8,
    width: '100%',
    textAlign: 'center',
    color:'#86939c',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 11,
  },
});