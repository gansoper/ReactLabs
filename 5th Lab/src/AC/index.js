/**
 * Created by Tirion on 12.02.2019.
 */
import {INCREMENT,DELETE_ARTICLE, SELECT_ARTICLE, CHANGE_DATE, ADD_COMMENT } from '../constants'

export function increment(){
    return {
        type:INCREMENT
    }
}

export function deleteArticle(id){
    return {
        type: DELETE_ARTICLE,
        payload:{id}
    }
}

export function selectOtherValue(selection){
    console.log('SELECTION:' + selection);
    return {
        type: SELECT_ARTICLE,
        payload:{selection}
    }
}

export function selectOtherDate(dates){
    return {
        type: CHANGE_DATE,
        payload:{dates}
    }
}

export function addComment(comment, articleId){
    return {
        type: ADD_COMMENT,
        payload: {comment, articleId},
        generateId: true
    }
}