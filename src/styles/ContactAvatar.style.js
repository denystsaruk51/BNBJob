import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  profileAvatarContainer: {
    flex : 1,
    width: 50,
    height:50,
    borderRadius: 25,
    borderColor: '#00ccd3',
    borderWidth: 2,
  },
  avatarImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  stateIcon: {
    position: 'absolute',
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 30,
    marginTop: 30,
  },
});