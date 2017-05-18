import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import TitleComponent from './Title';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as weatherActions from '../WeatherCard/weatherActions';
import './Sidebar.css';

import { Link } from 'react-router-dom';

const MainMenu = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem
            containerElement={<Link to="/meteogalya/" />}
            primaryText="Погода в Москве" />
        <MenuItem
            containerElement={<Link to="/meteogalya/science" />}
            primaryText="Научная основа" />
        <MenuItem
            containerElement={<Link to="/meteogalya/about" />}
            primaryText="О проекте" />
    </IconMenu>
);

MainMenu.muiName = 'IconMenu';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title={<TitleComponent weatherTown={this.props.weatherTown} changeTown={this.props.weatherActions.changeTown} />}
                    showMenuIconButton={false}
                    iconElementRight={<MainMenu />}
                />
            </div>
        );
    }

    static mapStateToProps (state) {
        return {
            weatherTown: state.weather.weatherTown
        }
    }

    static mapDispatchToProps (dispatch) {
        return {
            weatherActions: bindActionCreators(weatherActions, dispatch)
        }
    }
}

export default connect(Sidebar.mapStateToProps, Sidebar.mapDispatchToProps)(Sidebar);