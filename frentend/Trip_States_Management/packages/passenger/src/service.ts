import Passenger, { PassengerDataType } from "./models/Passenger"
import Axios, { AxiosRequestConfig } from 'axios'
import { PagedResult } from "@aprilium/tripsm_common/lib/models/PagedResult"
import { urlsConfig } from "./index"
import PassengersParameter from "./models/PassengersParameters";
/*
API call for setting a new informations to profile
*/
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
async function fetchPassengerData(): Promise<Passenger|undefined>{
    const route = '/api/Passenger/passengerById'
    if (!urlsConfig.values) throw Error('No urls config found')
    try{
    const response = await Axios.get<Passenger>(
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

async function fetchAllPassengers(passengerParameters:PassengersParameter): Promise<PagedResult<Passenger>|undefined>{
    const route = '/api/Passenger'
    const params ={
       parameters: passengerParameters
    }
    console.log("paramters: ",params)
    if (!urlsConfig.values) throw Error('No urls config found')
    const queryString = `?parameters=${JSON.stringify(passengerParameters)}`;
    const encodedUrl = encodeURI(`${urlsConfig.values.CORE_BASE_URL}${route}${queryString}`);

console.log("query: ", encodedUrl)
    try{
    const response = await Axios.get<PagedResult<Passenger>>(
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

export {setPassenger,fetchPassengerData,fetchAllPassengers}