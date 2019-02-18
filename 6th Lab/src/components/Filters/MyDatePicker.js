/**
 * Created by Tirion on 11.02.2019.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import '../../../node_modules/react-day-picker/lib/style.css';
import {connect} from 'react-redux'
import {selectOtherDate} from '../../AC'

class MyDatePicker extends Component {

   /* state = {
        from: undefined,
        to: undefined
    };*/

    resetState = () => {
        /*this.setState({
            from: undefined,
            to: undefined
        })*/
    }

    handleDayClick = (day) => {
        const {dates} = this.props.filters;
        const range = DateUtils.addDayToRange(day, dates);
        const {selectOtherDate} = this.props;
        selectOtherDate(range);
    }

    handleResetClick = () => {
        const {selectOtherDate} = this.props;
        selectOtherDate({
            from: undefined,
            to: undefined
        })
    }

    render() {
        const { filters} = this.props;
        const { from, to } = filters.dates;
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

export default connect(state=>({
    filters:state.filters
}), {selectOtherDate}) (MyDatePicker);
