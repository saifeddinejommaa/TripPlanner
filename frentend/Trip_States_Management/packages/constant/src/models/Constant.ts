import Country from "./Country";

export type ConstantDataType = {
    Countries:Country[];
  }

  class Constant{
    Countries:Country[];
    
   
     public constructor(props: ConstantDataType){
         
        this.Countries =  props.Countries;
        
    } 
}

export default Constant;