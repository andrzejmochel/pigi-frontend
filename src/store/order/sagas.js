import {put, takeEvery} from "@redux-saga/core/effects";
import types from "./types";
import ordersApiService from "../../api/orders.api.service";
import actions from "./actions";


function* getOrderRequest(action) {
    console.log('getOrderRequest');
    try {
        const order = yield ordersApiService.getOrder(action.payload)
        yield put(actions.orderGetSuccess(order));
    } catch (e) {
        console.log(e)
        yield put(actions.orderGetFailure(e));
    }
}

function* sagaGetOrderRequest() {
    yield takeEvery(types.ORDER_GET_REQUEST, getOrderRequest);
}

function* getOrderSuccess(action) {
    console.log('getOrderSuccess');
}

function* sagaGetOrderSuccess() {
    yield takeEvery(types.ORDER_GET_SUCCESS, getOrderSuccess);
}

function* getOrderFailure(action) {
    console.log('getOrderFailure');
}

function* sagaGetOrderFailure() {
    yield takeEvery(types.ORDER_GET_FAILURE, getOrderFailure);
}

const sagas = {
    sagaGetOrderRequest,
    sagaGetOrderSuccess,
    sagaGetOrderFailure
}


export default sagas;