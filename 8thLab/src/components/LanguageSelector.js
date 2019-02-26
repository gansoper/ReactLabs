/**
 * Created by Tirion on 26.02.2019.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class LanguageSelector extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        language: 'en'
    };


    render() {
        return (
            <div>
                <InputLabel htmlFor="age-simple">Language</InputLabel>
                <Select value={this.state.language} onChange={this.languageChange}
                        inputProps={{
                                name: 'language',
                                 id: 'sample-ui-control',
                        }}
                >
                    <MenuItem value={'en'}>English</MenuItem>
                    <MenuItem value={'ru'}>Russian</MenuItem>
                </Select>
            </div>
        );
    }

   languageChange = (ev) => {
       this.setState({language:ev.target.value});
       this.props.onChange(ev.target.value);
   }
}

export default LanguageSelector;
