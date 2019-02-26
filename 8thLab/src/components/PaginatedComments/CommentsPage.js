/**
 * Created by Tirion on 21.02.2019.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {getCommentByPage} from '../../AC'
import Comment from '../../components/Comment'



class CommentsPage extends Component {
    static propTypes = {
        comments: PropTypes.arrayOf(Object)
    }




    render() {
        return (
            <div>
                {this.getComments()}
            </div>);
    }

    getComments() {
        const {comments} = this.props;

        if (!comments)
            return null;

        if ((!!comments)&& comments.entities.size != 0) {
            const commentElements = comments.entities.map((comment) => <li key={comment.id}><Comment id={comment.id}/>
            </li>);

            console.log(commentElements);
            return (<div>{commentElements}</div>);
        }
        else
        if (comments.loading) {
            return <Loader />
        }
        else
        {
            return (<div>No comments yet</div>)
        }
    }

    componentWillMount(){
        const {getCommentByPage, page}  = this.props;
        getCommentByPage(page);
    }
}

export default connect((state)=>{
    return {
        comments: state.comments
    }

}, {getCommentByPage})( CommentsPage);
