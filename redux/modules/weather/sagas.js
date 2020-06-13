import {put, takeEvery, call} from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';
import {fetchWeather} from './operations';

export function* getWeather(location) {
  try {
    const data = yield call(fetchWeather, location);
    yield put(actions.receiveWeather(data));
  } catch (err) {
    console.log(err);
  }
}

// Watches for specific action, and then executes the related saga
export function* watchGetWeatherAsync() {
  yield takeEvery(types.REQUEST_WEATHER, getWeather);
}

// export only watcher sagas in one variable
export const sagas = [watchGetWeatherAsync];
