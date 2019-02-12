/**
 * Created by Tirion on 12.02.2019.
 */
import {articles as defaultArticles} from '../../fixtures'
import {DELETE_ARTICLE, CHANGE_DATE, SELECT_ARTICLE} from '../../constants'

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action;
    switch (type){
        case DELETE_ARTICLE:
            return articleState.filter(article=>article.id != payload.id);
    }

    return articleState;
}