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
                        <h2>{ user }</h2>
                        Lorem ipsum dolor sit amet.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                    </CardActions>
                </Card>
            </div>
        );
    }

    static mapStateToProps (state) {
        return {
            user: state.user,
            weather: state.weather,
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
