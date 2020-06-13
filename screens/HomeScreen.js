import React, {useState} from 'react';
import {View, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import Animated from 'react-native-reanimated';
import CurrentWeather from '../components/homeScreen/currentWeather/CurrentWeather';
import * as weatherActions from '../redux/modules/weather/actions';
import * as locationActions from '../redux/modules/locality/actions';
import CurrentLocation from '../components/homeScreen/CurrentLocation';
import Forecast from '../components/homeScreen/forecast/Forecast';
import BottomSheetComponent from '../components/bottomSheet/BottomSheet';
import {requestLocationPermission} from '../services/LocationService';
import AutocompleteCitySearch from '../components/locationList/AutocompleteCitySearch';

const HomeScreen = ({actions, weather, locality}) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  const [openSheet, setOpenSheet] = useState(new Animated.Value(1));
  const [citySearchModalOpen, setCitySearchModalOpen] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    async function loadAsyncData() {
      try {
        await _getLocationAsync();
      } catch (e) {
      } finally {
        setLoading(false);
      }
    }

    loadAsyncData();
  }, [_getLocationAsync]);

  React.useEffect(() => {
    if (location) {
      requestWeather();
    } else {
      _getLocationAsync();
    }
  }, [location, requestWeather, _getLocationAsync]);

  const requestWeather = React.useCallback(() => {
    if (!weather.data && !weather.loading) {
      actions.requestWeather(location.coords);
    }
  }, [actions, location, weather.data, weather.loading]);

  const _getLocationAsync = React.useCallback(async () => {
    const hasLocationPermission = await requestLocationPermission();
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          setLocation(position);
          actions.requestLocation(position);
        },
        (error) => {
          alert(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000},
      );
    }
  }, [actions]);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/sky.jpg')}
          style={styles.image}>
          <Animated.View
            style={[
              styles.wrapper,
              {opacity: Animated.add(0.01, Animated.multiply(openSheet, 0.9))},
            ]}>
            {weather.data && (
              <>
                <View style={styles.contentContainer}>
                  <CurrentWeather data={weather.data.current} />
                </View>
                <Forecast data={weather.data.hourly} />
                {citySearchModalOpen && (
                  <AutocompleteCitySearch open={citySearchModalOpen} />
                )}
                <CurrentLocation
                  city={locality.data}
                  setCitySearchModalOpen={setCitySearchModalOpen}
                />
              </>
            )}
          </Animated.View>
          <BottomSheetComponent openSheet={openSheet} weather={weather.data} />
        </ImageBackground>
      </View>
    </>
  );
};

HomeScreen.propTypes = {
  actions: PropTypes.shape({
    requestWeather: PropTypes.func.isRequired,
  }).isRequired,
  weather: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    weather: PropTypes.shape({}),
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    locality: state.locality.currentCity,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        requestWeather: weatherActions.requestWeather,
        requestLocation: locationActions.requestLocation,
      },
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#121212',
  },
  contentContainer: {
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});
