import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WeatherData from './WeatherData';

const CurrentWeather = ({data}) => {
  return (
    <View style={styles.container}>
      <WeatherData data={data} />
    </View>
  );
};

export default CurrentWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '15%',
  },
});
