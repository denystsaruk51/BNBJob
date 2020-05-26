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

  backView: {
    marginTop: 20,
    marginLeft: 20,
    height: 200,
    backgroundColor: '#da4',
  },

  backImg:{
    marginLeft: 20,
    marginTop: 20,
    width: '70%',
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

  tabContainer: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    margin: 20,
  },

  buttonRight: {
    position:'absolute',
    right:0,
  },
  
  buttonRowPurple: {
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#8F86EA',
    marginRight: 10,
  },

  buttonRowBlue: {
    borderRadius: 30,
    backgroundColor: '#00CCD2',
  },

  buttonTextPurple: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    lineHeight: 15,
    color: '#8F86EA',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 35,
    marginBottom: 5,
  },

  buttonRowWhite: {
    flexDirection: 'row',
    marginRight: 10,
  },

  buttonTextWhite: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    lineHeight: 15,
    color: '#ffffff',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 35,
    marginBottom: 5,
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

  buttonAdd: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 25,
    color: '#ffffff',
    width: 32,
    textAlign: 'center',
    margin: 10,
  },

  roundNumView: {
    backgroundColor: '#ffffff',
    borderRadius: 20,

    position: 'absolute',
    top: 6,
    right: 7,
  },

  roundNumText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 10,
    lineHeight: 10,
    color: '#000',
    margin: 3,
    marginTop: 6,
    minWidth: 15,
    height: 12,
    textAlign: 'center',
  },

});