/**
 * Created by Tirion on 12.02.2019.
 */
import {normalizedArticles as defaultArticles} from '../../fixtures'
import {DELETE_ARTICLE, CHANGE_DATE, SELECT_ARTICLE, ADD_COMMENT} from '../../constants'
import {arrayToMap} from '../../Helpers/arrayMapHelper'


export default (articleState = arrayToMap(defaultArticles), action) => {
    const {type, payload, randomId} = action;
    switch (type) {
        case DELETE_ARTICLE:
            const tmpState = {...articleState};
            delete tmpState[payload.id];
            return tmpState;

        case ADD_COMMENT:
            const article = articleState[payload.articleId];
            return {
                ...articleState,
                [payload.articleId]: {
                    ...article, comments: (article.comments || []).concat(randomId)
                }
            }
    }

    return articleState;
}