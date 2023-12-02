import { PassengerActions } from "./state";
import { call, put, takeLatest, select, race, take } from "redux-saga/effects"
import passenger from "./models/Passenger";
import {buildTechnicalErrorMessage} from "@aprilium/tripsm_common/lib/helper/utils"
import { getPassengerData } from "./selectors";
import { setPassenger,fetchPassengerData, fetchAllPassengers } from "./service";
import { PagedResult } from "@aprilium/tripsm_common/lib/models/PagedResult";
import Passenger from "./models/Passenger";

/*
These methods are for mapping the front actions and the API calls (from the service)
*/

/*
When we call getpassengerData action, setpassenger will be called
*/
function* setPassengerEffect(){
    const profile: passenger = yield select(getPassengerData)
    try { 
        console.log("on est dans l'effect")
        yield call(setPassenger, profile)
        yield put(PassengerActions.setPassengerDataSuccess(profile))
    } catch (err) {
        // @ts-ignore
        yield put(PassengerActions.setPassengerDataFailure('app_name'))
    }

}
/*
When we call getpassenger action, fetchProfileData will be called
param0 : action
*/
function* getPassengerEffect(action: ReturnType<typeof PassengerActions.getPassenger>){
    try {
        console.log("on est dans l'effect")
       // const passenger:passenger = yield call(fetchPassengerData, action.payload)
       const passenger:passenger = yield call(fetchPassengerData)
        if(!passenger) throw Error 
        yield put(PassengerActions.getPassengerDataSuccess(passenger))
    } catch (err) {
        yield put(PassengerActions.getPassengerDataFailure('app_name',buildTechnicalErrorMessage(err)))
    }
}

function* getAllPassengersEffect(action: ReturnType<typeof PassengerActions.getAllPassengers>){
    try {
        console.log("on est dans l'effect")
        if (!action.payload) {
            throw Error('Missing Pagin parameters')
        }
        const passengers:PagedResult<Passenger>|undefined = yield call(fetchAllPassengers,action.payload)
        if(!passengers) throw Error 
        yield put(PassengerActions.getAllPassengersDataSuccess(passengers))
    } catch (err) {
        yield put(PassengerActions.getAllPassengersDataFailure('app_name',buildTechnicalErrorMessage(err)))
    }
}

/*
the mapping generator
*/
function* PassengerEffects() {
    yield takeLatest(PassengerActions.setPassengerData.type, setPassengerEffect)
    yield takeLatest(PassengerActions.getPassenger.type,getPassengerEffect)
    yield takeLatest(PassengerActions.getAllPassengers.type,getAllPassengersEffect)
}
export default PassengerEffects;