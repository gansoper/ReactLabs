/**
 * Created by Tirion on 12.02.2019.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
    static defaultProps = {};

    static propTypes = {
        counter: PropTypes.number.isRequired
    };

    state = {};

    render() {
        const {counter} = this.props;
        return (
            <div>
                <h2>
                    {counter}
                </h2>
                <button onClick={this.incrementCounter}>Increment Counter</button>
            </div>
        );
    }

    incrementCounter = () => {
        this.props.increment();
    }
}

export default connect((state)=>({
    counter: state.count
}), {increment})(Counter);
