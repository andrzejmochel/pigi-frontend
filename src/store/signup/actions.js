import types from './types'

const signUpRequest = function (singUp) {
    return {
        type: types.SIGNUP_REQUEST,
        payload: singUp
    }
}

const singUpFailure = function () {
    return {
        type: types.SIGNUP_FAILURE,
        payload: {}
    }
}

const singUpSuccess = function () {
    return {
        type: types.SIGNUP_SUCCESS,
        payload: {}
    }
}

const actions = {
    signUpRequest,
    singUpFailure,
    singUpSuccess
}

export default actions;