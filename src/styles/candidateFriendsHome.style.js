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
    marginTop: 20,
  },

  title: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 24,
    color: '#000000',
    textAlign: 'center',
    width: '100%',
  },

  backImgView: {
    position: 'absolute',
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
    marginLeft: 20,
    marginBottom: 20,
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
    height: 60,
    margin: 20,
  },
  
  buttonRowRed: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: '#ff5b8c',
  },

  buttonTextRed: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    color: '#ff5b8c',
    width: 150,
    textAlign: 'center',
    margin: 10,
  },

  buttonRowWhite: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },

  buttonTextWhite: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 20,
    lineHeight: 20,
    color: '#ffffff',
    width: 150,
    textAlign: 'center',
    margin: 10,
    marginTop: 15,
  },

  gap100: {
    height: 100,
  }

});