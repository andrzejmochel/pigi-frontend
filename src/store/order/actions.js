import types from './types'

const orderGetRequest = function (id) {
    return {
        type: types.ORDER_GET_REQUEST,
        payload: id
    }
}

const orderGetFailure = function (e) {
    return {
        type: types.ORDER_GET_FAILURE,
        payload: {
            error: e
        }
    }
}

const orderGetSuccess = function (order) {
    return {
        type: types.ORDER_GET_SUCCESS,
        payload: order
    }
}

const actions = {
    orderGetRequest,
    orderGetSuccess,
    orderGetFailure
}

export default actions;