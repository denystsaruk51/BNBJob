import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888888',
  },

  popupContainer: {
    flex: 1,
    width: '100%',
    alignSelf: 'flex-end',

    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
    margin: 20,
  },

  row: {
    flex:1,
    flexDirection: 'row',
  },

  profileView: {
    flexDirection: 'row',
  },

  userAvatarContainer: {
    flex : 1,
    width: 30,
    height:30,
    borderRadius: 15,
    borderColor: '#00ccd3',
    borderWidth: 2,
  },
  avatarImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  stateIcon: {
    position: 'absolute',
    width: 8,
    height: 8,
    resizeMode: 'contain',
    marginLeft: 19,
    marginTop: 19,
  },
  avatarView: {
    width: 50,
    height: 50,
  },

  subTitleView: {
    marginLeft: 20,
  },

  title: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
  },

  subTitle: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
    color: '#000',
  },

  statusView: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
  },

  label: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    color: '#86939C',
  },

  levelText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    color: '#000000',
  },

  editImg: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    position: 'absolute',
    right: 70,
  },

  profileStatusText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 13,
    color: '#FF5B8C',

    position: 'absolute',
    right: 0,
  },

  progressView: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    height: 20,
  },

  progressBar: {
    width: '70%',
    marginTop: 5,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  progressBarChargeLow: {
    height: 5,
    borderRadius: 10,
    backgroundColor: '#FF5B8C',
    width: '15%',
  },
  progressBarChargeTop: {
    height: 5,
    borderRadius: 10,
    backgroundColor: '#00CCD2',
    width: '100%',
  },

  progressText: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    position: 'absolute',
    right: 0,
  },

  listView: {
    flexDirection: 'row',
    marginBottom: 5,

    alignItems: 'center',
  },

  listImg: {
    width: 25,
    height: 40,
    resizeMode: 'contain',
  },

  listTitle: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
    lineHeight: 16,
    color: '#000',
    marginLeft: 20,
  },

  membershipBack: {
    marginTop: 10,
    marginLeft: 5,
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#DFE3E5',
    borderRadius: 20,
    justifyContent: 'center',
  },

  premiumTitle: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 12,
    lineHeight: 12,
    color: '#ffffff',
    marginTop: 15,
    marginLeft: 10,
  },

  alignRight: {
    position: 'absolute',
    right: 0,
  },

  closeImgButton:{
    marginTop: 10,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  notificationView: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#FF5B8C',
    borderRadius: 10,
  },

  notificationNum: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 12,
    color: '#fff',
    marginLeft: 10,
    marginRight: 10,

    marginTop: 5,
    marginBottom: 5,
  },

  premiumBack: {
    marginLeft: 5,
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#8F86EA',
    borderRadius: 20,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  premiumImg: {
    width: 20,
    resizeMode: 'contain',
  },

});