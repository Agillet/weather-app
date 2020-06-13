import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';

const CurrentDate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{dayjs().format('dddd')}</Text>
      <Text style={styles.text}>{dayjs().format('D')}</Text>
      <Text style={styles.text}>{dayjs().format('MMMM YYYY')}</Text>
    </View>
  );
};

export default CurrentDate;

const styles = StyleSheet.create({
  container: {},
  text: {
    alignSelf: 'center',
    color: '#FFF',
  },
});
