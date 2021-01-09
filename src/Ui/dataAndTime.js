import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultGray} from '../Assets/colors';

const DataTime = () => {
  return (
    <View>
      <Text style={{fontSize: 17, color: defaultGray}}>09:28 · 21/2/20 · </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DataTime;
