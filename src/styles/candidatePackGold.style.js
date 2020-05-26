import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  wrapper: {
  },
  scrollViewStyle: {
    marginBottom: 0,
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
  topView: {
    flex: 1,
    alignItems: 'center',
  },
  mainImage: {
    flex: 1,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  descriptionView :{
    flex: 1,
  },
  subTitle: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
  },
  description: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 7,
  },
  bottomView: {
    flex: 1,
  },
  priceItem :{
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
  },
  priceItemSelected :{
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#00ccd2',
    borderWidth: 1,
    alignItems: 'center',
  },
  priceItemImg: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  infoView: {
    marginTop: 3,
  },
  offerTitle: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 14,
    color: '#000000',
  },
  offerCount: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    color: '#000000',
    marginTop: 5
  },
  priceInfoView: {
    position: 'absolute',
    right: 0,
    width: 100,
    marginRight: 15,
  },
  priceText: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 15,
    color: '#000000',
    textAlign: 'right',
  },
  priceDesc: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'right',
    color: '#000000',
  },
  priceLastDesc: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'right',
    color: '#00ccd2',
  }
});