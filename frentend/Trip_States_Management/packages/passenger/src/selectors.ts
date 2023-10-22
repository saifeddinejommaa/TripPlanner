import { States } from './index'
import Passenger from './models/Passenger'
import { State } from './state'

/*
Different methods that can be used to get the different elements 
from the user profile
*/
export function getPassengerState(states: Partial<States>): State | undefined {
    return states?.passenger
}
export function getPassengerData(
    states: Partial<States>
): Passenger | null | undefined {
    return states?.passenger?.Passenger
}

