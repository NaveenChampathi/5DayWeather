import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book.js';
import WeatherReducer from './reducer_weather.js';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
