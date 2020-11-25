import signInReducer from './reducer'

import types from './types'
import sagas from './sagas'
import actions from "./actions";

export const sliceId = 'signin';

export {
    sagas,
    types,
    actions
}

export default signInReducer;