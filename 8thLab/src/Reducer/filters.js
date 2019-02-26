/**
 * Created by Tirion on 12.02.2019.
 */
import {CHANGE_DATE, SELECT_ARTICLE} from '../constants'

export default (filters = {selection:null, dates:{from:undefined, to:undefined}}, action) => {
    const {type, payload} = action;
    switch (type) {
        case SELECT_ARTICLE:
        {
            return { selection: payload.selection, dates: filters.dates};
        }

        case CHANGE_DATE:
        {
            return { selection: filters.selection, dates: payload.dates};
        }
    }
    return filters;
}