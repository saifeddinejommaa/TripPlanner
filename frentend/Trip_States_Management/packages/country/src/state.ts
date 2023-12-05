
import {
    ImmerReducer,
    createActionCreators,
    createReducerFunction
} from 'immer-reducer'
import { technicalErrorMessageType } from '@aprilium/tripsm_common/lib/helper/utils'
import Country from './Country';

/*
   Store states after lanching actions
   getPassenger : used to save the loading status, and if we have an exception 
   setPassenger : used to save the loading status, and to store the new user profile
   Passenger : actual user profile
*/
export type State = {
    getCountries: {
        loading: boolean
        success: boolean
        errorMessage: string | null
        technicalErrorMessage: technicalErrorMessageType | null
    }
    getCountry: {
        loading: boolean
        success: boolean
        errorMessage: string | null
        technicalErrorMessage: technicalErrorMessageType | null
    }
    country: Country | null
    countries:Array<Country> | null;
}

export const initialState: State = {
    getCountries: {
        loading: false,
        success: false,
        errorMessage: null,
        technicalErrorMessage: null
    },

    getCountry:{
        loading: false,
        success: false,
        errorMessage: null,
        technicalErrorMessage: null
    },

    countries : null,
   
    country: null,
}

/*
The different actions that can be launched from the front side
*/
export class CountryState extends ImmerReducer<State> {

    getCountries() {
        this.draftState.getCountries.loading = true
    }
    getCountriesSuccess(countries: Array<Country>) {
        this.draftState.getCountries.loading = false
        this.draftState.Countries = countries
        this.draftState.getCountries.errorMessage = null
        this.draftState.getCountries.technicalErrorMessage = null
    }
    getCountriesFailure(
        errorMessage: string,
        technicalErrorMessage: technicalErrorMessageType
    ) {
        this.draftState.getCountries.loading = false
        this.draftState.getCountries.errorMessage = errorMessage
        this.draftState.getCountries.technicalErrorMessage =
            technicalErrorMessage
    }
    /*
    Action to get the user profile by user Id
    */
    getCountry(id:number) {
        this.draftState.getCountry.loading = true
    }
     /*
     Action will be handled if the "getPassenger" return success
     */
     getCountrySuccess(country: Country) {
        this.draftState.getCountry.loading = false
        this.draftState.country = country
        this.draftState.getCountry.errorMessage = null
        this.draftState.getCountry.technicalErrorMessage = null
    }

    /*
     Action will be handled if the "getPassenger" will fails
     */
     getCountryFailure(
        errorMessage: string,
        technicalErrorMessage: technicalErrorMessageType
    ) {
        this.draftState.getCountry.loading = false
        this.draftState.getCountry.errorMessage = errorMessage
        this.draftState.getCountry.technicalErrorMessage =
            technicalErrorMessage
    }


    reset() {
        this.draftState = initialState
    }
}

export const CountryActions = createActionCreators(CountryState)
export const PassengerReducerFunction = createReducerFunction(
    CountryState,
    initialState
)

