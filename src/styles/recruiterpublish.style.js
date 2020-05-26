import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  appLogoImg: {
    width : '100%',
    height: 25,
    resizeMode:"contain",
    marginTop: 20,
  },

  image: {
    width : '100%',
    height: '30%',
    resizeMode:"contain",
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    color: '#ff5b8c',
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  description: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#626262',
    marginTop: 20,
    lineHeight: 25,
    marginLeft: 70,
    marginRight: 70,
  },

  buttonGroup: {
    bottom: 0,
    position: 'absolute',
    marginBottom: 65,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redButtonView: {
    flex: 1,
    width: 170,
    borderRadius: 25,
    backgroundColor: '#ff5b8c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  laterButtonView: {
    flex: 1,
    width: 170,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 17,
    lineHeight: 17,
    color: '#ffffff',
    marginTop: 15,
    marginBottom: 10,
  },
  grayButton: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 17,
    color: '#626262',
    marginTop: 10,
    marginBottom: 10,
  },
  facebookButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookImage:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  facebookButton: {
    marginLeft: 15,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 17,
    color: '#3f51b5',
    marginTop: 10,
    marginBottom: 10,
  }
});