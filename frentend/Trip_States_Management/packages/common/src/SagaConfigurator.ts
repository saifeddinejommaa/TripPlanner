import { Saga } from 'redux-saga'
import { createStore, applyMiddleware, combineReducers, Store } from 'redux'
import { all, fork, take } from 'redux-saga/effects'
import { PersistGate } from 'redux-persist/integration/react'
import {
    persistStore,
    persistReducer,
    PersistConfig,
    REHYDRATE,
    Persistor
} from 'redux-persist'

export function configStoreBase<TReducer>(
    sagaMiddleware: any,
    reducers: TReducer,
    persistConfig: PersistConfig<unknown, any, any, any>, // Configuration for persistState
    extraMiddleWares: Array<any> = [], // Adding other middlewares
    extraStates: any = {}, // Adding other states in the store
    replaceAllStates = false // It will keep only extraStates
): {
    store: Store<any, any>
    persistor: Persistor
    PersistGate: any
} {
    let _reducers = combineReducers({
        ...reducers,
        ...extraStates
    })

    if (replaceAllStates) {
        _reducers = combineReducers({
            ...extraStates
        })
    }

    const _middleWares = [...extraMiddleWares, sagaMiddleware]
    // @ts-ignore
    const persistedReducer = persistReducer(persistConfig, _reducers)
    const store: Store<any, any> = createStore(
        persistedReducer,
        applyMiddleware(..._middleWares)
    )
    const persistor = persistStore(store)

    return { store, persistor, PersistGate }
}

export function initSagaMiddlewareBase(
    sagaMiddleware: any,
    _sagas: Array<Saga>,
    waitForRehydrate = false
): void {
    // It will initialize all sagas
    function* rootSaga(): any {
        if (waitForRehydrate) {
            yield take(REHYDRATE)
        }
        const instSagas = yield _sagas.map(function* (saga) {
            yield fork(saga)
        })
        yield all(instSagas)
    }
    // Start the listener
    sagaMiddleware.run(rootSaga)
}
