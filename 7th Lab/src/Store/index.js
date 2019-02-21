/**
 * Created by Tirion on 12.02.2019.
 */
import {createStore, applyMiddleware} from 'redux'
import reducer from '../Reducer'
import logger from '../middlewares/logger'
import generateId from '../middlewares/generateId'
import api from '../middlewares/api'
import thunk from 'redux-thunk'

const enhancer = applyMiddleware(logger, generateId, api, thunk)

const store = createStore(reducer, {}, enhancer);
//debug
window.store = store;

export default store;