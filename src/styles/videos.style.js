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
  scrollViewStyle: {
    marginBottom: 50,
    paddingVertical: 2,
  },
  backImgView: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 5,
  },

  backImgButton: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
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
});