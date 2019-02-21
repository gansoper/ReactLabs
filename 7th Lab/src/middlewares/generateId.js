/**
 * Created by Tirion on 14.02.2019.
 */
export default store => next => action => {
    if (!action.generateId) {
        next(action);
    }
    else {
        const id = `f${(+new Date).toString(16)}`;
        next({
            ...action,
            randomId: id
        })
    }


}