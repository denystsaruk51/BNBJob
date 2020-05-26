import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  
  roundRect: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },

  titleText: {
    fontFamily: 'AvenirNextLTPro-Bold',
    margin: 20,
    fontSize: 16,
    color: '#000000',
    marginTop: 25,
  },

  backImgView: {
    position: 'absolute',
    marginTop: 25,
    right: 5,
    width: 35,
    height: 35,
  },
  
  backImgButton:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  
});