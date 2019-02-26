/**
 * Created by Tirion on 12.02.2019.
 */
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import CounterReducer from './counter'
import ArticleReducer from './article'
import FilterReducer from './filters'
import CommentReducer from './comments'

export default combineReducers({
    count: CounterReducer, // count is the field of the global State
    articles: ArticleReducer,
    filters: FilterReducer,
    comments: CommentReducer,
    router: routerReducer
});

