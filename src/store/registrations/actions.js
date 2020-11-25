import types from './types'

const registerOrderRequest = function (request) {
    return {
        type: types.REGISTER_ORDER_REQUEST,
        payload: request
    }
}

const registerOrderFailure = function (e) {
    return {
        type: types.REGISTER_ORDER_FAILURE,
        payload: {
            error: e
        }
    }
}

const registerOrderSuccess = function (registration) {
    return {
        type: types.REGISTER_ORDER_SUCCESS,
        payload: registration
    }
}

const actions = {
    registerOrderRequest,
    registerOrderSuccess,
    registerOrderFailure
}

export default actions;