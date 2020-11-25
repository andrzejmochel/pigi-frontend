import actions from './actions'
import {put, takeLatest} from "@redux-saga/core/effects";
import types from "./types";
import history from "../../history";
import AuthService from "../../api/AuthService/AuthService";
import signInApiService from "../../api/sign.in.api.service";

function* signInRequest(action) {
    try {
        const authorization = yield signInApiService.signIn(action.payload);
        yield put(actions.signInSuccess(authorization));
    } catch(e) {
        console.log(e)
        yield put(actions.signInFailure(e));
    }
}

function* sagaSignInRequest() {
    yield takeLatest(types.SIGN_IN_REQUEST, signInRequest);
}

function* signInSuccess(action) {
    yield AuthService.saveAuth(action.payload.authorization)
    const details = yield AuthService.getUser();
    debugger
    if(!details.forcePasswordChange) {
        yield history.push("/");
    } else {
        yield history.push("/change-password")
    }
}

function* sagaSignInSuccess() {
    yield takeLatest(types.SIGN_IN_SUCCESS, signInSuccess);
}

function* logoutRequest() {
    try {
        yield AuthService.logout();
        yield put(actions.logoutSuccess())
    } catch(e) {
        console.log('[Logout] error', e)
    }
}

function* sagaLogoutRequest() {
    yield takeLatest(types.LOGOUT_REQUEST, logoutRequest);
}

function* logoutSuccess() {
    yield history.push("/");
}

function* sagaLogoutSuccess() {
    yield takeLatest(types.LOGOUT_SUCCESS, logoutSuccess);
}

function* changePasswordRequest(action) {
    try {
        yield signInApiService.changePassword(action.payload);
        yield put(actions.changePasswordSuccess());
    } catch(e) {
        yield put(actions.changePasswordFailure());
    }

}

function* sagaChangePasswordRequest() {
    yield takeLatest(types.CHANGE_PASSWORD_REQUEST, changePasswordRequest)
}

function* changePasswordSuccess() {
    yield AuthService.logout();
    yield history.push("/");
}

function* sagaChangePasswordSuccess() {
    yield takeLatest(types.CHANGE_PASSWORD_SUCCESS, changePasswordSuccess)
}

const sagas = {
    sagaSignInRequest,
    sagaSignInSuccess,
    sagaLogoutRequest,
    sagaLogoutSuccess,
    sagaChangePasswordRequest,
    sagaChangePasswordSuccess
}

export default sagas;