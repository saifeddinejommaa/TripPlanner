import React, {
    useReducer,
    useRef,
    useMemo,
    useEffect,
    useContext,
    createContext,
    ReducerState,
    ReducerAction,
    Dispatch
} from 'react'
import {
    runSaga,
    stdChannel,
    RunSagaOptions,
    SagaMonitor,
    EffectMiddleware,
    Saga
} from 'redux-saga'
import { Reducer, CombinedState, Action } from 'redux'

type SagaIOKeys = keyof Pick<
    RunSagaOptions<any, any>,
    'channel' | 'dispatch' | 'getState'
>
type ExposedRunSagaOptions<A, S> = Omit<RunSagaOptions<A, S>, SagaIOKeys>

type SagaProdiderProps = ExposedRunSagaOptions<any, any>

const SagaContext = createContext<SagaProdiderProps>({})

export const SagaProvider: React.FC<SagaProdiderProps> = ({
    children,
    ...props
}) => {
    return React.createElement(SagaContext.Provider, {
        value: props,
        children: children
    })
}

type VoidMethod = (...args: any[]) => void

function mergeVoidMethods(
    contextMethod: VoidMethod | undefined,
    localMethod: VoidMethod | undefined
): VoidMethod | undefined {
    if (!contextMethod && !localMethod) {
        return
    }
    if (contextMethod && !localMethod) {
        return contextMethod
    }
    if (!contextMethod && localMethod) {
        return localMethod
    }
    return (...args: any[]) => {
        contextMethod && contextMethod(...args)
        localMethod && localMethod(...args)
    }
}

function mergeSagaMonitors(
    contextMonitor: SagaMonitor | undefined,
    localMonitor: SagaMonitor | undefined
): SagaMonitor | undefined {
    if (!contextMonitor && !localMonitor) {
        return
    }
    if (contextMonitor && !localMonitor) {
        return contextMonitor
    }
    if (!contextMonitor && localMonitor) {
        return localMonitor
    }
    const sagaMonitorKeys: (keyof SagaMonitor)[] = [
        'actionDispatched',
        'effectCancelled',
        'effectRejected',
        'effectResolved',
        'effectTriggered',
        'rootSagaStarted'
    ]
    const combinedSagaMonitor: SagaMonitor = {}
    for (const key of sagaMonitorKeys) {
        const method = mergeVoidMethods(
            contextMonitor && contextMonitor[key],
            localMonitor && localMonitor[key]
        )
        if (method) {
            combinedSagaMonitor[key] = method
        }
    }
    return combinedSagaMonitor
}

function mergeEffectMiddlewares(
    contextMiddlewares: EffectMiddleware[] | undefined,
    localMiddlewares: EffectMiddleware[] | undefined
): EffectMiddleware[] | undefined {
    if (!contextMiddlewares && !localMiddlewares) {
        return
    }
    return [
        ...(contextMiddlewares ? contextMiddlewares : []),
        ...(localMiddlewares ? localMiddlewares : [])
    ]
}

export function useSagaReducer<S>(
    saga: Saga<never[]>,
    reducer: Reducer<CombinedState<S>, Action<any>>,
    initializerArg: S,
    initializer: (arg: S) => any,
    runSagaOptions: ExposedRunSagaOptions<any, Saga<never[]>>
): [ReducerState<Reducer<S>>, Dispatch<ReducerAction<Reducer<S>>>] {
    const [state, reactDispatch] = useReducer(
        reducer,
        initializerArg,
        initializer
    )
    const [lastAction, setLastAction] = React.useState({})
    const currentState = useRef<S>(state)

    function _dispatch(
        action: ReducerAction<Reducer<CombinedState<S>, Action<any>>>
    ) {
        setLastAction(action)
        reactDispatch(action)
    }

    const sagaIO = useMemo(() => {
        const channel = stdChannel()
        const dispatch = _dispatch
        const getState = () => currentState.current
        return {
            channel,
            dispatch,
            getState
        }
    }, [])

    const sagaIORef = useRef(sagaIO)

    function putOnChannel() {
        if (sagaIORef.current) {
            sagaIORef.current.getState = () => currentState.current
            Promise.resolve().then(() => {
                sagaIORef.current.channel.put(lastAction)
            })
        }
    }
    useEffect(() => {
        currentState.current = state
        putOnChannel()
    }, [state])

    const sagaContext = useContext(SagaContext)
    useEffect(() => {
        const options = runSagaOptions || {}
        const context = {
            ...sagaContext.context,
            ...options.context
        }
        const sagaMonitor = mergeSagaMonitors(
            sagaContext.sagaMonitor,
            options.sagaMonitor
        )
        const onError = mergeVoidMethods(sagaContext.onError, options.onError)
        const effectMiddlewares = mergeEffectMiddlewares(
            sagaContext.effectMiddlewares,
            options.effectMiddlewares
        )
        const sagaOptions: RunSagaOptions<any, any> = {
            ...sagaIO,
            context,
            sagaMonitor,
            onError,
            effectMiddlewares
        }
        const task = runSaga<any, any, any>(sagaOptions, saga)
        return () => {
            task.cancel()
        }
    }, [])

    return [state, sagaIO.dispatch]
}

export function makeCustomEffect(type: string, payload: object) {
    return {
        '@@redux-saga/custom': true,
        combinator: false,
        type,
        payload
    }
}
export default useSagaReducer
