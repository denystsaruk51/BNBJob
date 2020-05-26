import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  scrollViewStyle: {
    flexGrow: 1,
  },

  row: {
    flexDirection: 'row',
    marginTop: 20,
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
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'left',
    color: '#000000',
  },

  subtitle: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
    textAlign: 'left',
    color: '#888888',
    marginLeft: 30,
    marginTop: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  alignCenter: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20,
  },

  alignBottom: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20,
  },

  nextButtonView: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'flex-end',
  },
  nextButton: {
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 40,
  },

  whiteText: {
      color: '#ffffff',
      fontFamily: 'AvenirNextLTPro-Regular',
      padding: 15,
  },

  blueText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    color: '#00ccd2',
  },

  gap50 : {
    height:50,
  },

  gap100 : {
    height:100,
  },
  inputPhoneFieldContainer: {
    width: '80%',
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
    marginLeft: 35,
    marginTop: 55,
    marginRight: 35,
  },
  inputPhoneNumberContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  countryPicker: {
    
  },
  divider :{
    width: 1,
    backgroundColor: '#9aa5ac',
    marginLeft: 12,
    height: 18,
    alignSelf: 'center',
  },
  valuePhoneNumberText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    color: '#000000',
    marginLeft: 12,
    width: '73%',
    paddingVertical: 0,
  },
  statePhoneView: {
    position: 'absolute',
    right: 8,
  },
  statePhoneNumberImg:{
    marginTop: 5,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  bottomPhoneNumberLineView: {
    marginTop: 8,
    width: '100%',
    height: 1,
    backgroundColor: '#9aa5ac',
  },
  bottomPhoneNumberLineViewActive: {
    marginTop: 8,
    width: '100%',
    height: 1,
    backgroundColor: '#2bd4d9',
  },
});