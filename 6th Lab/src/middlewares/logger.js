/**
 * Created by Tirion on 14.02.2019.
 */
export default store => next => action =>{
    console.log("dispatching:", action);
    console.log("store before action:", store.getState() )
    next(action);
    console.log("store after action:", store.getState() )
}