import React from 'react'
import {render} from 'react-dom'
//import Article from './Article'
import ArticleList from './ArticleList'
import {articles} from './fixtures'
/*
render(<ArticleList articles = {articles} />, document.getElementById('container'))*/

function HelloWorld(){
    return <h1>Hello world</h1>
}

render (<ArticleList articles={articles}/>, document.getElementById('container'));
