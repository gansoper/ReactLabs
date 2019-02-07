/**
 * Created by Tirion on 06.02.2019.
 */
import React from 'react'
import Article from './Article'

export default function ArticleList({articles}){
      const articleElements = articles.map((article)=><li key={article.id}><Article article={article} /></li>)
      return (
          <ul>
            {articleElements}
          </ul>
    )
}