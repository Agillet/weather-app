import {fork, all} from 'redux-saga/effects';
import {sagas as weatherSagas} from './modules/weather';
import {sagas as locationSagas} from './modules/locality';

const allSagas = [...weatherSagas, ...locationSagas];

// start all sagas in parallel
export default function* rootSaga() {
  yield all(allSagas.map((saga) => fork(saga)));
}
