import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  
  roundRect: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },

  titleText: {
    fontFamily: 'AvenirNextLTPro-Bold',
    margin: 20,
    fontSize: 16,
    color: '#000000',
  },

  priceText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    margin: 20,
    fontSize: 16,
    color: '#000000',

    position: 'absolute',
    right: 0,
  },

  multiSlider: {
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 10,
  },
});