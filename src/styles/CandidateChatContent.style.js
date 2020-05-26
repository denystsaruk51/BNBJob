import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({

  chatContainer: {
    flex: 1,
    marginBottom: 5,
  },

  sent: {
    alignItems: 'flex-end',
    alignSelf:'flex-end',
  },

  sentText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    lineHeight: 15,
    color: '#fff',
    margin: 20,
  },

  recvText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    lineHeight: 15,
    color: '#454B54',
    margin: 20,
  },

  sentRound2: {
    width: '80%',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: '#8F86EA',
  },

  sentRound3: {
    width: '90%',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#8F86EA',
  },

  recvRound2: {
    width: '80%',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#DFE3E5',
  },

  recvRound3: {
    width: '90%',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: '#DFE3E5',
  },

  emoticonImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    position: 'absolute',
    right: 100,
    top: 40,
  },

  emoticonImgNone: {
    width: 0,
    height: 0,
    resizeMode: 'contain',
  },

  row: {
    flexDirection: 'row',
  },

  stateImg: {
    margin: 5,
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },

  timeText: {
    marginTop: 5,
    marginBottom: 15,
    fontFamily: 'AvenirNextLTPro-Regular',
    color: '#86939C',
    fontSize: 10,
    lineHeight: 10,
  },

});