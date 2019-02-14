/**
 * Created by Tirion on 14.02.2019.
 */
export function arrayToMap(arr){
    return  arr.reduce((acc, item)=>{
        acc[item.id] = item;
        return acc;
    },{});
}

export function mapToArray(mapObject) {
    return  Object.keys(mapObject).map(id => mapObject[id])
}