import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Stats = ({retweet, like}) => {
  return (
    <View style={styles.stats}>
      <Text style={styles.statsText}>
        {retweet}{' '}
        <Text style={{fontWeight: '200', color: '#687684'}}>Retweets</Text>
      </Text>
      <Text style={styles.statsText}>
        {like} <Text style={{fontWeight: '200', color: '#687684'}}>Likes</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stats: {
    flexDirection: 'row',
    paddingVertical: 13,
    alignItems: 'center',
    borderTopWidth: 0.33,
    borderBottomWidth: 0.33,
    borderColor: '#bdc5cd',
    paddingLeft: 7,
  },
  statsText: {
    marginRight: 13,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Stats;
