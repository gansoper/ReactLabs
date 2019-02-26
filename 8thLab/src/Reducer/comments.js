/**
 * Created by Tirion on 13.02.2019.
 */
import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT, GET_COMMENTS_BY_ARTICLE_ID, START, SUCCESS, GET_COMMENTS_BY_PAGE, PAGE_SIZE} from '../constants'
import {arrayToMap} from '../Helpers/arrayMapHelper'
import {Map, OrderedMap, Record} from 'immutable'


const CommentsReducerState = Record({
    loading: false,
    loaded: false,
    pages:[],
    articleId: undefined,
    entities: new OrderedMap({})
});

const CommentRecord = Record({
    user:"",
    text: "",
    id: undefined
})


export default (commentState = new CommentsReducerState(), action) => {
    const {type, payload, randomId} = action;
    switch (type){
        case ADD_COMMENT:
            return commentState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}));


        case GET_COMMENTS_BY_ARTICLE_ID + START:
            return commentState
                            .set('loading', true)
                            .set('loaded', false)
                            .set('articleId',payload.articleId);

        case GET_COMMENTS_BY_ARTICLE_ID + SUCCESS:
            return commentState
                .set('entities', arrayToMap(payload.response, CommentRecord))
                .set('articleId',payload.articleId)
                .set('loading', false)
                .set('loaded', true);

        case GET_COMMENTS_BY_PAGE:
            let pageNum = payload.response.total/PAGE_SIZE;
            let pageArr = [];
            for (let i = 1; i<pageNum; i++){
                pageArr.push(i);
            }

            return commentState
                .set('entities', arrayToMap(payload.response.records, CommentRecord))
                .set('pages', pageArr)

    }

    return commentState;
}