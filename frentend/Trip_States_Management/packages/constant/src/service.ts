
import Axios from 'axios'
import { urlsConfig } from "./index"
import Country from "./models/Country";
import Constant,{ConstantDataType} from './models/Constant';

const LogRequestResponse = (response: any) => {
    //if (urlsConfigs.values?.DEBUG_MODE) {
        console.log('HTTP - response')
        console.log(response)
   // }
}

async function loadConstants(): Promise<Constant|undefined>{
    const route = 'https://localhost:47616/api/Country/AllCountries'
    if (!urlsConfig.values) throw Error('No urls config found')
    try{
    const response = await Axios.get<Country[]>(
        `${urlsConfig.values.CORE_BASE_URL}${route}`,{headers:{
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials':'true',
            "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content-Type, Accept'
        }},
        //config
    )
    LogRequestResponse(response)
    return new Constant({Countries: response.data})
    }
    catch(exception){
        console.log("Exception: ",exception)
    }
}


export {loadConstants}