
import sessionStorage from 'redux-persist/lib/storage/session'
import configStore from '@aprilium/tripsm_global-states/'
import reduxLogger from 'redux-logger'

const localsagas: Array<any> = []


const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    transforms: []
}

const middlewares = [reduxLogger]

// Initalize the redux store
const { store, persistor, PersistGate } = configStore(
    middlewares,
    // @ts-ignore
    persistConfig
)

export { store, persistor, PersistGate, localsagas }
