import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  scrollViewStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },

  row: {
    marginTop: 20,
  },

  title: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 24,
    lineHeight: 24,
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

  redButtonView: {
    width: '90%',
    margin: 20,
    borderRadius: 25,
    backgroundColor: '#ff5b8c',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 17,
    lineHeight: 17,
    color: '#ffffff',
    marginTop: 14,
    marginBottom: 10,
    textAlign: 'center',
  },

  gap50: {
    height: 50,
  }

});