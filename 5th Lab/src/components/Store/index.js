/**
 * Created by Tirion on 12.02.2019.
 */
import {createStore, applyMiddleware} from 'redux'
import reducer from '../Reducer'
import logger from '../../middlewares/logger'

const enhancer = applyMiddleware(logger)

const store = createStore(reducer, {}, enhancer);
//debug
window.store = store;

export default store;