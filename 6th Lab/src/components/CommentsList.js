/**
 * Created by Tirion on 06.02.2019.
 */
import React, {Component} from 'react'
import Comment from './Comment.js'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import {connect} from 'react-redux'
import {getComments} from '../AC'
import Loader from './Loader'


class CommentsList extends Component{

    static propTypes = {
        comments : PropTypes.arrayOf(Object)
    }


    /*static defaultProps = {
        comments : []
    }*/

    render(){
        const {isOpen, toggleOpen} = this.props;
        return (<div>
                    <button onClick={toggleOpen}>{isOpen == false? 'show Comments':'close Comments'}</button>
                    {this.getArticleComments()}
                </div>);
    }

    getArticleComments(){
        const {comments, isOpen, articleId} = this.props;
        if (!isOpen || articleId != comments.articleId){
            return null;
        }

        if (comments.loading){
            return <Loader />
        }

        if (comments.length != 0) {
            const commentElements = comments.entities.map((comment) => <li key = {comment.id}><Comment id={comment.id}/></li>);

            console.log(commentElements);
            return (<div>{commentElements}</div>);
        }
        else{
            return (<div>No comments yet</div>)
        }
    }

    componentWillReceiveProps({getComments, articleId, isOpen, comments}){
        if (isOpen && ((!comments.loading && !comments.loaded) || (articleId != comments.articleId))){
            getComments(articleId);
        }
    }

}

export default connect((state)=>{
   return {comments: state.comments}

}, {getComments}) (toggleOpen(CommentsList));