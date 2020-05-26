import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  scrollViewStyle: {
    flexDirection: 'column',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
  },

  smsRow: {
    marginTop: '10%',
    flex: 1,
    flexDirection: 'row',
  },

  backImgContainer: {
    marginTop: '20%',
    alignItems: 'center',
  },

  backImg: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
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
    textAlign: 'left',
    color: '#000000',
    marginTop: 15,
  },

  subtitle: {
    marginTop: 20,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
    textAlign: 'left',
    color: '#888888',
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
    alignItems: 'center',
  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 20
  },

  alignBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20,
  },

  blueTitleText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 20,
    color: '#00ccd2',
    height: 30,
    lineHeight: 20,
  },

  blueText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    color: '#00ccd2',
  },

  redText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    margin: 20,
    color: '#ff5b8c',
    fontSize: 18,
  },

  gap50 : {
    height:50,
  },

  gap100 : {
    height:100,
  },

  
});