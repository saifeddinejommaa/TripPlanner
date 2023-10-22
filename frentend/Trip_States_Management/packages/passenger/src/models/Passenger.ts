export type PassengerDataType = {
    PassengerId:number;
     FirstName:string;
     LastName:string;
     MiddleName:string;
     BirthPlace:string;
     BirthCountry:string;
     BirthDay:Date;
     Nationality: string;
     Address1: string;
     Address2: string;
     ZipCode: string;
     City:string;
     CountryId:number;
  }

  class Passenger{
    public PassengerId:number;
    public FirstName:string | undefined;
    LastName:string | undefined;
     MiddleName:string | undefined;
     BirthPlace:string | undefined;
     BirthCountry:string | undefined;
     BirthDay:Date | undefined;
     Nationality: string | undefined;
     Address1: string | undefined;
     Address2: string | undefined;
     ZipCode: string | undefined;
     City:string | undefined;
     CountryId:number | undefined;
    
   
     public constructor(props: PassengerDataType){
         
        this.PassengerId =  props.PassengerId
        this.FirstName = props.FirstName
        this.LastName = props.LastName
        this.MiddleName = props.MiddleName    
        this.BirthPlace = props.BirthPlace
        this.BirthCountry = props.BirthCountry
        this.BirthDay = props.BirthDay
        this.Nationality= props.Nationality
        this.Address1= props.Address1
        this.Address2= props.Address2
        this.ZipCode= props.ZipCode
        this.City= props.City
        this.CountryId= props.CountryId
    } 
}

export default Passenger;