import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import weather from './components/WeatherCard/weatherReducer';

export default function configureStore(initialState) {
    const logger = createLogger();
    return createStore(weather, initialState, applyMiddleware(logger, thunk));
};