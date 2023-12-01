import React from "react";
import { TextField } from "@mui/material"; 
import './style.css'
interface Props {
  label: string,
  defaultText:String;
  onChange: (text:string) => void;
}

export const CustomTextField = ({label,
  defaultText, onChange
  }: Props): JSX.Element => {
    return ( <div className="field-container"> <h5>{label}</h5><TextField onChange={(e) => onChange(e.target.value)} className="inputRounded"
    placeholder={label}
    variant="outlined"
    size="small"/></div>);
  }