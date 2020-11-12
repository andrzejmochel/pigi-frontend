import signUpReducer from './reducer'

import types from './types'
import sagas from './sagas'
import actions from "./actions";

export const sliceId = 'signup';

export {
    sagas,
    types,
    actions
}

export default signUpReducer;