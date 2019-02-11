/**
 * Created by Tirion on 11.02.2019.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class MyDatePicker extends Component {

    state = {
        from: undefined,
        to: undefined
    };

    resetState = () => {
        this.setState({
            from: undefined,
            to: undefined
        })
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
    handleResetClick = () => {
        this.setState(this.resetState());
    }

    render() {

        const { from, to } = this.state;
        const modifiers = {start: from, end: to};
        const numberOfMonth = 1;
        return (
            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from && to && `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from && to && (
                        <button className="link" onClick={this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>
                <DayPicker
                    className="Selectable"
                    numberOfMonths={numberOfMonth}
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
            </div>
        )
    }


}

export default MyDatePicker;
