import { GET_WEATHER, GET_WEATHER_SUCCESS } from '../../constants/WeatherCard';

export function getWeather (weather) {

    return (dispatch) => {
        dispatch({
            type: GET_WEATHER,
            payload: {}
        });
        setTimeout(() => {
            dispatch({
                type: GET_WEATHER_SUCCESS,
                payload: [1,2,3,4,5]
            })
        }, 2000)
    };

}