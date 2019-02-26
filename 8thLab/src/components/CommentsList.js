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
import store from '../Store'


class CommentsList extends Component{

    static propTypes = {
        comments : PropTypes.arrayOf(Object)
    }

    static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        user: PropTypes.string,
        labels: PropTypes.array
    }

    /*static defaultProps = {
        comments : []
    }*/

    render(){
        const {isOpen, toggleOpen} = this.props;
        console.log(this.context);
        return (<div>
            User:  {this.context.user}
            <button onClick={toggleOpen}>{isOpen == false? this.context.labels.showComments:this.context.labels.closeComments}</button>
                    {this.getArticleComments()}
                </div>);
    }

    getArticleComments(){
        const {comments, isOpen, articleId, getComments} = this.props;
        if (!isOpen){
            return null;
        }

        if (!comments || !comments.loaded || articleId != comments.articleId){
            getComments(articleId);
        }

        if (comments.loading){
            return <Loader />
        }

         if (comments.entities.size != 0 && comments.loaded) {
            const commentElements = comments.entities.map((comment) => <li key = {comment.id}><Comment id={comment.id}/></li>);

            console.log(commentElements);
            return (<div>{commentElements}</div>);
        }
        else{
            return (<div>No comments yet</div>)
        }
    }

   /* componentWillReceiveProps({getComments, articleId, isOpen, comments}){
        if (isOpen && ((!comments.loading && !comments.loaded) || (articleId != comments.articleId))){
            getComments(articleId);
        }
    }*/



}

export default connect((state)=>{
   return {comments: state.comments}

}, {getComments}, null, {pure:false}) (toggleOpen(CommentsList));