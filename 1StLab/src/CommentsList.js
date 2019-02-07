/**
 * Created by Tirion on 06.02.2019.
 */
import React, {Component} from 'react'


export default class CommentsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            isCommentOpen:false
        }
    }

    render(){
        console.log(this.props);
        return (<div>
                    <button onClick={this.commentsOpen}>{this.state.isCommentOpen == false? 'show Comments':'close Comments'}</button>
                    {this.getComments()}
                </div>);
    }

    getComments(){
        if (this.state.isCommentOpen == false){
            return null;
        }
        let {comments} = this.props;
        if (comments != null && comments.length != 0) {
            const commentElements = this.props.comments.map(comment => <li key = {comment.id}>
                <strong>{comment.user}</strong>
                <p>{comment.text}</p>
            </li>);

            console.log(commentElements);
            return (<div>{commentElements}</div>);
        }
    }

    commentsOpen = () =>{
        this.setState({
            isCommentOpen:!this.state.isCommentOpen
        })
    }

}