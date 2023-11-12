import React from "react";
import { TextField } from "@mui/material"; 
import './style.css'
interface Props {
  label: string,
  defaultText:String;
}

export const CustomTextField = ({label,
  defaultText
  }: Props): JSX.Element => {
    return ( <div className="field-container"> <h5>{label}</h5><TextField  className="inputRounded"
    placeholder={label}
    variant="outlined"
    size="small"/></div>);
  }