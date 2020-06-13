import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import icons from '../../assets/icons/icons';
import dayjs from 'dayjs';

const WeekForecast = ({dailyWeather}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.column, styles.th]}>
        <View style={styles.title}>
          <Text style={styles.text}>Matin</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>Après-midi</Text>
        </View>
      </View>
      {dailyWeather.map((day) => {
        return (
          <View style={styles.row} key={day.dt}>
            <Text style={[styles.text, styles.column]}>
              {dayjs(day.dt * 1000).format('DD/MM')}
            </Text>
            <View style={styles.column}>
              <Image
                source={icons[day.weather[0].icon]}
                resizeMode="contain"
                style={styles.icons}
              />
            </View>
            <Text style={[styles.text, styles.column]}>
              {parseInt(day.temp.morn, 10)}°
            </Text>
            <Text style={[styles.text, styles.column]}>
              {parseInt(day.temp.day, 10)}°
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default WeekForecast;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flexBasis: '50%',
    justifyContent: 'center',
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
  th: {
    flexDirection: 'row',
    color: '#FFF',
    marginLeft: '50%',
    width: '50%',
  },
  column: {
    width: '25%',
  },
  icons: {width: 40, height: 40},
});
