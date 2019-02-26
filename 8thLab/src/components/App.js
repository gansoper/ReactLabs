/**
 * Created by Tirion on 08.02.2019.
 */
import React, {Component} from 'react'
import Articles from './RouteHandlers/Articles'
import PropTypes from 'prop-types'
import Filters from './Filters'
import Counter from './Counter'
import PaginatedComments from './PaginatedComments/PaginatedComments'
import { Route, NavLink, BrowserRouter, Switch,Router } from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import history from '../history'
import store from '../Store'
import UserForm from './Filters/UserForm'
import LanguageSelector from './LanguageSelector'
import {RU_LABELS, EN_LABELS} from '../constants'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {ExposurePlus1Rounded, FilterList, Description, Comment} from '@material-ui/icons';


class App extends Component {

    static childContextTypes = {
        user: PropTypes.string,
        labels: PropTypes.array
    }


    state = {
        userName: '',
        labels: EN_LABELS
    };

    getChildContext() {
        return {
            user: this.state.userName,
            labels: this.state.labels
        }
    }

    changeUserName = (name) =>this.setState({userName: name})

    changeLanguage = (lang) => {
        if (lang == 'ru') {
            this.setState({
                labels: RU_LABELS
            });
        }
        else {
            this.setState({
                labels: EN_LABELS
            });
        }
    }

    render() {
        return (
            <ConnectedRouter history={history} store={store}>

                <div>
                    <LanguageSelector onChange={this.changeLanguage}/>
                    <div>
                        <h2>{this.state.labels.mainMenu}</h2>
                        <List component="nav">
                            <ListItem button>
                                <ListItemIcon>
                                    <ExposurePlus1Rounded />
                                </ListItemIcon>
                                <ListItemText primary={<NavLink activeStyle={{color:'red'}} to="/counter">{this.state.labels.counter}</NavLink>}/>
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>
                                    <FilterList />
                                </ListItemIcon>
                                <ListItemText primary={<NavLink activeStyle={{color:'red'}} to="/filters">{this.state.labels.filters}</NavLink>}/>
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>
                                    <Description />
                                </ListItemIcon>
                                <ListItemText primary={<NavLink activeStyle={{color:'red'}} to="/articles">{this.state.labels.articles}</NavLink>}/>
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>
                                    <Comment />
                                </ListItemIcon>
                                <ListItemText primary={<NavLink activeStyle={{color:'red'}} to="/comments">{this.state.labels.comments}</NavLink>}/>
                            </ListItem>

                        </List>


                    </div>
                    <UserForm value={this.state.userName} onChange={this.changeUserName}/>
                    <Switch>
                        <Route path="/counter" component={Counter}/>
                        <Route path="/filters" component={Filters}/>
                        <Route path="/articles" component={Articles}/>
                        <Route path="/comments" component={PaginatedComments}/>
                    </Switch>
                </div>
            </ConnectedRouter>
        )
    }

}

export default App;