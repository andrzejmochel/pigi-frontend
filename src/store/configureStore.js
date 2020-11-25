import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import history from '../history';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './reducer';
import rootSaga from './sagas';

import { enableES5, enableMapSet } from 'immer';
//enableES5 - fix for IE11
enableES5();
enableMapSet();

export default function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        createRootReducer(history),
        initialState,
        composeWithDevTools(
            compose(
                applyMiddleware(
                    sagaMiddleware,
                    routerMiddleware(history)
                )
            )
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
}

export const store = configureStore();