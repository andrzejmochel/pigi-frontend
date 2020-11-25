import values from 'lodash/values';
import reduce from 'lodash/reduce';
import {sagas as signUpSagas} from './signup'
import {sagas as orderSagas} from './order'
import {sagas as registrationsSagas} from './registrations'
import {sagas as signInSagas} from './signin'
import { all, call } from 'redux-saga/effects';

const allSagasMap = {
    signUpSagas,
    orderSagas,
    registrationsSagas,
    signInSagas
};

export default function* rootSaga() {
    const allSagasList = reduce(allSagasMap, (memo, sliceSagasMap) => {
        const sliceSagasList = values(sliceSagasMap);
        return memo.concat(sliceSagasList);
    }, []);
    yield all(allSagasList.map((saga) => call(saga)));
}