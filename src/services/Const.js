import {Platform} from 'react-native';

export const SIGNALING_TYPE = {
  DECLINED: 0,
  OFFER: 1,
  ANSWER: 2,
  ICE: 3,
  VIDEO_TOGGLE: 4,
  AUDIO_TOGGLE: 5,
  MISSED: 6,
};

export const IAPItemSkus = Platform.select({
  ios: [
    'com.example.coins100',
    'com.example.coins101',
    'com.example.coins102',
  ],
  android: [
    'com.example.coins100',
    'com.example.coins101',
    'com.example.coins102',
  ]
});