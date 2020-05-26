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

  topRoundRect: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  bottomRoundRect: {
    backgroundColor: '#FcFcFc',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  titleText: {
    fontFamily: 'AvenirNextLTPro-Bold',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 16,
    color: '#000000',
  },

  locationText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 16,
    lineHeight: 16,
    color: '#00CCD2',
  },

  backImgView: {
    position: 'absolute',
    marginTop: 45,
    right: 5,
    width: 35,
    height: 35,
  },
  
  backImgButton:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  row: {
    flexDirection: 'row',
    
  },

  wrapper: {
    margin: 10,
  },

  typeTextBorder: {
    flex: 1,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#86939C',
    margin: 5,
  },

  typeText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    lineHeight: 15,
    color: '#86939C',
    marginBottom: 10,
    marginTop: 14,
    textAlign: 'center',
  },

  typeTextBlueBack: {
    flex: 2,
    borderRadius: 30,
    margin: 5,
    backgroundColor: '#00CCD2',
  },

  typeTextWhite: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    lineHeight: 15,
    color: '#ffffff',
    marginBottom: 10,
    marginTop: 14,
    textAlign: 'center',
  },
  
});