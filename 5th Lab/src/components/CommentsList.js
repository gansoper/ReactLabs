/**
 * Created by Tirion on 06.02.2019.
 */
import React, {Component} from 'react'
import Comment from './Comment.js'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'


class CommentsList extends Component{

    static propTypes = {
        comments : PropTypes.arrayOf(Object)
    }


    static defaultProps = {
        comments : []
    }

    render(){
        const {isOpen, toggleOpen} = this.props;
        return (<div>
                    <button onClick={toggleOpen}>{isOpen == false? 'show Comments':'close Comments'}</button>
                    {this.getComments()}
                </div>);
    }

    getComments(){
        const {comments, isOpen, toggleOpen} = this.props;
        if (!isOpen){
            return null;
        }
        if (comments.length != 0) {
            const commentElements = this.props.comments.map(id => <li key = {id}><Comment id={id}/></li>);

            console.log(commentElements);
            return (<div>{commentElements}</div>);
        }
        else{
            return (<div>No comments yet</div>)
        }
    }



}

export default toggleOpen(CommentsList);