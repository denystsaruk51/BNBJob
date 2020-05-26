import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  backImg:{
    marginTop: 20,
    marginLeft: 20,
    width: '50%',
    resizeMode: 'contain',
  },

  descTextView: {
    margin: 20,
    width: '100%',
  },

  descText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
    color: '#86939C',
    marginTop: 20,
    width: '80%',
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
  },

  buttonRowRed: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: '#ff5b8c',
    marginRight: 20,
  },
  longText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 20,
    lineHeight: 20,
    color: '#ffffff',
    textAlign: 'center',
    width: 150,
    margin: 10,
    marginTop: 15,
  },

});