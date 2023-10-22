import Passenger, { PassengerDataType } from "./models/Passenger"
import Axios from 'axios'
import { urlsConfig } from './index'
/*
API call for setting a new informations to profile
*/
const LogRequestResponse = (response: any) => {
    if (urlsConfig.values?.DEBUG_MODE) {
        console.log('HTTP - response')
        console.log(response)
    }
}
async function setPassenger(user:Passenger) : Promise<void> {
    console.log("Missing web service call")
}
/*
API call for getting the profile data by userId
*/
async function fetchProfileData(id:number): Promise<Passenger|undefined>{

    if (!urlsConfig.values) throw Error('No urls config found')
   // const config = { headers: { Authorization: `Bearer ${token}` } }
    const route = '/api/passenger'
    const response = await Axios.get<PassengerDataType>(
        `${urlsConfig.values.CORE_BASE_URL}${route}`,
        //config
    )
    LogRequestResponse(response)
    return response.data
}

export {setPassenger,fetchProfileData}