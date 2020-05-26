import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  backImgView: {
    width: 35,
    height: 35,
    marginLeft: 20,
  },
  backImgButton:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 30,
    textAlign: 'left',
    color: '#000000',
    marginLeft: 20,
    marginTop: 5,
  },
  forgotPassword: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
    textAlign: 'right',
    color: '#000000',
    marginRight: 40,
    marginTop: 35,
  },
  createAccontView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  noAccount:{
    marginLeft: 15,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 17,
    color: '#000000',
  },
  createAccount: {
    marginLeft: 5,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 17,
    color: '#ff5b8c',
  },
  redButtonView: {
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 25,
    backgroundColor: '#ff5b8c',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  button: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 17,
    lineHeight: 17,
    color: '#ffffff',
    paddingTop: 15,
    paddingBottom: 10,
  },
});