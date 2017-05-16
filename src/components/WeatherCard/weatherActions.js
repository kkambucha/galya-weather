import { GET_WEATHER, GET_WEATHER_SUCCESS } from '../../constants/WeatherCard';

export function getWeather (weather) {

    return function (dispatch) {
        console.log('get weather');
        dispatch({
            type: GET_WEATHER,
            payload: {}
        });
        setTimeout(() => {
            console.log('dispatch');
            dispatch({
                type: GET_WEATHER_SUCCESS,
                payload: [1,2,3,4,5]
            })
        }, 2000)
    };

}