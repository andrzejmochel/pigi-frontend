import {combineReducers} from 'redux';

import {sliceId as routerSliceId} from './router';
import signUpReducer, {sliceId as signUpSliceId} from './signup';
import {connectRouter} from 'connected-react-router';

export default function createRootReducer(history) {
    return combineReducers({
        [routerSliceId]: connectRouter(history),
        [signUpSliceId]: signUpReducer
    });
}