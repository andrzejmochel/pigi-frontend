import registrationsReducer from './reducer'

import types from './types'
import sagas from './sagas'
import actions from "./actions";

export const sliceId = 'registrations';

export {
    sagas,
    types,
    actions
}

export default registrationsReducer;