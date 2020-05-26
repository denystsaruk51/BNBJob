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
    marginBottom: 10,
    marginTop: 14,
    textAlign: 'center',
  },

  gap50: {
    height: 50,
  },

  roundRectWhite: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },

  subTitleText: {
    fontFamily: 'AvenirNextLTPro-Bold',
    margin: 20,
    fontSize: 16,
    color: '#000000',
  },

  profileItemView: {
    flex: 1,
    marginBottom: 20,
    width: '100%',
  },
  rightView: {
    position: 'absolute',
    right: 0,
    marginRight: 20,
  },
  switchContainerView: {
    width: 55,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    padding: 2,
  },
  switchCircleView: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'white',
  },
  commonLabel: {
    marginTop: 7,
    fontFamily: 'AvenirNextLTPro-Regular',
    marginLeft: 20,
    fontSize: 16,
    color: '#000000',
    width: 150,
  },
  experienceContentsView: {
    margin: 10,
  },
  experienceItemTextBorder: {
    flex: 2,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#86939C',
    margin: 5,
  },

  experienceItemTextBlueBack: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: '#00CCD2',
    margin: 5,
  },

  experienceItemText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    lineHeight: 14,
    color: '#86939C',
    marginBottom: 10,
    marginTop: 14,
    textAlign: 'center',
  },

  experienceItemTextWhite: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    lineHeight: 14,
    color: '#ffffff',
    marginBottom: 10,
    marginTop: 14,
    textAlign: 'center',
  },

});