import React, {useMemo} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import dayjs from 'dayjs';
import icons from '../../../assets/icons/icons';

const Hourly = ({data}) => {
  const day = dayjs(data.dt * 1000);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{day.format('ddd')}</Text>
      <Text style={styles.text}>{day.format('HH:mm')}</Text>
      <Image
        source={icons[data.weather[0].icon]}
        resizeMode="contain"
        style={{width: 50, height: 50}}
      />
    </View>
  );
};

export default Hourly;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 2.5,
    marginBottom: 0,
    backgroundColor: 'rgba(0,0,0, 0.3)',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});
