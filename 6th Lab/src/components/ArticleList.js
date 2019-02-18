/**
 * Created by Tirion on 06.02.2019.
 */
import React, {Component} from 'react'
import Article from './Article/index'
import PropTypes from 'prop-types'
import Accordeon from '../decorators/Accordeon'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../selectors'
import {getArticles} from '../AC'
import Loader from './Loader'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.arrayOf(Article),
        elementId: PropTypes.string.isRequired,
        toggleOpen: PropTypes.func
    }

    componentDidMount(){
        const {loaded, loading, getArticles}  = this.props;
        if (!loaded || !loading){
            getArticles()
        }
    }

    render() {
        const {elementId, toggleOpen, articles, loading} = this.props;
        if (loading){
            return <Loader />
        }
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
        articles: filtratedArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    }

}, {getArticles})(Accordeon(ArticleList));
