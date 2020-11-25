import {combineReducers} from 'redux';

import {sliceId as routerSliceId} from './router';
import signUpReducer, {sliceId as signUpSliceId} from './signup';
import orderReducer, {sliceId as orderSliceId} from './order'
import registrationsReducer , {sliceId as registerSliceId} from './registrations'
import signInReducer , {sliceId as signInSliceId} from './signin'
import {connectRouter} from 'connected-react-router';

export default function createRootReducer(history) {
    return combineReducers({
        [routerSliceId]: connectRouter(history),
        [signUpSliceId]: signUpReducer,
        [orderSliceId]: orderReducer,
        [registerSliceId]: registrationsReducer,
        [signInSliceId]: signInReducer
    });
}