import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const test = {display: 'none'};
const PostImage = () => {
  return (
    <View style={styles.wrapper}>
      <Image style={StyleSheet.absoluteFillObject} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    ...test,
  },
});

export default PostImage;
