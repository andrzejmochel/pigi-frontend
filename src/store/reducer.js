import { combineReducers } from 'redux';

import { sliceId as routerSliceId } from './router';
import { connectRouter } from 'connected-react-router';

export default function createRootReducer(history) {
    return combineReducers({
        [routerSliceId]: connectRouter(history)
    });
}