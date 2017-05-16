import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as weatherActions from './weatherActions';
import WeatherData from './WeatherData';

class WeatherCard extends Component {
    render() {
        const { user, weather, fetching } = this.props;
        const { getWeather } = this.props.weatherActions;

        return (
            <div>
                <Card>
                    <CardHeader
                        title="URL Avatar"
                        subtitle="Subtitle"
                    />
                    <CardMedia
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                    >
                        <img src="https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header" height={200} alt="Alt text" />
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                    <CardText>
                        <WeatherData fetching={fetching} weather={weather} getWeather={getWeather}/>
                        <h1>Weather Card</h1>
                        <h2>{ user }</h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: state.user,
        weather: state.weather,
        fetching: state.fetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        weatherActions: bindActionCreators(weatherActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);
