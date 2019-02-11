/**
 * Created by Tirion on 11.02.2019.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        userName:''
    };

    render() {
        return (
            <div>Name: <input type="text" value={this.state.userName} onChange={this.changeUserName}/></div>
        );
    }

    changeUserName = (ev) =>{
        if (ev.target.value.length > 10){
            return;
        }
        this.setState({
            userName: ev.target.value
        });
    }
}

export default UserForm;
