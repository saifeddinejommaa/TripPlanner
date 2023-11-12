/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const AnalyticsIcon = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`frame-31-5 ${className}`}
      fill="none"
      height="42"
      viewBox="0 0 42 42"
      width="42"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.6 25.8L14.733 21.0001L18.3994 24.4286L26.4656 16.8858M20.9778 16.2H27.2V22.0184M11.2 33.8C9.43269 33.8 8 32.3673 8 30.6V11.4C8 9.63269 9.43269 8.2 11.2 8.2H30.4C32.1673 8.2 33.6 9.63269 33.6 11.4V30.6C33.6 32.3673 32.1673 33.8 30.4 33.8H11.2Z"
        stroke="#132D46"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
