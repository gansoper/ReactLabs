/**
 * Created by Tirion on 05.02.2019.
 */
import React, {Component} from 'react';
import ArticleList from './../ArticleList';
import PropTypes from 'prop-types';
import Article from '../Article';
import {Route} from 'react-router-dom';



class Articles extends Component {
   
    render() {
            return (
                   <div>
                       <ArticleList /> 
                        <Route path="/articles/:id" render={this.getArticle}/>
                   </div> 
            ); 

       
    }

    getArticle = ({match}) =>{
        const {id} = match.params;
        return <Article id={id} isOpen={true} key={id}/>
    }


}

export default Articles;

