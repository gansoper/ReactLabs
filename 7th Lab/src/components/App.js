/**
 * Created by Tirion on 08.02.2019.
 */
import React, {Component} from 'react'
import Articles from './RouteHandlers/Articles'
import PropTypes from 'prop-types'
import Filters from './Filters'
import Counter from './Counter'
import PaginatedComments from './PaginatedComments/PaginatedComments'
import {HashRouter as Router, Route, NavLink} from 'react-router-dom'


class App extends Component {

    render() {
        return (
                <Router>
                    <div>
                        <div>
                            <h2>Main Menu</h2>
                            <div><NavLink activeStyle={{color:'red'}} to="/counter">Counter</NavLink></div>
                            <div><NavLink activeStyle={{color:'red'}} to="/filters">Filters</NavLink></div>
                            <div><NavLink activeStyle={{color:'red'}} to="/articles">Articles</NavLink></div>
                            <div><NavLink activeStyle={{color:'red'}} to="/comments">Comments</NavLink></div>
                        </div>
                        <Route path="/counter" component  = {Counter}/>
                        <Route path="/filters" component  = {Filters}/>
                        <Route path="/articles" component  = {Articles}/>
                        <Route path="/comments" component  = {PaginatedComments}/>
                    </div>
                </Router>
        )
    }

}

export default App;