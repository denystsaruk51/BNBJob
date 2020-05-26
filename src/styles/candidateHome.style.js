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
  appLogoImg: {
    width : '100%',
    height: 25,
    resizeMode:"contain",
    marginTop: 20,
  },
  mapImg: {
    width: 25,
    height: 25,
    resizeMode:"contain",
    marginRight: 10,
  },
  scrollViewStyle: {
    marginBottom: 50,
    paddingVertical: 2,
  },
  subTitleView: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
    height: 35,
  },
  subJobView: {
    backgroundColor: '#00ccd2',
    height: 400,
    marginTop: 20,
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
  subTitleWhite: {
    position: 'absolute',
    color: '#ffffff',
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 18,
    textAlign: 'left',
    marginRight: 100,
    width: '70%',
  },
  showAllView: {
    position: 'absolute',
    right: 0,
  },
  showAll: {
    color: '#ff5b8c',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  showAllWhite: {
    color: '#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonGroup: {
    marginTop: 10,
    marginBottom: 10,
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

  row: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  whiteButtonView: {
    flex: 1,
    width: 200,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ddd',
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
    color: '#ffffff',
    marginTop: 15,
    marginBottom: 10,
  },
  redTextbutton: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 17,
    lineHeight: 17,
    color: '#ff5b8c',
    margin: 10,
    marginTop: 12,
  },
  topImgButton:{
    alignSelf: 'flex-end',
    width: 40,
    height: 40,
    margin: 20,
    resizeMode: 'contain',
    bottom: 40,
  },
});