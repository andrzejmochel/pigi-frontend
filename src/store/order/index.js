import orderReducer from './reducer'

import types from './types'
import sagas from './sagas'
import actions from "./actions";

export const sliceId = 'order';

export {
    sagas,
    types,
    actions
}

export default orderReducer;