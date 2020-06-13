import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Hourly from './Hourly';

const HourlyWeatherList = ({ list = [], getTotalWidth }) => {
  return (
    <View style={styles.container}>
      {list.map((item) => {
        return <Hourly data={item} key={item.dt} />;
      })}
    </View>
  );
};

export default HourlyWeatherList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    padding: 5,
  },
});
