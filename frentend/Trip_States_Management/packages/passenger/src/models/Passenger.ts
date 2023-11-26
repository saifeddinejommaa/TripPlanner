export type PassengerDataType = {
    Id:number;
     FirstName:string;
     LastName:string;
     MiddleName:string;
     LocalFirstName:string;
     LocalMiddleName:string;
     LocalLastName:string;
     BirthPlace:string;
     BirthCountry:string;
     BirthDay:Date;
     Nationality: string;
     Address1: string;
     Address2: string;
     ZipCode: string;
     City:string;
     CountryId:number;
     PhoneNumber1:number;
     PhoneNumber2:number;
  }

  class Passenger{
    public Id:number;
    public FirstName:string;
    LastName:string;
     MiddleName:string | undefined;
     LocalFirstName:string| undefined;
     LocalMiddleName:string| undefined;
     LocalLastName:string| undefined;
     BirthPlace:string
     BirthCountry:string;
     BirthDay:Date;
     Nationality: string;
     Address1: string;
     Address2: string;
     ZipCode: string;
     City:string;
     CountryId:number;
     PhoneNumber1:number| undefined;
     PhoneNumber2:number| undefined;
    
   
     public constructor(props: PassengerDataType){
         
        this.Id =  props.Id
        this.FirstName = props.FirstName
        this.LastName = props.LastName
        this.MiddleName = props.MiddleName 
        this.LocalFirstName=props.LocalFirstName;
        this.LocalMiddleName=props.LocalMiddleName;
        this.LocalLastName=props.LocalLastName;   
        this.BirthPlace = props.BirthPlace
        this.BirthCountry = props.BirthCountry
        this.BirthDay = props.BirthDay
        this.Nationality= props.Nationality
        this.Address1= props.Address1
        this.Address2= props.Address2
        this.ZipCode= props.ZipCode
        this.City= props.City
        this.CountryId= props.CountryId
        this.PhoneNumber1 = props.PhoneNumber1
        this.PhoneNumber2 = props.PhoneNumber2
    } 
}

export default Passenger;