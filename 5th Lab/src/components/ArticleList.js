/**
 * Created by Tirion on 06.02.2019.
 */
import React, {Component} from 'react'
import Article from './Article/index'
import PropTypes from 'prop-types'
import Accordeon from '../decorators/Accordeon'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../selectors'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.arrayOf(Article),
        elementId: PropTypes.string.isRequired,
        toggleOpen: PropTypes.func
    }


    render() {
        const {articles, elementId, toggleOpen} = this.props;
        const articleElements = articles.map((article)=><li key={article.id} >
            <Article article={article}
                     isOpen={article.id == elementId}
                     toggleOpen={toggleOpen(article.id)}
            />
        </li>);
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

}


export default connect((state) => {
    return {
        articles: filtratedArticlesSelector(state)
    }

})(Accordeon(ArticleList));
