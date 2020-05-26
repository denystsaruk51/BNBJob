import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88888850',
  },
  wrapper: {
  },
  appLogoImg: {
    width : '100%',
    height: 25,
    resizeMode:"contain",
    marginTop: 20,
  },
  backImg: {
    width: '100%',
    resizeMode:"contain",
  },
  scrollViewStyle: {
    paddingVertical: 2,
  },
  subTitleView: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
    height: 35,
  },
  
  subTitle: {
    position: 'absolute',
    color: '#000000',
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 18,
    textAlign: 'left',
    marginRight: 100,
    width: '70%',
  },

  closeImgButton:{
    alignSelf: 'flex-end',
    width: 40,
    height: 40,
    resizeMode: 'contain',
    bottom: 20,
    right: 20,
  },

  popupContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  popupImg: {
    width : '40%',
    height: 100,
    resizeMode:"contain",
    marginBottom: 20,
  },

  redButtonView: {
    width: 170,
    borderRadius: 25,
    backgroundColor: '#ff5b8c',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 17,
    lineHeight: 17,
    height: 17,
    color: '#ffffff',
    margin: 15,
  },
  
  redText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 20,
    color: '#ff5b8c',
    textAlign: 'center',
  },

  descText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
    color: '#000000',
    marginBottom: 30,
    textAlign: 'center',
  },

  redTextbutton: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 17,
    color: '#ff5b8c',
    marginTop: 5,
    marginBottom: 5,
  },
});