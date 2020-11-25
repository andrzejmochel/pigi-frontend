import {types} from "./index";
import produce from "immer";

const initialState = {
    isFetching: false
}

export default function asyncUserReducer(state = initialState, action) {
    switch (action.type) {
        case types.SIGN_IN_REQUEST:
            return produce(state, (draftState) => {
                draftState.isFetching = true
            });
        case types.SIGN_IN_SUCCESS:
            return produce(state, (draftState) => {
                draftState.isFetching = false
            });
        case types.SIGN_IN_FAILURE:
            return produce(state, (draftState) => {
                draftState.isFetching = false
            });
        case types.LOGOUT_REQUEST:
            return produce(state, (draftState) => {
                draftState.isFetching = true
            });
        case types.LOGOUT_SUCCESS:
            return produce(state, (draftState) => {
                draftState.isFetching = false
            });
        case types.CHANGE_PASSWORD_REQUEST:
            return produce(state, (draftState) => {
                draftState.isFetching = true
            });
        case types.CHANGE_PASSWORD_SUCCESS:
            return produce(state, (draftState) => {
                draftState.isFetching = false
            });
        case types.CHANGE_PASSWORD_FAILURE:
            return produce(state, (draftState) => {
                draftState.isFetching = false
            });
        default:
            return state;
    }
}