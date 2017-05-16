import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WeatherData extends Component {

    onButtonClcik () {
        this.props.getWeather();
    }

    render() {
        const { fetching } = this.props;

        return (
            <div>
                <span onClick={this.onButtonClcik.bind(this)}>Button</span>
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