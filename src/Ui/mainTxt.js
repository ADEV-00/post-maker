import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MainText = ({contentTxt, align}) => {
  return (
    <View>
      <Text style={[styles.mainPostText, {textAlign: `${align}`}]}>
        {contentTxt}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPostText: {
    fontSize: 22,
    color: 'black',
  },
});

export default MainText;
