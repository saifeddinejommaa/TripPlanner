
import {
    ImmerReducer,
    createActionCreators,
    createReducerFunction
} from 'immer-reducer'
import { technicalErrorMessageType } from '@aprilium/tripsm_common/lib/helper/utils'
import Constant from './models/Constant';

export type State = {
    getConstants: {
        loading: boolean
        success: boolean
        errorMessage: string | null
        technicalErrorMessage: technicalErrorMessageType | null
    }
    constant: Constant | null
}

export const initialState: State = {
    getConstants: {
        loading: false,
        success: false,
        errorMessage: null,
        technicalErrorMessage: null
    },

    constant : null,
}

/*
The different actions that can be launched from the front side
*/
export class ConstantState extends ImmerReducer<State> {

    getConstants() {
        this.draftState.getConstants.loading = true
    }
    getConstantsSuccess(constant: Constant) {
        this.draftState.getConstants.loading = false
        this.draftState.constant = constant
        this.draftState.getConstants.errorMessage = null
        this.draftState.getConstants.technicalErrorMessage = null
    }
    getConstantsFailure(
        errorMessage: string,
        technicalErrorMessage: technicalErrorMessageType
    ) {
        this.draftState.getConstants.loading = false
        this.draftState.getConstants.errorMessage = errorMessage
        this.draftState.getConstants.technicalErrorMessage =
            technicalErrorMessage
    }
    reset() {
        this.draftState = initialState
    }
}

export const ConstantActions = createActionCreators(ConstantState)
export const ConstantsReducerFunction = createReducerFunction(
    ConstantState,
    initialState
)

