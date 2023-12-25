import { States } from './index'
import { State } from './state'
import Constant from './models/Constant'
import Country from './models/Country';

/*
Different methods that can be used to get the different elements 
from the user profile
*/
export function getConstantsState(states: Partial<States>): State | undefined {
    return states?.constants;
}
export function getConstants(
    states: Partial<States>
): Constant | null | undefined {
    return states?.constants?.constant;
}

export function getConstantCountries(states: Partial<States>): Country[] | null | undefined {
    return states?.constants?.constant?.Countries;
}