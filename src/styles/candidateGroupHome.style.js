import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  titleBar: {
    height: 60,
    alignItems: 'center',
  },

  title: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 24,
    lineHeight: 24,
    color: '#000000',
    marginTop: 20,
    textAlign: 'center',
    width: '100%',
  },

  backImgView: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 35,
    height: 35,
  },
  
  backImgButton:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

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
    flexDirection: 'row',
    margin: 20,
  },

  buttonRight: {
    position:'absolute',
    right:0,
  },
  
  buttonRowRed: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: '#ff5b8c',
    marginRight: 20,
  },

  buttonFixed: {
    position:'absolute',
    right: 30,
    bottom: 30,
  },

  buttonRowBlue: {
    borderRadius: 30,
    backgroundColor: '#00CCD2',
  },

  buttonTextRed: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    lineHeight: 15,
    height: 15,
    color: '#ff5b8c',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 35,
    marginBottom: 10,
  },

  buttonRowWhite: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: '#ffffff',
    marginRight: 20,
  },

  buttonTextWhite: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    lineHeight: 15,
    height: 15,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 35,
    marginBottom: 10,
  },

  buttonAdd: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 25,
    lineHeight: 25,
    color: '#ffffff',
    width: 32,
    textAlign: 'center',
    marginLeft: 11,
    marginTop: 15,
    marginRight: 11,
    marginBottom: 10,
  },

  roundNumView: {
    backgroundColor: '#ffffff',
    borderRadius: 20,

    position: 'absolute',
    top: 7,
    right: 25,
  },

  roundNumText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 10,
    lineHeight: 10,
    color: '#000',
    margin: 4,
    marginTop: 6,
    minWidth: 15,
    height: 12,
    textAlign: 'center',
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