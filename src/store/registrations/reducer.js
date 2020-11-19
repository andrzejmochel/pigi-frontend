import {types} from "./index";
import produce from "immer";

const initialState = {
    isFetching: false,
    registration: null
}

export default function asyncUserReducer(state = initialState, action) {
    switch (action.type) {
        case types.REGISTER_ORDER_REQUEST:
            return produce(state, (draftState) => {
                draftState.isFetching = true
            });
        case types.REGISTER_ORDER_SUCCESS:
            return produce(state, (draftState) => {
                draftState.registration = action.payload;
                draftState.isFetching = false;

            });
        case types.ORDER_GET_FAILURE:
            return produce(state, (draftState) => {
                draftState.isFetching = false
            });
        default:
            return state;
    }
}