/**
 * Created by Tirion on 08.02.2019.
 */
import React, {Component} from 'react'
import ArticleList from './ArticleList'
import PropTypes from 'prop-types'

class App extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <ArticleList articles={this.props.articles}/>
            </div>
        )
    }
}

export default App;