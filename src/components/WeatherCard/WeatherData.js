import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WeatherData extends Component {

    componentDidMount () {
        this.props.getWeather();
    }

    render() {
        const { fetching } = this.props;

        return (
            <div>
                {
                    fetching ?
                        <p>Загрузка...</p>
                        :
                        <p>WeatherData</p>
                }
            </div>
        );
    }
}

WeatherData.propTypes = {
    getWeather: PropTypes.func.isRequired
};

export default WeatherData;