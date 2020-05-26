import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    chatAvatarContainer: {
      // flex : 1,
      width: 40,
      height:40,
      borderRadius: 22,
      borderColor: '#00ccd3',
      borderWidth: 2,
    },
    avatarImg: {
      position: 'absolute',
      width: 36,
      height:36,
      borderRadius: 20,
    },
    stateIcon: {
      position: 'absolute',
      width: 15,
      height: 15,
      resizeMode: 'contain',
      marginLeft: 25,
      marginTop: 25,
    },
});