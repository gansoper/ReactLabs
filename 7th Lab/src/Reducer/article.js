/**
 * Created by Tirion on 12.02.2019.
 */
//import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, CHANGE_DATE, SELECT_ARTICLE, ADD_COMMENT, GET_ARTICLE_LIST, START, SUCCESS, GET_ARTICLE_BY_ID} from '../constants'
import {arrayToMap} from '../Helpers/arrayMapHelper'
import {Map, OrderedMap, Record} from 'immutable'

const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
});
const ArticleRecord = Record({
    text:"",
    title: "",
    id: undefined,
    comments : [],
    loading: false
})

export default (articleState = new ReducerState(), action) => {
    const {type, payload, randomId, response} = action;
    switch (type) {
        case DELETE_ARTICLE:
            return  articleState.deleteIn(['entities', payload.id])

        case ADD_COMMENT:
            return articleState.updateIn(['entities',payload.articleId, 'comments'],comments => comments.concat(randomId) )


        case GET_ARTICLE_LIST + START:
            return articleState.set('loading', true);

        case GET_ARTICLE_LIST + SUCCESS:
            return articleState
                    .set('entities', arrayToMap(response, ArticleRecord))
                .set('loading', false)
                .set('loaded', true);

        case GET_ARTICLE_BY_ID + START:
            return articleState.setIn(['entities', payload.id, 'loading'], true);


        case GET_ARTICLE_BY_ID + SUCCESS:
            return articleState.setIn(['entities', payload.id], new ArticleRecord(payload.response));

    }

    return articleState;
}