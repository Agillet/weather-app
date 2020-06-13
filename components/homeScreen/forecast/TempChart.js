import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {AreaChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';

const TempChart = ({data, graphPadding}) => {
  const Decorator = ({x, y, data}) => {
    return data.map((value, index) => (
      <Text
        key={`${value}-${index}`}
        style={{
          color: '#FFF',
          position: 'absolute',
          left: x(index) - 5,
          top: y(value) - 30,
        }}>
        {parseInt(value)}°
      </Text>
    ));
  };

  return (
    <AreaChart
      style={{height: 100, width: '100%'}}
      data={data}
      contentInset={{
        top: 30,
        bottom: 30,
        right: graphPadding,
        left: graphPadding,
      }}
      curve={shape.curveBasis}
      start={0}
      svg={{fill: 'rgba(255, 255, 255, 0.5)'}}>
      <Decorator />
    </AreaChart>
  );
};

export default TempChart;
