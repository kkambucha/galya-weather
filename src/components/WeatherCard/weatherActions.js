import Fetcher from '../../fetcher';
import { GET_WEATHER, GET_WEATHER_SUCCESS } from '../../constants/WeatherCard';
import { OW_APPID } from '../../constants/basic';

export function getWeather (weather) {

    return (dispatch) => {
        dispatch({
            type: GET_WEATHER,
            payload: {}
        });

        Fetcher.getData(`http://api.openweathermap.org/data/2.5/forecast/daily?q=Moscow&units=metric&cnt=16&APPID=${OW_APPID}`)
            .then((data) => {
                dispatch({
                    type: GET_WEATHER_SUCCESS,
                    payload: data
                });
            })
            .catch(function(error) {
                console.log('request failed', error)
            });
    };

}