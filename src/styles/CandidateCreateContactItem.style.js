import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  candidateCreateItemContainer: {
    flex : 1,
    width: 130,
    margin: 5,
    borderStyle: 'dashed',
    borderColor: '#86939c',
    borderRadius: 15,
    borderWidth: 2,
  },
  mainImg: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginTop: 40,
    marginLeft: 40,
  },
  nameText: {
    marginTop: 10,
    width: '100%',
    textAlign: 'center',
    color:'#86939c',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
  },
});