/**
 * Created by Tirion on 05.02.2019.
 */
import React, {Component} from 'react'
import CommentsList from './CommentsList'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import {CSSTransitionGroup} from 'react-transition-group';
import CommentForm from './CommentForm'
import './article.css'



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
                <CSSTransitionGroup   transitionName="article"
                                      transitionEnterTimeout={30000}
                                      transitionLeaveTimeout={30000}>
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    setContainerRef = ref =>{
        this.container = ref;
        console.log(ref);
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

export default Article;

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
