import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  row: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
  },

  wrapper: {
  },
  backImgView: {
    position: 'absolute',
    width: 35,
    height: 35,
    marginLeft: 20,
    marginTop: 20,
  },
  backImgButton:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
    position: 'absolute',
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
    margin: 30,
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
    lineHeight: 16,
    color: '#626262',
    marginTop: 10,
    marginLeft: 20,
  },

  descriptionRed: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
    lineHeight: 16,
    color: '#ff5b8c',
    textDecorationLine: 'underline',
    marginTop: 10,
    marginLeft: 20,
  },

  image: {
    width : 250,
    height: 250,
  },
  buttonGroup: {
    bottom: 0,
    position: 'absolute',
    marginBottom: 65,
    width: '60%',
  },
  redGroup:{
    flexDirection: 'row',
  },
  redButtonView: {
    flex: 1,
    marginLeft: 20,
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
    marginTop: 13,
    marginBottom: 10,
  },
  redButton: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 17,
    color: '#ff5b8c',
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