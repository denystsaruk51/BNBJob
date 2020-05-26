import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({

  chatBoxContainer: {
    flexDirection: 'row',

    marginLeft:20,
    marginRight:20,
    marginTop:10,
    marginBottom:10,
  },

  attachView: {
    width: 25,
    height: 25,
    flex: 1,
    marginTop: 5,
  },

  imgIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  chatBox: {
    flex: 5,

    borderColor: '#9aa5ac',
    borderWidth: 1,
    borderRadius: 18,
    marginLeft: 5,
    marginRight: 5,
  
  },

  filterTool: {
    position: 'absolute',
    top: 3,
    right : 0,
    width: 35,
    height: 35,
  },
  
  filterIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  textChat: {
    position: 'absolute',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    lineHeight: 15,
    height: 38,
    width: '80%',
    color: '#000000',
    marginLeft: 20,
  },

  smsView: {
    width: 33,
    height: 33,
    flex: 1,
    alignItems:'flex-end',
    marginTop: 5,
  },
});