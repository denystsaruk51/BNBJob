import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#091822',
  },
  container: {
    flex: 1
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  mapImage: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  appName: {
    width: '13%',
    height: '13%',
    resizeMode: 'contain',
    position: 'absolute',
  },
});