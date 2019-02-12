/**
 * Created by Tirion on 12.02.2019.
 */
import {combineReducers} from 'redux'
import CounterReducer from './counter'
import ArticleReducer from './article'
import FilterReducer from './filters'

export default combineReducers({
    count: CounterReducer, // count is the field of the global State
    articles: ArticleReducer,
    filters: FilterReducer
});

