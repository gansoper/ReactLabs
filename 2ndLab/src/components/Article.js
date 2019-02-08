/**
 * Created by Tirion on 05.02.2019.
 */
import React, {Component} from 'react'
import CommentsList from './CommentsList'
import PropTypes from 'prop-types'
//import toggleOpen from '../decorators/toggleOpen'

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
                {this.getBody()}
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
                <div><CommentsList comments={article.comments}/></div>
            </section>;
        }
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
