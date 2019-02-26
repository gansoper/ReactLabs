/**
 * Created by Tirion on 12.02.2019.
 */
import {INCREMENT,DELETE_ARTICLE,
    SELECT_ARTICLE,
    CHANGE_DATE,
    ADD_COMMENT ,
    GET_ARTICLE_LIST,
    GET_ARTICLE_BY_ID,
    START,
    SUCCESS,
    FAIL,
    GET_COMMENTS_BY_ARTICLE_ID,
    GET_COMMENTS_PAGES,
    GET_COMMENTS_BY_PAGE,
    PAGE_SIZE} from '../constants'

import {push, replace} from 'react-router-redux';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function selectOtherValue(selection) {
    console.log('SELECTION:' + selection);
    return {
        type: SELECT_ARTICLE,
        payload: {selection}
    }
}

export function selectOtherDate(dates) {
    return {
        type: CHANGE_DATE,
        payload: {dates}
    }
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {comment, articleId},
        generateId: true
    }
}

export function getCommentByPage(page) {
    console.log("get COMMENTS by Page:" + page)
    const URLPart = `?limit=${PAGE_SIZE}&offset=${(page-1) * PAGE_SIZE}`;
    return (dispatch) => {
        fetch(`/api/comment${URLPart}`)
            .then(res=>res.json())
            .then(response => dispatch({
                type: GET_COMMENTS_BY_PAGE,
                payload: {response}
            }))

    }
}


export function getComments(articleId) {

    return (dispatch) => {
        dispatch({
            type: GET_COMMENTS_BY_ARTICLE_ID + START,
            payload: {articleId}
        })

        setTimeout(()=> {
            console.log("get COMMENTS")
            fetch(`/api/comment?article=${articleId}`)
                .then(res =>res.json())
                .then(response => dispatch({
                    type: GET_COMMENTS_BY_ARTICLE_ID + SUCCESS,
                    payload: {articleId, response}
                }))
                .catch((error) => {
                    dispatch({type: GET_COMMENTS_BY_ARTICLE_ID + FAIL, payload: {articleId, error}})
                })

        }, 2000)
    }


}

export function getArticles() {
    return {
        type: GET_ARTICLE_LIST,
        restCallAddr: '/api/article'
    }
}

export function getArticleById(id) {
    return (dispatch) => {
        dispatch({
            type: GET_ARTICLE_BY_ID + START,
            payload: {id}
        })

        setTimeout(()=> {
            fetch(`/api/article/${id}`)
                .then(res =>{
                  console.log(res.status);
                    if (res.status >= 400){

                        throw new Error(res.status.text);
                    }
                  return res.json()
                })
                .then(response => dispatch({type: GET_ARTICLE_BY_ID + SUCCESS, payload: {id, response}}))
                .catch((error) => {
                    dispatch({type: GET_ARTICLE_BY_ID + FAIL, payload: {id, error}})
                    dispatch(replace('/error'));
                })

        }, 2000)
    }

}


/*
 export function getArticleById(id){
 return {
 type: GET_ARTICLE_BY_ID,
 restCallAddr:'/api/article/' + id;
 }
 }*/
