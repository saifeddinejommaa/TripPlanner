/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";
import { BellRingingIcon } from "../../icons/BellRingingRingingIcon";

interface Props {
  className: any;
}

export const BellRinging = ({ className }: Props): JSX.Element => {
  return (
    <div className={`bell-ringing ${className}`}>
      <BellRingingIcon className="bell-ringing-03-6" />
    </div>
  );
};
