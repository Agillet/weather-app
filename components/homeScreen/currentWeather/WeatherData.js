import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WeatherData = ({data}) => {
  return (
    <View>
      <Text style={[styles.text, styles.temp]}>
        {`${Number(data.temp).toFixed(0)}°`}
      </Text>
      <Text style={styles.text}>{data.weather[0].description}</Text>
    </View>
  );
};

export default WeatherData;

const styles = StyleSheet.create({
  container: {},
  temp: {
    fontSize: 100,
    textAlign: 'center',
  },
  text: {
    // backgroundColor: 'rgba(0,0,0,0.3)',
    fontSize: 30,
    color: '#FFF',
    fontFamily: 'robotoThin',
    padding: 10,
  },
});
