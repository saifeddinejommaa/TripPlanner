
import {
    ImmerReducer,
    createActionCreators,
    createReducerFunction
} from 'immer-reducer'
import Passenger from './models/Passenger'
import { technicalErrorMessageType } from '@aprilium/tripsm_common/lib/helper/utils'
import { PagedResult } from '@aprilium/tripsm_common/lib/models/PagedResult';

/*
   Store states after lanching actions
   getPassenger : used to save the loading status, and if we have an exception 
   setPassenger : used to save the loading status, and to store the new user profile
   Passenger : actual user profile
*/
export type State = {
    getAllPassengers: {
        loading: boolean
        success: boolean
        errorMessage: string | null
        technicalErrorMessage: technicalErrorMessageType | null
    }
    getPassenger: {
        loading: boolean
        success: boolean
        errorMessage: string | null
        technicalErrorMessage: technicalErrorMessageType | null
    }
    setPassenger: {
        loading: boolean
        success: boolean
        passenger: Passenger | null
        errorMessage: string | null
        technicalErrorMessage: technicalErrorMessageType | null
    }
    Passenger: Passenger | null
    AllPassengers:PagedResult<Passenger> | null;
}

export const initialState: State = {
    getPassenger: {
        loading: false,
        success: false,
        errorMessage: null,
        technicalErrorMessage: null
    },
    setPassenger: {
        loading: false,
        success: false,
        passenger: null,
        errorMessage: null,
        technicalErrorMessage: null
    },

    getAllPassengers:{
        loading: false,
        success: false,
        errorMessage: null,
        technicalErrorMessage: null
    },

    AllPassengers : null,
   
    Passenger: {
        Id:-1,
        FirstName:"undefined",
        LastName:"undefined",
        MiddleName:"undefined",
        BirthPlace:"undefined",
        BirthCountry:"undefined",
        BirthDay:new Date(),
        Nationality: "undefined",
        Address1: "undefined",
        Address2: "undefined",
        ZipCode: "undefined",
        City:"undefined",
        CountryId:0,
        LocalFirstName:undefined,
        LocalLastName:undefined,
        LocalMiddleName:undefined,
        PhoneNumber1:undefined,
        PhoneNumber2:undefined
    },
}

/*
The different action that can be launched from the front side
*/
export class PassengerState extends ImmerReducer<State> {

    getAllPassengers() {
        this.draftState.getPassenger.loading = true
    }
    getAllPassengersDataSuccess(pagedResult: PagedResult<Passenger>) {
        this.draftState.getAllPassengers.loading = false
        this.draftState.AllPassengers = pagedResult
        this.draftState.getAllPassengers.errorMessage = null
        this.draftState.getAllPassengers.technicalErrorMessage = null
    }
    getAllPassengersDataFailure(
        errorMessage: string,
        technicalErrorMessage: technicalErrorMessageType
    ) {
        this.draftState.getAllPassengers.loading = false
        this.draftState.getAllPassengers.errorMessage = errorMessage
        this.draftState.getAllPassengers.technicalErrorMessage =
            technicalErrorMessage
    }
    /*
    Action to get the user profile by user Id
    */
    getPassenger(id:number) {
        this.draftState.getPassenger.loading = true
    }
     /*
     Action will be handled if the "getPassenger" return success
     */
    getPassengerDataSuccess(Passenger: Passenger) {
        this.draftState.getPassenger.loading = false
        this.draftState.Passenger = Passenger
        this.draftState.getPassenger.errorMessage = null
        this.draftState.getPassenger.technicalErrorMessage = null
    }

    /*
     Action will be handled if the "getPassenger" will fails
     */
    getPassengerDataFailure(
        errorMessage: string,
        technicalErrorMessage: technicalErrorMessageType
    ) {
        this.draftState.getPassenger.loading = false
        this.draftState.getPassenger.errorMessage = errorMessage
        this.draftState.getPassenger.technicalErrorMessage =
            technicalErrorMessage
    }

    /*
     Action to put a new profile informations
    */
    setPassengerData(Passenger: Passenger) {
        this.draftState.setPassenger.loading = true
        this.draftState.getPassenger.errorMessage = null
        this.draftState.getPassenger.technicalErrorMessage = null
        this.draftState.Passenger = Passenger
    }

    /*
     Action will be handled if the "setPassengerData" return success
    */
    setPassengerDataSuccess(Passenger: Passenger) {
        this.draftState.setPassenger.loading = false
        this.draftState.setPassenger.errorMessage = null
        this.draftState.setPassenger.technicalErrorMessage = null
        this.draftState.Passenger = Passenger
    }

    /*
     Action will be handled if the "setPassengerData" will fails
    */
    setPassengerDataFailure(
        errorMessage: string,
        technicalErrorMessage: technicalErrorMessageType
    ) {
        this.draftState.setPassenger.loading = false
        this.draftState.setPassenger.errorMessage = errorMessage
        this.draftState.setPassenger.technicalErrorMessage =
            technicalErrorMessage
    }
    /*
    Action to initialise the state 
    */
    reset() {
        this.draftState = initialState
    }
}

export const PassengerActions = createActionCreators(PassengerState)
export const PassengerReducerFunction = createReducerFunction(
    PassengerState,
    initialState
)

