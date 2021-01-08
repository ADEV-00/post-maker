import React from 'react';
import {PermissionsAndroid} from 'react-native';

export const getPermissionAndroid = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Image Download Permission',
        message: 'Your permission is required to save images to your device',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
    Alert.alert(
      '',
      'Your permission is required to save images to your device',
      [{text: 'OK', onPress: () => {}}],
      {cancelable: false},
    );
  } catch (err) {
    console.log('Error', err);
  }
};
