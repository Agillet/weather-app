import {put, takeEvery, call} from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';
import {
  fetchLocation,
  fetchCityAutocomplete,
  addCityToStorage,
  getCitiesFromStorage,
  requestCitiesFromStorage,
} from './operations';

export function* getLocation(location) {
  try {
    const data = yield call(fetchLocation, location);
    yield put(actions.receiveLocation(data));
  } catch (err) {
    console.log(err);
  }
}

export function* getAutocompleteCity(query) {
  try {
    const data = yield call(fetchCityAutocomplete, query);
    yield put(actions.receiveCityAutocomplete(data));
  } catch (err) {
    console.log(err);
  }
}

export function* storeCity(city) {
  try {
    yield call(addCityToStorage, city);
  } catch (err) {
    console.log(err);
  }
}

export function* getStoredCities() {
  try {
    const data = yield call(requestCitiesFromStorage);
    yield put(actions.receiveStoredCities(data));
  } catch (err) {
    console.log(err);
  }
}

export function* watchGetLocationAsync() {
  yield takeEvery(types.REQUEST_LOCATION, getLocation);
}

export function* watchGetAutcompleteCityAsync() {
  yield takeEvery(types.REQUEST_AUTOCOMPLETE_CITY, getAutocompleteCity);
}

export function* watchStoreCityAsync() {
  yield takeEvery(types.ADD_CITY_TO_STORAGE, storeCity);
}

export function* watchGetStoredCitiesAsync() {
  yield takeEvery(types.REQUEST_STORED_CITIES, getStoredCities);
}

export const sagas = [
  watchGetLocationAsync,
  watchGetAutcompleteCityAsync,
  watchStoreCityAsync,
  watchGetStoredCitiesAsync,
];
