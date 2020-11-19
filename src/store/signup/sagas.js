import actions from './actions'
import {put, takeLatest} from "@redux-saga/core/effects";
import types from "./types";
import signupApiService from "../../api/signup.api.service"
import history from "../../history";
import AuthService from "../../api/AuthService/AuthService";

function* signUpRequest(action) {
    try {
        const authorization = yield signupApiService.signup(action.payload);
        yield put(actions.singUpSuccess(action.payload, authorization));
    } catch (e) {
        yield put(actions.singUpFailure(e));
    }
}

function* signUpGoogleRequest(action) {
    try {
        const authorization = yield signupApiService.signupGoogle(action.payload);
        console.log('[SAGA] signUpGoogleRequest', authorization)
        yield put(actions.singUpSuccess(action.payload, authorization));
    } catch (e) {
        yield put(actions.singUpFailure(e));
    }
}

function* signUpFacebookRequest(action) {
    try {
        const authorization = yield signupApiService.signupFacebook(action.payload);
        yield put(actions.singUpSuccess(action.payload, authorization));
    } catch (e) {
        yield put(actions.singUpFailure(e));
    }
}

function* sagaSignUpRequest() {
    yield takeLatest(types.SIGNUP_REQUEST, signUpRequest)
}

function* sagaSignUpGoogleRequest() {
    console.log('sagaSignUpGoogleRequest');
    yield takeLatest(types.SIGNUP_GOOGLE_REQUEST, signUpGoogleRequest)
}

function* sagaSignUpFacebookRequest() {
    yield takeLatest(types.SIGNUP_FACEBOOK_REQUEST, signUpFacebookRequest)
}
function* signUpSuccess(action) {
    yield AuthService.saveAuth(action.payload)
    yield history.push('/home');
}

function* sagaSignUpSuccess() {
    yield takeLatest(types.SIGNUP_SUCCESS, signUpSuccess);
}

const sagas = {
    sagaSignUpRequest,
    sagaSignUpSuccess,
    sagaSignUpFacebookRequest,
    sagaSignUpGoogleRequest
}

export default sagas;