import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as weatherActions from './weatherActions';
import WeatherData from './WeatherData';
import './WeatherCard.css';

class WeatherCard extends Component {
    render() {
        console.log(this.props);
        const { fetching, todayWeather, tomorrowWeather, weatherTown } = this.props;
        const { getTodayWeather, getTomorrowWeather } = this.props.weatherActions;

        return (
            <div className="b-weather-card">
                <Card>
                    <Tabs>
                        <Tab label="Сегодня" value="a">
                            <div>
                                <WeatherData day="today" weatherTown={weatherTown} fetching={fetching} getWeather={getTodayWeather} todayWeather={todayWeather}/>
                            </div>
                        </Tab>
                        <Tab label="Завтра" value="b">
                            <div>
                                <WeatherData day="tomorrow" weatherTown={weatherTown} fetching={fetching} getWeather={getTomorrowWeather} tomorrowWeather={tomorrowWeather}/>
                            </div>
                        </Tab>
                    </Tabs>
                </Card>
            </div>
        );
    }

    static mapStateToProps (state) {
        console.log(state);
        return {
            weatherTown: state.weather.weatherTown,
            todayWeather: state.weather.todayWeather,
            tomorrowWeather: state.weather.tomorrowWeather,
            fetching: state.weather.fetching
        }
    }

    static mapDispatchToProps (dispatch) {
        return {
            weatherActions: bindActionCreators(weatherActions, dispatch)
        }
    }
}

export default connect(WeatherCard.mapStateToProps, WeatherCard.mapDispatchToProps)(WeatherCard);
