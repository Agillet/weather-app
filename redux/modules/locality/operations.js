import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {HERE_API_KEY} from '../../../secrets';

export const fetchLocation = async (action) => {
  const url = 'https://revgeocode.search.hereapi.com/v1/revgeocode?';
  const {latitude, longitude} = action.payload.coords;
  try {
    const response = await axios.get(
      `${url}at=${latitude}%2C${longitude}&lang=fr-FR&apiKey=${HERE_API_KEY}`,
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCityAutocomplete = async (action) => {
  const query = action.payload;
  const url = 'https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?';
  try {
    const response = await axios.get(
      `${url}&query=${query}&apiKey=${HERE_API_KEY}`,
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const addCityToStorage = async (action) => {
  try {
    // const value = JSON.stringify(action.payload);

    const currentStore = await AsyncStorage.getItem('cities');
    let parsedStore = [];
    if (currentStore) {
      parsedStore = JSON.parse(currentStore);
    }
    parsedStore.push(action.payload);

    await AsyncStorage.setItem('cities', JSON.stringify(parsedStore));
  } catch (e) {
    console.log('error', e);
  }
};

export const requestCitiesFromStorage = async (action) => {
  try {
    const stored = await AsyncStorage.getItem('cities');
    return JSON.parse(stored);
  } catch (e) {
    console.log('error', e);
  }
};
