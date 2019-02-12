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
import {deleteArticle} from '../../AC'



class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired

        }).isRequired
    }


    render() {

        const {article, isOpen, toggleOpen} = this.props;
        return (
            <div ref={this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                <button onClick={this.deleteClick}>Delete Article</button>
                <CSSTransitionGroup   transitionName="article"
                                      transitionEnterTimeout={200}
                                      transitionLeaveTimeout={500}>
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    setContainerRef = ref =>{
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
        else {
            return <section>
                <div>{article.text}</div>
                <div><CommentForm /></div>
                <div><CommentsList comments={article.comments} ref={this.setCommentsRef}/></div>
            </section>;
        }
    }

    setCommentsRef = ref => {
        console.log(findDOMNode(ref))
    }

    componentWillMount(){

    }

    componentDidMount(){
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }

}

export default connect(null, {deleteArticle})(Article);

