import Country from "./Country"
import { call, put, takeLatest, select, race, take } from "redux-saga/effects"
import {buildTechnicalErrorMessage} from "@aprilium/tripsm_common/lib/helper/utils"
import { getCountries, getCountry } from "./selectors"
import { CountryActions } from "./state"
import { fetchAllCountries, fetchCountryById } from "./service"

function* getCountryEffect(action: ReturnType<typeof CountryActions.getCountry>){
    const country: Country = yield select(getCountry)
    try { 
        yield call(fetchCountryById,action.payload)
        yield put(CountryActions.getCountrySuccess(country))
    } catch (err) {
        // @ts-ignore
        yield put(CountryActions.setPassengerDataFailure('app_name'))
    }

}
/*
When we call getpassenger action, fetchProfileData will be called
param0 : action
*/
function* getCountriesEffect(){
    try {
        console.log("on est dans l'effect")
       // const passenger:passenger = yield call(fetchPassengerData, action.payload)
       const countries:Array<Country> = yield call(fetchAllCountries)
        if(!countries) throw Error 
        yield put(CountryActions.getCountriesSuccess(countries))
    } catch (err) {
        yield put(CountryActions.getCountriesFailure('app_name',buildTechnicalErrorMessage(err)))
    }
}

/*
the mapping generator
*/
function* PassengerEffects() {
    yield takeLatest(CountryActions.getCountries.type, getCountriesEffect)
    yield takeLatest(CountryActions.getCountry.type,getCountryEffect)
}
export default PassengerEffects;