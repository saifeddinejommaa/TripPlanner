/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const SupportIcon = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`frame-32-5 ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M19.9987 26V26.0527M17 16.3067C17 14.6185 18.3431 13.25 20 13.25C21.6569 13.25 23 14.6185 23 16.3067C23 17.9948 21.6569 19.3633 20 19.3633C20 19.3633 19.9987 20.2757 19.9987 21.4011M32 20C32 26.6274 26.6274 32 20 32C13.3726 32 8 26.6274 8 20C8 13.3726 13.3726 8 20 8C26.6274 8 32 13.3726 32 20Z"
        stroke="#132D46"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
