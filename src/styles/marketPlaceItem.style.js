import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  marketPlaceItemContainer: {
    flex : 1,
    width: 130,
    margin: 5,
  },
  mainImg: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  bgTextImg: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  nameText: {
    position: 'absolute',
    bottom: 5,
    marginBottom: 25,
    marginLeft: 9,
    marginRight: 9,
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
  },
  descText: {
    position: 'absolute',
    bottom: 5,
    marginBottom: 4,
    marginLeft: 9,
    marginRight: 9,
    width: '90%',
    color:'#ffffff',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
  },
  loveImg: {
    position: 'absolute',
    width: 25,
    height: 25,
    right: 0,
    marginTop:10,
    marginRight: 10,
    resizeMode: 'contain',
  },
});