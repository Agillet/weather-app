import * as types from './types';

export const requestWeather = (location) => ({
  type: types.REQUEST_WEATHER,
  payload: location,
});

export const receiveWeather = (data) => ({
  type: types.RECEIVE_WEATHER,
  payload: data,
});
