import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultGray} from '../Assets/colors';

const DataTime = ({time, date}) => {
  return (
    <View>
      <Text style={{fontSize: 17, color: defaultGray}}>
        {time} · {date} ·{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DataTime;
