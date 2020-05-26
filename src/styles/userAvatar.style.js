import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
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
});