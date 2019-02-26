/**
 * Created by Tirion on 15.02.2019.
 */
import {START, SUCCESS, FAIL} from '../constants'


export default store => next => action => {
    const {restCallAddr, type, ...rest} = action;
    if (!restCallAddr) {
        return next(action);
    }

    next({ ...rest, type: type + START })

    setTimeout(()=>{
        fetch(restCallAddr)
            .then(res =>res.json())
            .then(response => next({...rest, type: type + SUCCESS, response}))
            .catch((error) =>{
                next({...rest, type: type + FAIL, error})
            })

    }, 2000)


}