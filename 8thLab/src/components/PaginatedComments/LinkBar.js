/**
 * Created by Tirion on 21.02.2019.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'

class LinkBar extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        const {pages} = this.props;

        return (
            <div>
                {pages.map( page => (
                       <NavLink to={`/comments/${page}`} activeStyle={{color: 'red'}}>
                            {page}
                        </NavLink>
                ))}
            </div>
        );
    }
}

export default LinkBar;
