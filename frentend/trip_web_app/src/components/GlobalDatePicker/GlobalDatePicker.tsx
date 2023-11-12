import React from "react";
import { TextField } from "@mui/material";
import './style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
interface Props {
  label: string,
  defaultText: String;
  selectedDate?: Date;
  placeholder: string;
  onChange: (date: Date) => void;
}

export const GlobalDatePicker = ({ label,
  defaultText, selectedDate, onChange,
  placeholder
}: Props): JSX.Element => {
  return (<div className="field-container"> <h5>{label}</h5><DatePicker placeholderText={placeholder} selected={selectedDate} onChange={(date: Date) => { onChange(date); }} className="inputRounded" /></div>);
}