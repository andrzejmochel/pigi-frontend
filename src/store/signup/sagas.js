import actions from './actions'
import {put, takeLatest} from "@redux-saga/core/effects";
import types from "./types";

function* signUpRequest(action) {
    try {
        yield put(actions.singUpSuccess());
    } catch (e) {
        yield put(actions.singUpFailure());
    }
}

function* sagaSignUpRequest() {
    yield takeLatest(types.SIGNUP_REQUEST, signUpRequest)
}

function* signUpSuccess() {
    //TODO create redirect
    //yield put(push('/login'));
}

function* sagaSignUpSuccess() {
    yield takeLatest(types.SIGNUP_SUCCESS, signUpSuccess);
}

const sagas = {
    sagaSignUpRequest,
    sagaSignUpSuccess
}

export default sagas;