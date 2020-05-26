import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  fieldRow: {
    flex: 1,
    height : 50,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
  },
  contentView:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  fieldImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
  },

  fontAvenir: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
  },

  bottomLineView: {
    marginTop: 8,
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0',
  },
});