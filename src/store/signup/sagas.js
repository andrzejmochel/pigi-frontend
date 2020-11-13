import actions from './actions'
import {put, takeLatest} from "@redux-saga/core/effects";
import types from "./types";
import signupApiService from "../../api/signup.api.service"
import history from "../../history";

function* signUpRequest(action) {
    try {
        yield signupApiService.signup(action.payload);
        yield put(actions.singUpSuccess(action.payload.email));
    } catch (e) {
        yield put(actions.singUpFailure(e));
    }
}

function* sagaSignUpRequest() {
    yield takeLatest(types.SIGNUP_REQUEST, signUpRequest)
}

function* signUpSuccess(email) {
    yield history.push('/login');
}

function* sagaSignUpSuccess() {
    yield takeLatest(types.SIGNUP_SUCCESS, signUpSuccess);
}

const sagas = {
    sagaSignUpRequest,
    sagaSignUpSuccess
}

export default sagas;