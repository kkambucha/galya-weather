import './Home.css';
import React, { Component } from 'react';
import WeatherCard from '../WeatherCard';

class Home extends Component {
    render() {
        return (
            <div className="b-home">
                <WeatherCard/>
            </div>
        );
    }
}

export default Home;
