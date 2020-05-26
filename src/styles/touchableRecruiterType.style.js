import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  inputFieldContainer: {
    width: '85%',
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
    marginLeft: 30,
    marginTop: 30,
    marginRight: 30,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '100%',
    marginTop: 6,
    flexDirection: 'row',
  },
  iconImg:{
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  typeText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    color: '#888888',
    marginLeft: 15,
  },
  stateImg:{
    marginTop: 5,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  valueText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    color: '#000000',
    marginLeft: 25,
    width: '83%',
    paddingVertical: 0,
  },
  bottomLineView: {
    marginTop: 8,
    width: '100%',
    height: 1,
    backgroundColor: '#9aa5ac',
  },
  bottomLineViewActive: {
    marginTop: 8,
    width: '100%',
    height: 1,
    backgroundColor: '#2bd4d9',
  },

  centerItem: {
    width: 150,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  recruiterImg: {
    height: 100,
    resizeMode: 'contain',
  },

  titleText: {
    margin: 5,
    fontFamily: 'AvenirNextLTPro-Regular',
    textAlign: 'center',
  },
});