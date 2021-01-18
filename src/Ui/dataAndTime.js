import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultGray} from '../Assets/colors';

const DataTime = ({time, date, display}) => {
  const displayHandle = display ? 'flex' : 'none';

  return (
    <View style={{display: displayHandle}}>
      <Text style={{fontSize: 17, color: defaultGray}}>
        {time} · {date} ·{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DataTime;
