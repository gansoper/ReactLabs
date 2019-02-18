/**
 * Created by Tirion on 14.02.2019.
 */
import {Map, OrderedMap} from 'immutable';

export function arrayToMap(arr, DataRecord = Map){
    return  arr.reduce((acc, item)=> acc.set(item.id, new DataRecord(item)),new OrderedMap({}));
}

export function mapToArray(mapObject) {
    return  mapObject.valueSeq().toArray();//Object.keys(mapObject).map(id => mapObject[id])
}