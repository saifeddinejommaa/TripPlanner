import React, {
    createContext,
    ReactElement,
    Context,
    PropsWithChildren
} from 'react'
import { combineReducers, ReducersMapObject } from 'redux'
import { fork, all } from 'redux-saga/effects'
import { Saga } from 'redux-saga'
import useSagaReducer from './helper/useSagaReducer'

export type ContextType<TStates> = Context<{
    state: TStates
    dispatch: React.Dispatch<React.SetStateAction<{}>>
}>

export const StateContext = createContext({})

export function getStateContextBase<TStates>(): ContextType<TStates> {
    const _stateContext = StateContext as unknown
    return _stateContext as ContextType<TStates>
}

type StateProviderProps<TReducersKeys> = {
    states: Array<TReducersKeys>
    children: ReactElement
    reducers: Record<string, unknown>
    initialSagas: any
    initialStates: Record<string, unknown>
    extraSagas?: Array<Saga>
}

function StateProviderBase<TReducersKeys, TStates>({
    states,
    children,
    reducers,
    initialSagas,
    initialStates,
    extraSagas = []
}: PropsWithChildren<StateProviderProps<TReducersKeys>>): JSX.Element {
    const _initSagas = states
        .map((s) => {
            if (initialSagas[s]) {
                return initialSagas[s]
            }
        })
        .filter((v) => !!v) as Array<Saga>

    const sagas: Array<Saga> = [..._initSagas, ...extraSagas]

    const _initialStates = states.reduce((acc, cur) => {
        const cur_ = cur as unknown
        const _cur_ = cur_ as string
        return {
            ...acc,
            [_cur_]: initialStates[_cur_]
        }
    }, {})

    const _rootReducer = states.reduce((acc, cur) => {
        const cur_ = cur as unknown
        const _cur_ = cur_ as string
        return {
            ...acc,
            [_cur_]: reducers[_cur_]
        }
    }, {}) as ReducersMapObject<any>

    function* RootSaga(): any {
        const instSagas: any = yield sagas.map(function* (saga): any {
            yield fork(saga)
        })
        yield all(instSagas)
    }

    function init(initial: any): any {
        return initial
    }

    const [state, dispatch] = useSagaReducer<any>(
        RootSaga,
        combineReducers(_rootReducer),
        _initialStates,
        init,
        {}
    )

    function getState(): unknown {
        if (state) {
            return state
        }
        return _initialStates
    }

    const returnState = getState() as TStates

    return (
        <StateContext.Provider value={{ state: returnState, dispatch }}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProviderBase
