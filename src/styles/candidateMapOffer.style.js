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
    marginTop: 10,
    height: 40,
    marginBottom: 10,
  },

  flexRow10: {
    flex: 10,
  },

  flexRow1: {
    flex: 1,
  },

  flexRow2: {
    flex: 2,
  },

  alignRight: {
    position: 'absolute',
    right: 100,
  },

  textCenter: {
    width: '100%',
    textAlign: 'center',
  },
  
  backImgView: {
    width: 35,
    height: 35,
    marginLeft: 20,
    justifyContent: 'center',
  },
  backImgButton:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  mapListButton:{
    width: 40,
    height: 40,
    right: 20,
    resizeMode: 'contain',

    alignSelf: 'flex-end',
  },

  mapImg:{
    width: '100%',
    height: '100%',
  },

  title: {
    textAlign: 'center',
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 24,
    lineHeight: 24,
    color: '#000000',
    padding: 7,
  },

  wrapper: {
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  titleBar: {
    marginTop: 20,
    height: 40,
  },
  
  backWhite: {
    backgroundColor: 'white',
  },

  backGrey: {
    backgroundColor: 'grey',
  },

  backBlue: {
    backgroundColor: '#57a',
  },

  subTitleView: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 25,
  },

  subTitle: {
    position: 'absolute',
    color: '#000000',
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 18,
    textAlign: 'center',
  },

  showAllView: {
    position: 'absolute',
    right: 0,
  },
  
  showAll: {
    color: '#ff5b8c',
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 16,
    textAlign: 'center',
  },

  mapOffers: {
    position: 'absolute',
    bottom: '5%',
  },

});