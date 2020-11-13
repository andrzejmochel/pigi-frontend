import types from './types'

const signUpRequest = function (singUp) {
    return {
        type: types.SIGNUP_REQUEST,
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

const singUpSuccess = function (email) {
    return {
        type: types.SIGNUP_SUCCESS,
        payload: {
            email: email
        }
    }
}

const actions = {
    signUpRequest,
    singUpFailure,
    singUpSuccess
}

export default actions;