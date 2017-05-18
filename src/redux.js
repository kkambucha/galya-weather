import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import weather from './components/WeatherCard/weatherReducer';

export default (initialState) => {
    const logger = createLogger();
    const rootReducer = combineReducers({weather});
    return createStore(rootReducer, initialState, applyMiddleware(logger, thunk));
};