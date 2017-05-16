import { GET_WEATHER, GET_WEATHER_SUCCESS } from '../../constants/WeatherCard';

const initialState = {
    user: 'Unknown User',
    name: 'Hui',
    weather: {},
    fetching: true
};

export default (state = initialState, action) => {
    console.log('Reducer');
    switch (action.type) {
        case GET_WEATHER_SUCCESS:
            return { ...state, weather: action.payload, fetching: false };

        case GET_WEATHER:
            return { ...state, weather: action.payload, fetching: true };

        default:
            return state;
    }
};