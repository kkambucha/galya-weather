import Fetcher from '../../fetcher';
import Firebase from 'firebase';
import { GET_TODAY_WEATHER, GET_TODAY_WEATHER_SUCCESS, GET_TOMORROW_WEATHER, GET_TOMORROW_WEATHER_SUCCESS } from '../../constants/WeatherCard';
import { OW_APPID, FB_KEY, FB_DOMAIN, FB_DBURL } from '../../constants/basic';
import ColdImg from '../../img/cold.jpg';
import RainImg from '../../img/rain.jpg';
import SunImg from '../../img/sun.jpg';
import WindImg from '../../img/wind.jpg';
import CloudyImg from '../../img/cloudy.jpg';

import { CHANGE_TOWN } from '../../constants/Title';

const firebaseConfig = {
    apiKey: FB_KEY,
    authDomain: FB_DOMAIN,
    databaseURL: FB_DBURL
};

const firebase = Firebase.initializeApp(firebaseConfig);

let galyaWeather;

function weakDayLetter (date) {
    let day = date.toLocaleString('ru', {
        weekday: 'long'
    });
    return day.charAt(0).toUpperCase() + day.substr(1);
}

function weatherText (openWeatherObj) {
    let weatherTxt = openWeatherObj.weather[0].description;
    return weatherTxt.charAt(0).toUpperCase() + weatherTxt.substr(1);
}

function weatherAvgDeg (openWeatherObj) {
    let from, to;

    from = parseInt(openWeatherObj.temp.day, 10).toString();
    to = parseInt(openWeatherObj.temp.max, 10).toString();

    if (from > 0) {
        from = '+' + from
    }

    if (to > 0) {
        to = '+' + to
    }

    if (from === to) {
        return from;
    } else {
        return from + ' ... ' + to;
    }
}

function getRandomGalyaStatus (galyaDateAll, fraseType) {
    let frasesArr = [],
        key;

    for (key in galyaDateAll) {
        if (key.indexOf(fraseType) === 0) {
            frasesArr.push(galyaDateAll[key]);
        }
    }

    return frasesArr[Math.floor(Math.random()*frasesArr.length)];
}

function getGalyaMeteoData (galyaDateAll, openWeatherObj) {
    let from,
        to,
        tempStatus,
        windStatus,
        rainStatus,
        sunnyStatus,
        weatherRnd,
        cloudyStatus,
        galyaStatus = [];

    weatherRnd = parseInt(Math.random() * 10, 10);

    from = parseInt(openWeatherObj.temp.day, 10);
    to = parseInt(openWeatherObj.temp.max, 10);

    // cold
    if (from > 10 || to > 10) {
        tempStatus = 0;
    } else {
        tempStatus = 1;
    }

    // wind
    if (openWeatherObj.speed > 5) {
        windStatus = 1;
    } else {
        windStatus = 0;
    }

    // rain
    if (openWeatherObj.clouds > 50 && openWeatherObj.rain) {
        rainStatus = 1;
    } else {
        rainStatus = 0;
    }

    // sun
    if (openWeatherObj.clouds < 40 && !openWeatherObj.rain && openWeatherObj.speed < 6) {
        sunnyStatus = 1;
    } else {
        sunnyStatus = 0;
    }

    // cloudy
    if (openWeatherObj.clouds > 40 && !sunnyStatus && !rainStatus && !windStatus && !tempStatus) {
        cloudyStatus = 1;
    } else {
        cloudyStatus = 0;
    }

    // chose weather
    if (sunnyStatus) {
        galyaStatus = [getRandomGalyaStatus(galyaDateAll, 'sun'), SunImg];
    } else if (tempStatus) {
        galyaStatus = [getRandomGalyaStatus(galyaDateAll, 'cold'), ColdImg];
    } else if (rainStatus) {
        galyaStatus = [getRandomGalyaStatus(galyaDateAll, 'rain'), RainImg];
    } else if (windStatus) {
        galyaStatus = [getRandomGalyaStatus(galyaDateAll, 'wind'), WindImg];
    } else if (cloudyStatus) {
        galyaStatus = [getRandomGalyaStatus(galyaDateAll, 'cloud'), CloudyImg];
    }

    return galyaStatus;
}

export function getTodayWeather (town) {

    return (dispatch) => {
        dispatch({
            type: GET_TODAY_WEATHER,
            payload: {}
        });

        firebase.database().ref().once('value').then(function(snapshot) {
            galyaWeather = snapshot.val();

            Fetcher.getData(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${town}&lang=ru&units=metric&cnt=2&APPID=${OW_APPID}`)
                .then((data) => {
                    const weatherData = {
                        galyaWeather: getGalyaMeteoData(galyaWeather.today, data.list[0])[0],
                        weatherImg: getGalyaMeteoData(galyaWeather.tomorrow, data.list[0])[1],
                        day: weakDayLetter(new Date(data.list[0].dt * 1000)),
                        date: new Date(data.list[0].dt * 1000).toLocaleString('ru', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }),
                        town: data.city,
                        weatherText: weatherText(data.list[0]),
                        weatherAvgDeg: weatherAvgDeg(data.list[0]),
                        openWeather: data.list[0]
                    };
                    dispatch({
                        type: GET_TODAY_WEATHER_SUCCESS,
                        payload: weatherData
                    });
                })
                .catch(function(error) {
                    console.log('request failed', error)
                });
        });

    };

}

export function getTomorrowWeather (town) {

    return (dispatch) => {
        dispatch({
            type: GET_TOMORROW_WEATHER,
            payload: {}
        });

        firebase.database().ref().once('value').then(function(snapshot) {
            galyaWeather = snapshot.val();

            Fetcher.getData(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${town}&lang=ru&units=metric&cnt=2&APPID=${OW_APPID}`)
                .then((data) => {
                    const weatherData = {
                        galyaWeather: getGalyaMeteoData(galyaWeather.tomorrow, data.list[1])[0],
                        weatherImg: getGalyaMeteoData(galyaWeather.tomorrow, data.list[1])[1],
                        day: weakDayLetter(new Date(data.list[1].dt * 1000)),
                        date: new Date(data.list[1].dt * 1000).toLocaleString('ru', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }),
                        town: data.city,
                        weatherText: weatherText(data.list[1]),
                        weatherAvgDeg: weatherAvgDeg(data.list[1]),
                        openWeather: data.list[1]
                    };
                    dispatch({
                        type: GET_TOMORROW_WEATHER_SUCCESS,
                        payload: weatherData
                    });
                })
                .catch(function(error) {
                    console.log('request failed', error)
                });
        });

    };

}

export function changeTown (town) {

    return (dispatch) => {
        dispatch({
            type: CHANGE_TOWN,
            payload: town
        });
    };

}