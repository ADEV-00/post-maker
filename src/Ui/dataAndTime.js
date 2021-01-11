import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultGray} from '../Assets/colors';

const DataTime = ({time}) => {
  return (
    <View>
      <Text style={{fontSize: 17, color: defaultGray}}>
        {time} · 21/2/20 ·{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DataTime;
