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
        const { fetching, todayWeather, tomorrowWeather } = this.props;
        const { getTodayWeather, getTomorrowWeather } = this.props.weatherActions;

        return (
            <div className="b-weather-card">
                <Card>
                    <Tabs>
                        <Tab label="Сегодня" value="a">
                            <div>
                                <WeatherData day="today" fetching={fetching} getWeather={getTodayWeather} todayWeather={todayWeather}/>
                            </div>
                        </Tab>
                        <Tab label="Завтра" value="b">
                            <div>
                                <WeatherData day="tomorrow" fetching={fetching} getWeather={getTomorrowWeather} tomorrowWeather={tomorrowWeather}/>
                            </div>
                        </Tab>
                    </Tabs>
                </Card>
            </div>
        );
    }

    static mapStateToProps (state) {
        return {
            user: state.user,
            todayWeather: state.todayWeather,
            tomorrowWeather: state.tomorrowWeather,
            fetching: state.fetching
        }
    }

    static mapDispatchToProps (dispatch) {
        return {
            weatherActions: bindActionCreators(weatherActions, dispatch)
        }
    }
}

export default connect(WeatherCard.mapStateToProps, WeatherCard.mapDispatchToProps)(WeatherCard);
