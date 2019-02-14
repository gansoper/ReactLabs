/**
 * Created by Tirion on 13.02.2019.
 */
import {normalizedComments as defaultComments} from '../../fixtures'
import {ADD_COMMENT} from '../../constants'
import {arrayToMap} from '../../Helpers/arrayMapHelper'

export default (commentState = arrayToMap(defaultComments), action) => {
    const {type, payload, randomId} = action;
    switch (type){
        case ADD_COMMENT:
            return {...commentState, [randomId]: payload.comment}
    }

    return commentState;
}