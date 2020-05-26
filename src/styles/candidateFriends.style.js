import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginBottom: 50,
  },

  titleBar: {
    height: 60,
    alignItems: 'center',
    marginTop: 20,
  },

  title: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 24,
    lineHeight: 24,
    color: '#000000',
    textAlign: 'center',
    width: '100%',
    marginTop: 13,
  },

  backImgView: {
    position: 'absolute',
    top: 13,
    left: 20,
    width: 35,
    height: 35,
  },
  
  backImgButton:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  searchBarContainer: {
    position: 'absolute',
    right : 0,
    width: 120,
  },

  buttonContainer: {
    flexDirection: 'row',
    height: 40,
    margin: 10,
  },

  buttonRowRed: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: '#ff5b8c',
    marginRight: 20,
  },

  buttonRowWhite: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: '#ffffff',
    marginRight: 20,
  },

  buttonView: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 35,
    marginBottom: 6,
  },

  buttonTextWhite: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    lineHeight: 15,
    color: '#ffffff',
  },

  buttonTextRed: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    lineHeight: 15,
    color: '#ff5b8c',
  },

  roundNumView: {
    backgroundColor: '#ffffff',
    borderRadius: 20,

    position: 'absolute',
    top: 7,
    right: 9,
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