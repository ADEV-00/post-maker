import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProfileImg = () => {
  return (
    <View style={styles.profileImg}>
      <Image
        style={{width: '100%', height: '100%'}}
        source={require('../Assets/Images/default_profile.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileImg: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: 'gray',
    marginRight: 8,
    overflow: 'hidden',
  },
});

export default ProfileImg;
