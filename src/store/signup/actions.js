import types from './types'

const signUpRequest = function (singUp) {
    return {
        type: types.SIGNUP_REQUEST,
        payload: singUp
    }
}

const signUpGoogleRequest = function (singUp) {
    return {
        type: types.SIGNUP_GOOGLE_REQUEST,
        payload: singUp
    }
}

const signUpFacebookRequest = function (singUp) {
    return {
        type: types.SIGNUP_FACEBOOK_REQUEST,
        payload: singUp
    }
}

const singUpFailure = function (e) {
    return {
        type: types.SIGNUP_FAILURE,
        payload: {
            error: e
        }
    }
}

const singUpSuccess = function (user, authorization) {
    return {
        type: types.SIGNUP_SUCCESS,
        payload: {
            user: user,
            authorization : authorization
        }
    }
}

const actions = {
    signUpRequest,
    singUpFailure,
    singUpSuccess,
    signUpFacebookRequest,
    signUpGoogleRequest
}

export default actions;