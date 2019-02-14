/**
 * Created by Tirion on 12.02.2019.
 */
import React from 'react'
import App from './App'
import {Provider} from 'react-redux'
import store from './Store'


function ReduxWrapper(props){
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default ReduxWrapper;