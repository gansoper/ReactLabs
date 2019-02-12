/**
 * Created by Tirion on 08.02.2019.
 */
import React, {Component} from 'react'
import ArticleList from './ArticleList'
import PropTypes from 'prop-types'
import Filters from './Filters'
import Counter from './Counter'


class App extends Component {

    render() {
        return (
                <div>
                    <Counter />
                    <Filters/>
                    <ArticleList/>
                </div>
        )
    }

}

export default App;