
import Axios, { AxiosRequestConfig } from 'axios'
import { PagedResult } from "@aprilium/tripsm_common/lib/models/PagedResult"
import { urlsConfig } from "./index"
import Country from "./Country";
/*
API call for setting a new informations to profile
*/
const LogRequestResponse = (response: any) => {
    //if (urlsConfigs.values?.DEBUG_MODE) {
        console.log('HTTP - response')
        console.log(response)
   // }
}

/*
API call for getting the profile data by userId
*/
async function fetchCountryById(countryId: number): Promise<Country|undefined>{
    const route = '/api/Passenger/passengerById'
    if (!urlsConfig.values) throw Error('No urls config found')
    try{
    const response = await Axios.get<Country>(
        `${urlsConfig.values.CORE_BASE_URL}${route}`,{headers:{
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials':'true',
            "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content-Type, Accept'
        }},
        //config
    )
    LogRequestResponse(response)
    return response.data
    }
    catch(exception){
        console.log("Exception: ",exception)
    }
}

async function fetchAllCountries(): Promise<Country[]|undefined>{
    const route = '/api/Passenger'
    if (!urlsConfig.values) throw Error('No urls config found')
    const encodedUrl = encodeURI(`${urlsConfig.values.CORE_BASE_URL}${route}`);

console.log("query: ", encodedUrl)
    try{
    const response = await Axios.get<Country[]|undefined>(
        encodedUrl,{headers:{
            'Content-Type': 'application/json;application/x-www-form-urlencoded',
        }},
        //config
    )
    LogRequestResponse(response)
    return response.data
    }
    catch(exception){
      console.log("Exception: ",exception)
    }
   
}

export {fetchAllCountries,fetchCountryById}