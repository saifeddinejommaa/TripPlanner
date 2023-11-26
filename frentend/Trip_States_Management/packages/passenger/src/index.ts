import { createStore, applyMiddleware, combineReducers, Store } from 'redux'
import createSagaMiddleware, { Saga } from 'redux-saga'
import { all, fork, take } from 'redux-saga/effects'
import { PersistGate } from 'redux-persist/integration/react'
import {
    persistStore,
    persistReducer,
    PersistConfig,
    REHYDRATE
} from 'redux-persist'
import { createReducerFunction } from 'immer-reducer'

import {
    initialState as passengerInitialState,
    PassengerReducerFunction as passengerReducerFunction,
    State as passengerState
} from './state'

import passengerEffects from './effects'
import UrlsConfigs from '@aprilium/tripsm_common/lib/urlsConfigs'

export const initialSagas = {
    passenger: passengerEffects
}

export const initialStates = {
    passenger: passengerInitialState
}



export const sagas = (
    Object.keys(initialSagas) as Array<keyof typeof initialSagas>
).map((key) => initialSagas[key])

// Type definition for the GlobalState
export type States = {
    passenger: passengerState
}

export type StateName = 'passenger'

export const StateNames: { [prop: string]: StateName } = {
    passengerStateName: 'passenger'
}

export const reducers = {
    passenger: passengerReducerFunction
}

export const newReducer = (stateImmerClass: any, initialState: any) =>
    createReducerFunction(stateImmerClass, initialState)

export const sagaMiddleware = createSagaMiddleware()

export const urlsConfig: UrlsConfigs = new UrlsConfigs()

function configStore(
    extraMiddleWares: Array<any> = [], // Adding other middlewares
    persistConfig: PersistConfig<unknown, any, any, any>, // Configuration for persistState
    extraStates: any = {}, // Adding other states in the store
    replaceAllStates: boolean = false // It will keep only extraStates
) {
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

export function initSagaMiddleware(
    extraSagas: Array<Saga> = [], // local sagas from frontEnd Client
    waitForRehydrate: boolean = false
) {
    const _sagas: Array<Saga> = [...sagas, ...extraSagas]

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

export default configStore
