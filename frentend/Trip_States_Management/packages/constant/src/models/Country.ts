export type CountryDataType = {
    Id:number;
    CountryIso:string;
    CountryName:string;
    CountryIso3:string;
    CountryNumCode:string;
    CountryPhoneCode:string;
  }

  class Country{
    Id:number;
    CountryIso:string;
    CountryName:string;
    CountryIso3:string;
    CountryNumCode:string;
    CountryPhoneCode:string;
    
   
     public constructor(props: CountryDataType){
         
        this.Id =  props.Id
        this.CountryIso = props.CountryIso
        this.CountryName = props.CountryName
        this.CountryIso3 = props.CountryIso3 
        this.CountryNumCode=props.CountryNumCode;
        this.CountryPhoneCode=props.CountryPhoneCode;
        
    } 
}

export default Country;