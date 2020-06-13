import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import icons from '../../assets/icons/icons';

const Details = ({weather}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.text}>Température: {parseInt(weather.temp)}°</Text>
        <Text style={styles.text}>
          Ressenti: {parseInt(weather.feels_like)}°
        </Text>
        <Text style={styles.text}>Humidité: {parseInt(weather.humidity)}%</Text>
        <Text style={styles.text}>
          Pression: {parseInt(weather.pressure)} hPa
        </Text>
      </View>
      <View style={styles.right}>
        <Image
          source={icons[weather.weather[0].icon]}
          resizeMode="contain"
          style={{width: 80, height: 80}}
        />
        <Text style={styles.text}>{weather.weather[0].description}</Text>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    color: '#FFF',
    margin: 5,
    paddingBottom: 2,
  },
  left: {
    flexBasis: '50%',
  },
  right: {
    flexBasis: '50%',
    alignItems: 'center',
  },
});
