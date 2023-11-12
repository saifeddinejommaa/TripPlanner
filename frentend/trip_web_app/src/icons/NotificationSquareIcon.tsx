/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const NotificationSquareIcon = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`notification-square-02-6 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.4374 3H5.24997C4.00735 3 3 4.00734 3 5.24996V14.2502C3 15.4928 4.00736 16.5002 5.24999 16.5002L10.5565 16.5001L12.9376 21L14.8126 16.5002L18.7501 16.5001C19.9927 16.5001 21 15.4928 21 14.2502V12.0004M21 5.81274C21 7.36601 19.7408 8.62519 18.1875 8.62519C16.6343 8.62519 15.3751 7.36601 15.3751 5.81274C15.3751 4.25946 16.6343 3.00028 18.1875 3.00028C19.7408 3.00028 21 4.25946 21 5.81274Z"
        stroke="#132D46"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
