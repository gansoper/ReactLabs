/**
 * Created by Tirion on 05.02.2019.
 */
import React, {Component} from 'react'
import CommentsList from './CommentsList'

export default class Article extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen:false
        }
    }

    render(){

        const {isOpen} = this.state;
        const {article} = this.props;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen}>
                    {isOpen? 'Close':'Open'}
                </button>
                {this.getBody(article)}
            </div>
        )
    }

    getBody(article){
        if (!this.state.isOpen)
            return null;
        else{
            return <section><div>{article.text}</div><div><CommentsList comments={article.comments}/></div></section>;
        }
    }

    toggleOpen = () =>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
}

/*
export default function Article(props){
    console.log("---", props);
    const {article} = props;
    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}*/
