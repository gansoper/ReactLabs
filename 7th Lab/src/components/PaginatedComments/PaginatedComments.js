/**
 * Created by Tirion on 21.02.2019.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkBar from './LinkBar'
import CommentsPage from './CommentsPage'
import {connect} from 'react-redux'
import {NavLink, Route} from 'react-router-dom'


class PaginatedComments extends Component {
    static defaultProps = {};

    static propTypes = {};


    render() {
        const {pages} = this.props.comments;
        if (!pages || pages.length == 0) {
            return (
                <div>
                    <button><NavLink to="/comments/1">Get Comments</NavLink></button>

                    <Route path="/comments/:page" render={this.getComments}/>
                </div>
            )
        }

        return (
            <div>
                <button>
                    <NavLink to="/comments/1"/>
                    Get Comments
                </button>
                <Route path="/comments/:page" render={this.getComments}/>
                <LinkBar pages={pages}/>
            </div>
        );
    }

    getComments = ({match}) => {
        const {page} = match.params;
        return <CommentsPage page={page} key={page}/>
    }

}

export  default connect((state)=> {
    return {
        comments: state.comments
    }

})(PaginatedComments);
