import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WeatherIcon = ({ summary, icon }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="md-cloudy" color="#FFF" size={50} />
      <Text style={styles.text}>{summary}</Text>
    </View>
  );
};

export default WeatherIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
  },
});
