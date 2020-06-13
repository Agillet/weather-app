import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import HourlyWeatherList from './HourlyWeatherList';
import TempChart from './TempChart';

const Forecast = ({data}) => {
  const temps = data.map((item) => item.temp);
  const [graphPadding, setGraphPadding] = React.useState(0);
  const [totalWidth, setTotalWidth] = React.useState(0);

  const onLayout = (e) => {
    e.persist();
    const totalWidth = e.nativeEvent.layout.width;

    const childrenWidth = totalWidth / 5;
    setGraphPadding(childrenWidth / 2);
  };

  const _getTotalWidth = (width) => {
    setTotalWidth(width);
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      <ScrollView horizontal>
        <View style={{totalWidth}}>
          <HourlyWeatherList list={data} getTotalWidth={_getTotalWidth} />
          <TempChart data={temps} graphPadding={graphPadding} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Forecast;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    // width: '100%',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    margin: 10,
    borderRadius: 3,
  },
});
