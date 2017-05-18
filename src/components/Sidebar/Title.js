import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Title extends Component {
    handleSelectChange (event, index, value) {
        this.props.changeTown(value);
    }

    render() {
        return (
            <span className="b-title">
                <span className="b-title__head">МетеоГаля</span>
                <span className="b-title__paragraph">биометрическая метеорология</span>
                <span className="b-title__select">
                    <SelectField
                        floatingLabelText="Город"
                        floatingLabelStyle={{color: '#ffffff'}}
                        labelStyle={{color: '#ffffff'}}
                        value={this.props.weatherTown}
                        onChange={this.handleSelectChange.bind(this)}
                    >
                      <MenuItem value={'Moscow'} primaryText="Москва" />
                      <MenuItem value={'Krasnodar'} primaryText="Краснодар" />
                      <MenuItem value={'Barnaul'} primaryText="Барнаул" />
                      <MenuItem value={'Novosibirsk'} primaryText="Новосибирск" />
                      <MenuItem value={'Tuapse'} primaryText="Туапсе" />
                    </SelectField>
                </span>
            </span>
        );
    }
}

Title.propTypes = {
    changeTown: PropTypes.func.isRequired,
    weatherTown: PropTypes.string.isRequired
};

export default Title;
