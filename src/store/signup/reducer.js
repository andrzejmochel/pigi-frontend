import {types} from "./index";
import produce from "immer";

const initialState = {
    isFetching: false,

}

export default function asyncUserReducer(state = initialState, action) {
    switch (action.type) {
        case types.SIGNUP_REQUEST:
            return produce(state, (draftState) => {
                draftState.isFetching = true
            });
        case types.SIGNUP_SUCCESS:
            return produce(state, (draftState) => {
                draftState.isFetching = false
            });
        case types.SIGNUP_FAILURE:
            return produce(state, (draftState) => {
                draftState.isFetching = false
            });
        default:
            return state;
    }
}