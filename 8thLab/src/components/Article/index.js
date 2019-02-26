/**
 * Created by Tirion on 05.02.2019.
 */
import React, {Component} from 'react'
import CommentsList from './../CommentsList'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import {CSSTransitionGroup} from 'react-transition-group';
import CommentForm from './../CommentForm/index';
import './style.css';
import {connect} from 'react-redux';
import {deleteArticle, getArticleById} from '../../AC'
import Loader from '../Loader'


class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired

        }).isRequired
    }

    static contextTypes = {
        labels: PropTypes.array
    }

    render() {

        const {article, isOpen, toggleOpen} = this.props;
        if (!article) return null;
        return (
            <div ref={this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? this.context.labels.closeArticle : this.context.labels.openArticle}
                </button>
                <button onClick={this.deleteClick}>{this.context.labels.deleteArticle}</button>
                <CSSTransitionGroup transitionName="article"
                                    transitionEnterTimeout={200}
                                    transitionLeaveTimeout={500}>
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    setContainerRef = ref => {
        this.container = ref;
        console.log(ref);
    }

    deleteClick = () => {
        console.log('DELETION!');
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
    }

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen)
            return null;

        if (article.loading){
            return <Loader />
        }

        return <section>
            <div>{article.text}</div>
            <div><CommentForm articleId={article.id}/></div>
            <div><CommentsList articleId={article.id} ref={this.setCommentsRef}/></div>
        </section>;

    }

    setCommentsRef = ref => {
        console.log(findDOMNode(ref))
    }

    componentWillMount() {

    }

   

    componentDidMount() {
        const { getArticleById, article, id} = this.props;
        if (!article || (!article.text && !article.loading)) {
            getArticleById(id);
        }
    }


}

export default connect((state, ownProps) =>({
    article: state.articles.entities.get(ownProps.id)
}), {deleteArticle, getArticleById}, null, {pure:false})(Article);

