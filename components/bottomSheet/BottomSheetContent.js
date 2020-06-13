import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomSheetCard from './BottomSheetCard';
import SunPath from './SunPath';
import Details from './Details';
import dayjs from 'dayjs';
import WeekForecast from './WeekForecast';

const BottomSheetContent = ({open, weather}) => {
  return (
    <>
      <BottomSheetCard
        title="Détails"
        titleRight={dayjs().format('DD/MM/YYYY')}>
        <Details weather={weather.current} />
      </BottomSheetCard>
      <BottomSheetCard title="Prévisions">
        <WeekForecast dailyWeather={weather.daily} />
      </BottomSheetCard>
      <BottomSheetCard title="Soleil" titleRight={dayjs().format('HH:mm')}>
        <SunPath
          open={open}
          sunrise={weather.current.sunrise}
          sunset={weather.current.sunset}
        />
      </BottomSheetCard>
    </>
  );
};

export default BottomSheetContent;

const styles = StyleSheet.create({});
