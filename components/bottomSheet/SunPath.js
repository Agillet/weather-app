import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSpring, animated} from 'react-spring/native';
import dayjs from 'dayjs';

const AnimatedView = animated(View);
const AnimatedSun = animated(View);

const SunPath = ({open, sunrise, sunset}) => {
  const [props, set] = useSpring(() => ({
    rotation: 0,
    color: 'white',
  }));
  const sunriseFormatted = dayjs(sunrise * 1000).format('HH:mm');
  const sunsetFormatted = dayjs(sunset * 1000).format('HH:mm');

  const getRotation = React.useCallback(() => {
    const dayLength = sunset * 1000 - sunrise * 1000;
    const currentTime = dayjs().unix() * 1000;
    const timeSinceSunrise = currentTime - sunrise * 1000;
    const rotation = (180 * timeSinceSunrise) / dayLength;
    return rotation > 180 ? 180 : rotation;
  }, [sunrise, sunset]);

  React.useEffect(() => {
    if (open) {
      set({
        rotation: getRotation(),
        color: 'orange',
        config: {mass: 1, tension: 280, friction: 200},
      });
    } else {
      set({rotation: 0, color: 'white', config: {duration: 1}});
    }
  }, [open, getRotation, set]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={[styles.path, styles.fixedPath]} />
        <AnimatedView
          style={[
            styles.path,
            {
              transform: [
                {
                  rotate: props.rotation.interpolate((e) => `${e}deg`),
                },
              ],
            },
          ]}>
          <AnimatedSun style={[styles.sun, {backgroundColor: props.color}]} />
        </AnimatedView>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.sunrise}>{sunriseFormatted}</Text>
        <Text style={styles.sunset}>{sunsetFormatted}</Text>
      </View>
    </View>
  );
};

export default SunPath;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: 250,
    alignSelf: 'center',
  },
  sunrise: {
    color: '#FFF',
  },
  sunset: {color: '#FFF'},
  path: {
    width: 200,
    height: 200,
    paddingTop: 50,
    borderRadius: 150,
  },
  fixedPath: {
    position: 'absolute',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#fff',
    marginTop: 10,
    paddingTop: 10,
  },

  wrapper: {
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '100%',
    height: 100,
    paddingTop: 10,
    overflow: 'hidden',
  },
  sun: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    position: 'absolute',
    opacity: 1,
    left: 0,
    overflow: 'visible',
    bottom: 100,
    transform: [{translateX: -10}, {translateY: 10}],
  },
  textWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});
