import {put, takeEvery} from "@redux-saga/core/effects";
import types from "./types";
import actions from "./actions";
import registrationsApiService from "../../api/registrations.api.service";
import history from "../../history";


function* registerOrderRequest(action) {
    console.log('registerOrderRequest');
    try {
        const registration = yield registrationsApiService.registerOrder(action.payload)
        yield put(actions.registerOrderSuccess(registration));
    } catch (e) {
        console.log(e)
        yield put(actions.orderGetFailure(e));
    }
}

function* sagaRegisterOrderRequest() {
    yield takeEvery(types.REGISTER_ORDER_REQUEST, registerOrderRequest);
}

function* registerOrderSuccess(action) {
    console.log('registerOrderSuccess');
    yield history.push(`/order-register-success/${action.payload.id}`);
}

function* sagaRegisterOrderSuccess() {
    yield takeEvery(types.REGISTER_ORDER_SUCCESS, registerOrderSuccess);
}

function* registerOrderFailure(action) {
    console.log('registerOrderFailure');
}

function* sagaRegisterOrderFailure() {
    yield takeEvery(types.REGISTER_ORDER_FAILURE, registerOrderFailure);
}

const sagas = {
    sagaRegisterOrderRequest,
    sagaRegisterOrderSuccess,
    sagaRegisterOrderFailure
}


export default sagas;