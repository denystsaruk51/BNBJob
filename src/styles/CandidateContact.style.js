import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  contactContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },

  contentContainer: {
    flexDirection: 'row',
    margin: 10,
  },

  avatarView: {
    width: 50,
    height: 50,
  },

  contactInfo: {
    marginLeft: 20,
  },

  nameText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 18,
    lineHeight: 18,
    color: '#000',
    marginTop: 5,
  },

  contactText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    lineHeight: 14,
    color: '#86939C',
    marginTop: 5,
  },

  stateView: {
    position: 'absolute',
    right: 0,
  },

  timeText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    color: '#86939C',
    marginRight: 10,
  },

  stateImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    position: 'absolute',
    top: 10,
    right: 10,
  },

  stateNumView: {
    backgroundColor:'#8F86EA',
    borderRadius:10,
    width: 20,
    height: 20,
    position: 'absolute',
    right: 10,
    top: 28,
  },

  stateNum: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 12,
    lineHeight: 12,
    color:'#fff',
    textAlign:'center',
    marginTop: 5,
  },

});