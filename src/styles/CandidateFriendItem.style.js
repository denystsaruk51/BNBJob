import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  friendContainer: {
    flexDirection: 'row',
    margin: 20,
  },

  friendAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  friendInfo: {
    marginLeft: 20,
  },

  nameText: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 18,
    lineHeight: 18,
    color: '#000',
  },

  descText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    color: '#707070',
  },

  buttonViewBlue: {
    borderColor: '#00CCD2',
    borderRadius: 25,
    borderWidth: 1,

    position: 'absolute',
    right: 0,
  },

  buttonTextBlue: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    lineHeight: 14,
    color: '#00CCD2',
    
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 5,
  },

  bottomLineView: {
    marginTop: 8,
    width: '100%',
    height: 1,
    backgroundColor: '#9aa5ac',
  },
});