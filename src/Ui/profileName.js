import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultGray} from '../Assets/colors';

const ProfileName = ({name}) => {
  const tagName = name.replace(/\s/g, '_');
  return (
    <View>
      <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>
        {name}
      </Text>
      <Text style={styles.tagName}>@{tagName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagName: {
    fontWeight: '200',
    color: defaultGray,
    textTransform: 'lowercase',
  },
});

export default ProfileName;
