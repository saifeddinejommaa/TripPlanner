/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const PassengerIcon = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`frame-27-4 ${className}`}
      fill="none"
      height="36"
      viewBox="0 0 40 36"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M32 27.9999C32 25.6777 29.7738 23.7022 26.6667 22.9701M24 28C24 25.0545 20.4183 22.6667 16 22.6667C11.5817 22.6667 8 25.0545 8 28M24 18.6667C26.9455 18.6667 29.3333 16.2789 29.3333 13.3333C29.3333 10.3878 26.9455 8 24 8M16 18.6667C13.0545 18.6667 10.6667 16.2789 10.6667 13.3333C10.6667 10.3878 13.0545 8 16 8C18.9455 8 21.3333 10.3878 21.3333 13.3333C21.3333 16.2789 18.9455 18.6667 16 18.6667Z"
        stroke="#132D46"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
