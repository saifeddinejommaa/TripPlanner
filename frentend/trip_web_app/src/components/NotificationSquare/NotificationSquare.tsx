/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";
import { NotificationSquareIcon } from "../../icons/NotificationSquareIcon";

interface Props {
  className: any;
}

export const NotificationSquare = ({ className }: Props): JSX.Element => {
  return (
    <div className={`notification-square ${className}`}>
      <NotificationSquareIcon className="notification-square-02-6" />
    </div>
  );
};
