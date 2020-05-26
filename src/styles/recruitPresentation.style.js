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
  backImgView: {
    position: 'absolute',
    width: 35,
    height: 35,
    marginLeft: 20,
    marginTop: 45,
  },
  backImgButton:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  title: {
    color: '#000',
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 30,
    textAlign: 'center',
  },
  description: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#626262',
    marginTop: 10,
    lineHeight: 25,
    marginLeft: 10,
    marginRight: 10,
  },

  image: {
    width : '100%',
    height: '55%',
    resizeMode:"contain",
  },
  buttonGroup: {
    bottom: 0,
    position: 'absolute',
    marginBottom: 65,
    width: '100%',
  },
  redGroup:{
    flexDirection: 'row',
  },
  redButtonView: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 25,
    backgroundColor: '#ff5b8c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redBorderButtonView: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    borderColor: '#ff5b8c',
    borderWidth: 1,
    // borderStyle: 'dashed',
    borderRadius: 25,
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
  redButton: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 17,
    lineHeight: 17,
    color: '#ff5b8c',
    marginTop: 15,
    marginBottom: 10,
  },
  facebookButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookImage:{
    width: 20,
    height: 22,
    resizeMode: 'contain',
  },
  facebookButton: {
    marginLeft: 15,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 17,
    color: '#3f51b5',
    marginTop: 16,
    marginBottom: 10,
  }
});