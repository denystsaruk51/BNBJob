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
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    color: '#000000',
  },

  locationText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 16,
    color: '#00CCD2',
  },

  backImgView: {
    position: 'absolute',
    marginTop: 35,
    right: 0,
    width: 35,
    height: 35,
  },
  
  backImgButton:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  
});