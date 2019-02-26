/**
 * Created by Tirion on 11.02.2019.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class UserForm extends Component {
    static defaultProps = {};

    static propTypes = {};



    render() {
        return (
            <div>
                <TextField
                    id="outlined-name"
                    label="User Name"
                    value={this.props.value}
                    onChange={this.changeUserName}
                    margin="normal"
                    variant="outlined"
                />

            </div>
        );
    }

    changeUserName = (ev) =>{
        if (ev.target.value.length > 10){
            return;
        }
       this.props.onChange(ev.target.value);
    }
}

export default UserForm;
