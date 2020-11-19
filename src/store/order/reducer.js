import {types} from "./index";
import produce from "immer";

const initialState = {
    isFetching: false,
    order: null
}

export default function asyncUserReducer(state = initialState, action) {
    switch (action.type) {
        case types.ORDER_GET_REQUEST:
            return produce(state, (draftState) => {
                draftState.isFetching = true
            });
        case types.ORDER_GET_SUCCESS:
            return produce(state, (draftState) => {
                console.log('order reducer', action.payload)
                draftState.order = action.payload;
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