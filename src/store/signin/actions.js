import types from './types'

const signInRequest = function (singIn) {
    return {
        type: types.SIGN_IN_REQUEST,
        payload: singIn
    }
}


const signInFailure = function (e) {
    return {
        type: types.SIGN_IN_FAILURE,
        payload: {
            error: e
        }
    }
}

const signInSuccess = function (authorization) {
    return {
        type: types.SIGN_IN_SUCCESS,
        payload: {
            authorization : authorization
        }
    }
}

const logoutRequest = function () {
    return {
        type: types.LOGOUT_REQUEST,
        payload: {
        }
    }
}

const logoutSuccess = function () {
    return {
        type: types.LOGOUT_SUCCESS,
        payload: {
        }
    }
}

const  changePasswordRequest = function(request) {
    return {
        type: types.CHANGE_PASSWORD_REQUEST,
        payload: request
    }
}

const  changePasswordSuccess = function() {
    return {
        type: types.CHANGE_PASSWORD_SUCCESS,
        payload: {}
    }
}

const  changePasswordFailure = function() {
    return {
        type: types.CHANGE_PASSWORD_FAILURE,
        payload: {}
    }
}


const actions = {
    signInRequest,
    signInFailure,
    signInSuccess,
    logoutRequest,
    logoutSuccess,
    changePasswordRequest,
    changePasswordSuccess,
    changePasswordFailure
}

export default actions;