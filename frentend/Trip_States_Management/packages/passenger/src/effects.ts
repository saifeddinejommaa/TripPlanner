import { PassengerActions } from "./state";
import { call, put, takeLatest, select, race, take } from "redux-saga/effects"
import passenger from "./models/Passenger";
import {buildTechnicalErrorMessage} from "@aprilium/tripsm_common/lib/utils"
import { getPassengerData } from "./selectors";
import { setPassenger,fetchProfileData } from "./service";

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
        const passenger:passenger = yield call(fetchProfileData, action.payload)
        if(!passenger) throw Error 
        yield put(PassengerActions.getPassengerDataSuccess(passenger))
    } catch (err) {
        yield put(PassengerActions.getPassengerDataFailure('app_name',buildTechnicalErrorMessage(err)))
    }
}

/*
the mapping generator
*/
function* PassengerEffects() {
    yield takeLatest(PassengerActions.setPassengerData.type, setPassengerEffect)
    yield takeLatest(PassengerActions.setPassengerData.type,getPassengerEffect)
}
export default PassengerEffects;