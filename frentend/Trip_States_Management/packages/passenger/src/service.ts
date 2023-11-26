import Passenger, { PassengerDataType } from "./models/Passenger"
import Axios, { AxiosRequestConfig } from 'axios'
import { PagedResult } from "@aprilium/tripsm_common/lib/models/PagedResult"
import { urlsConfig } from "./index"
/*
API call for setting a new informations to profile
*/

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    // Other headers as needed
  };

  const axiosConfig: AxiosRequestConfig = {
    headers: headers,
    // Other configuration options if needed
  };

const LogRequestResponse = (response: any) => {
    //if (urlsConfigs.values?.DEBUG_MODE) {
        console.log('HTTP - response')
        console.log(response)
   // }
}
async function setPassenger(user:Passenger) : Promise<void> {
    console.log("Missing web service call")
}
/*
API call for getting the profile data by userId
*/
async function fetchPassengerData(id:number): Promise<Passenger|undefined>{
    const route = '/api/passenger'
    console.log("--------API-----")
    console.log(`${urlsConfig.values?.CORE_BASE_URL}${route}`)
    if (!urlsConfig.values) throw Error('No urls config found')
    const response = await Axios.get<PassengerDataType>(
        `${urlsConfig.values?.CORE_BASE_URL}${route}`, axiosConfig
    )
    
    
    LogRequestResponse(response)
    return response.data
}

async function fetchAllPassengers(): Promise<PagedResult<Passenger>|undefined>{
    const route = '/api/passenger'
    console.log("--------API-----")
    if (!urlsConfig.values) throw Error('No urls config found')
    const response = await Axios.get<PagedResult<Passenger>>(
        `${urlsConfig.values.CORE_BASE_URL}${route}`,axiosConfig
        //config
    )
    LogRequestResponse(response)
    return response.data
}

export {setPassenger,fetchPassengerData,fetchAllPassengers}