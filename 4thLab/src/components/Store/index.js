/**
 * Created by Tirion on 12.02.2019.
 */
import {createStore} from 'redux'
import reducer from '../Reducer'



const store = createStore(reducer);
//debug
window.store = store;

export default store;