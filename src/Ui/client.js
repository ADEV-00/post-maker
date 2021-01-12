import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultGray, mainBlue} from '../Assets/colors';

const Client = ({client}) => {
  return (
    <View>
      <Text style={{fontSize: 17, color: mainBlue}}>{client}</Text>
    </View>
  );
};

export default Client;
