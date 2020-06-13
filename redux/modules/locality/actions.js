import * as types from './types';

export const requestLocation = (location) => ({
  type: types.REQUEST_LOCATION,
  payload: location,
});

export const receiveLocation = (data) => ({
  type: types.RECEIVE_LOCATION,
  payload: data,
});

export const requestCityAutocomplete = (query) => ({
  type: types.REQUEST_AUTOCOMPLETE_CITY,
  payload: query,
});

export const receiveCityAutocomplete = (query) => ({
  type: types.RECEIVE_AUTOCOMPLETE_CITY,
  payload: query,
});

export const addCityToStorage = (city) => ({
  type: types.ADD_CITY_TO_STORAGE,
  payload: city,
});

export const requestStoredCities = () => ({
  type: types.REQUEST_STORED_CITIES,
});

export const receiveStoredCities = (cities) => ({
  type: types.RECEIVE_STORED_CITIES,
  payload: cities,
});
