import values from 'lodash/values';
import reduce from 'lodash/reduce';
import {sagas as signUpSagas}  from './signup'
import { all, call } from 'redux-saga/effects';


const allSagasMap = {
    signUpSagas
};

export default function* rootSaga() {
    const allSagasList = reduce(allSagasMap, (memo, sliceSagasMap) => {
        const sliceSagasList = values(sliceSagasMap);
        return memo.concat(sliceSagasList);
    }, []);
    yield all(allSagasList.map((saga) => call(saga)));
}