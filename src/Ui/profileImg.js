import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProfileImg = () => {
  return <View style={styles.profileImg}></View>;
};

const styles = StyleSheet.create({
  profileImg: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: 'gray',
    marginRight: 8,
  },
});

export default ProfileImg;
