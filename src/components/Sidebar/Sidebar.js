import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Погода в Москве" />
        <MenuItem primaryText="О проекте" />
    </IconMenu>
);

Logged.muiName = 'IconMenu';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title="Galya-Weather App"
                    showMenuIconButton={false}
                    iconElementRight={<Logged />}
                />
            </div>
        );
    }
}

export default Sidebar;