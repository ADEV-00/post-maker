import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const PostCreateScreen = () => {
  return (
    <View>
      <Text style={styles.title}>This is post create screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 100,
  },
});
