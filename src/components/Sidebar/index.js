import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';

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
            containerElement={<Link to="/" />}
            primaryText="Погода в Москве" />
        <MenuItem
            containerElement={<Link to="/science" />}
            primaryText="Научная основа" />
        <MenuItem
            containerElement={<Link to="/about" />}
            primaryText="О проекте" />
    </IconMenu>
);

MainMenu.muiName = 'IconMenu';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title="МетеоГаля"
                    showMenuIconButton={false}
                    iconElementRight={<MainMenu />}
                />
            </div>
        );
    }
}

export default Sidebar;