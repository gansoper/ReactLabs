/**
 * Created by Tirion on 12.02.2019.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'
import MyDatePicker from './MyDatePicker'
import UserForm from './UserForm';
import 'react-select/dist/react-select.css';
import {connect} from 'react-redux';
import {selectOtherValue} from '../../AC'

class Filters extends Component {

    static propTypes = {
       // selection: PropTypes.object.isRequired,
       // articles: PropTypes.array.isRequired
    }

    /* state = {
     selection: null
     };*/

    render() {
        const {articles, filters} = this.props;

        const selectOptions = articles.map(article=>({
            label: article.title,
            value: article.id
        }));

        const {selection} = filters;

        return (
            <div>
                <UserForm />
                <Select options={selectOptions} value={selection} onChange={this.changeSelect} multi={true}/>
                <MyDatePicker />
            </div>
        );
    }

    changeSelect = selection=> {
        const {selectOtherValue} = this.props;
        selectOtherValue(selection);
    }
}

export default connect(state => ({
    articles: state.articles,
    filters: state.filters
}), {selectOtherValue})
(Filters);
