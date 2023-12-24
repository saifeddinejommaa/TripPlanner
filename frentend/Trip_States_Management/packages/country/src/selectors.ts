
import Country from './Country'
import { States } from './index'
import { State } from './state'

/*
Different methods that can be used to get the different elements 
from the user profile
*/
export function getCountriesState(states: Partial<States>): State | undefined {
    return states?.country
}
export function getCountry(
    states: Partial<States>
): Country | null | undefined {
    return states?.country?.country
}

export function getCountries(states: Partial<States>):Array<Country> | null | undefined{
     return states?.country?.countries
}