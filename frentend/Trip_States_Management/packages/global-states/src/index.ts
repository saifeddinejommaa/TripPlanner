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
import UrlsConfigs from "@aprilium/tripsm_common/lib/urlsConfig"
import { urlsConfig as passengerUrlConfig } from '@aprilium/tripsm_passenger/lib'
//import state


import {
    PassengerReducerFunction,
    PassengerState,
} from '@aprilium/tripsm_passenger/lib/state'


//import sagas
import passengerSaga from '@aprilium/tripsm_passenger/lib/effects'

export const sagaMiddleware = createSagaMiddleware()

export const reducers = {
    
    passenger:PassengerReducerFunction 
}

export const initialSagas = {
    
   passenger: passengerSaga
}

export type States = {
    
    passenger: PassengerState
}

export type StateName =
    | 'passenger'

export function setUrlConfig(
        coreApi: string,
        debugMode = false
)  {
    passengerUrlConfig.setURls({
        CORE_BASE_URL: coreApi,
        DEBUG_MODE: debugMode
        })
    }


    export const sagas = (
        Object.keys(initialSagas) as Array<keyof typeof initialSagas>
    ).map((key) => initialSagas[key])
    
    export function initSagaMiddleware(
        extraSagas: Array<Saga> = [], // local sagas from frontEnd Client
        waitForRehydrate = false
    ) {
        console.log("extraSagas",extraSagas)
        const _sagas: Array<Saga> = [...sagas, ...extraSagas]
        console.log("_sagas",_sagas)
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
    
    function configStore(
        extraMiddleWares: Array<any> = [], // Adding other middlewares
        persistConfig: PersistConfig<unknown, any, any, any>, // Configuration for persistState
        extraStates: any = {}, // Adding other states in the store
        replaceAllStates = false // It will keep only extraStates
    ) {
        console.log("configuration du store")
        console.log("extra middleware",extraMiddleWares)
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
    
    export default configStore
    