
import { call, put, takeLatest, select, race, take } from "redux-saga/effects"
import { ConstantActions } from "./state"
import Constant from "./models/Constant"
import { getConstants } from "./selectors"
import { loadConstants } from "./service"

function* getConstantsEffect(action: ReturnType<typeof ConstantActions.getConstants>){
    const constants: Constant = yield select(getConstants)
    try { 
        yield call(loadConstants)
        yield put(ConstantActions.getConstantsSuccess(constants))
    } catch (err) {
        // @ts-ignore
        yield put(ConstantActions.getConstantsFailure('app_name'))
    }

}

/*
the mapping generator
*/
function* ConstantsEffects() {
    yield takeLatest(ConstantActions.getConstants, getConstantsEffect)
}
export default ConstantsEffects;