import * as types from './types';
import {combineReducers} from 'redux';

const currentCity = (state = {data: null, loading: false}, action) => {
  switch (action.type) {
    case types.REQUEST_LOCATION:
      return {...state, loading: true};
    case types.RECEIVE_LOCATION:
      return {
        ...state,
        data: action.payload.items[0].address.city,
        loading: false,
      };
    default:
      return state;
  }
};

const autocompleteResults = (state = {data: [], loading: false}, action) => {
  switch (action.type) {
    case types.REQUEST_AUTOCOMPLETE_CITY:
      return {...state, loading: true};
    case types.RECEIVE_AUTOCOMPLETE_CITY:
      const {suggestions} = action.payload;
      const cities = suggestions.filter((item) => item.matchLevel === 'city');
      return {
        ...state,
        data: cities,
        loading: false,
      };
    default:
      return state;
  }
};
const storedCities = (state = {data: [], loading: false}, action) => {
  switch (action.type) {
    case types.REQUEST_STORED_CITIES:
      return {...state, loading: true};
    case types.RECEIVE_STORED_CITIES:
      return {...state, data: action.payload, loading: false};
    default:
      return state;
  }
};

export default combineReducers({
  currentCity,
  autocompleteResults,
  storedCities,
});
