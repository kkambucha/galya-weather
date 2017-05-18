import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import weather from './components/WeatherCard/weatherReducer';

export default (initialState) => {
    const rootReducer = combineReducers({weather});
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
};