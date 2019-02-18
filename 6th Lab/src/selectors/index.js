/**
 * Created by Tirion on 13.02.2019.
 */
import {createSelector} from 'reselect'
import {mapToArray} from '../Helpers/arrayMapHelper'

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles.entities;
const commentsGetter = state => state.comments.entities;
const idGetter = (state, props) => props.id;

export const filtratedArticlesSelector = createSelector(filtersGetter, articlesGetter, (filters, articles) => {
        const {selection, dates: {from, to}} = filters;
        return mapToArray(articles).filter(article => {
            const articleDate = new Date(article.date);
            return (!selection || !selection.length || selection.map(selection => selection.value).includes(article.id))
                && (!from || !to || (from <= articleDate && to >= articleDate))
        });
    }
);

export const extractedCommentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) =>{
   return  comments.get(id);
})
