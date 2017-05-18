import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';

class WeatherData extends Component {

    componentWillMount () {
        this.weatherDay = 0;
        if (this.props.day !== 'today') {
            this.weatherDay = 1;
        }
    }

    componentDidMount () {
        this.props.getWeather(this.props.weatherTown);
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props.weatherTown);
        console.log(nextProps.weatherTown);
        if (this.props.weatherTown !== nextProps.weatherTown) {
            this.props.getWeather(nextProps.weatherTown);
        }
    }

    render() {
        const { fetching } = this.props;

        return (
            <div>
                {
                    fetching ?
                        <div className="b-weather-card__progress">
                            <CircularProgress size={80} thickness={5} />
                        </div>
                        :
                        <div className="b-weather-card__p">
                            <CardMedia
                                overlay={<CardTitle title={ this.weatherDay ? this.props.tomorrowWeather.weatherAvgDeg : this.props.todayWeather.weatherAvgDeg } subtitle={ this.weatherDay ? this.props.tomorrowWeather.weatherText : this.props.todayWeather.weatherText } />}
                            >
                                <img src={ this.weatherDay ? this.props.tomorrowWeather.weatherImg : this.props.todayWeather.weatherImg } height={250} alt="Weather Pic" />
                            </CardMedia>
                            <CardTitle className="b-weather-card__title" title={ this.weatherDay ? this.props.tomorrowWeather.day : this.props.todayWeather.day } subtitle={ this.weatherDay ? this.props.tomorrowWeather.date : this.props.todayWeather.date } />
                            <Divider />
                            <CardText className="b-weather-card__text">
                                <h2 className="b-weather-card__galya-title">Прогноз Гали на { this.weatherDay ? 'завтра' : 'сегодня' }</h2>
                                <p className="b-weather-card__galya-text">
                                    &laquo;{ this.weatherDay ? this.props.tomorrowWeather.galyaWeather : this.props.todayWeather.galyaWeather }&raquo;
                                </p>
                            </CardText>
                        </div>
                }
            </div>
        );
    }
}

WeatherData.propTypes = {
    getWeather: PropTypes.func.isRequired,
    weatherTown: PropTypes.string.isRequired
};

export default WeatherData;