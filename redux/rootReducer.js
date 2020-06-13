import {combineReducers} from 'redux';

import weather from './modules/weather';
import locality from './modules/locality';

export default combineReducers({
  weather,
  locality,
});
