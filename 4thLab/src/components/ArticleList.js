/**
 * Created by Tirion on 06.02.2019.
 */
import React, {Component} from 'react'
import Article from './Article/index'
import PropTypes from 'prop-types'
import Accordeon from '../decorators/Accordeon'
import {connect} from 'react-redux'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.arrayOf(Article),
        elementId: PropTypes.string.isRequired,
        toggleOpen: PropTypes.func
    }


    render() {
        const {articles, filters, elementId, toggleOpen} = this.props;
        const filteredArticles = this.applyFilters(filters, articles);
        const articleElements = filteredArticles.map((article)=><li key={article.id} >
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

    applyFilters(filters, articles){

        let filteredArticles = articles;

        if (filters.selection != null && filters.selection.length != 0) {
            filteredArticles =  articles.filter((article) => filters.selection.map(selection => selection.value).includes(article.id));
        }

        if (filters.dates != null && typeof(filters.dates.from) !== 'undefined' && typeof(filters.dates.to) !== 'undefined'){
            filteredArticles = filteredArticles.filter((article)=>
                filters.dates.from<=new Date(article.date) && filters.dates.to>=new Date(article.date)
            )
        }

        return filteredArticles;
    }
}

export default connect(state=>({
    articles: state.articles,
    filters: state.filters
}))(Accordeon(ArticleList));

