/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const GroupsIcon = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`frame-30-5 ${className}`}
      fill="none"
      height="36"
      viewBox="0 0 40 36"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M26.6667 28C26.6667 25.7909 23.6819 24 20 24C16.3181 24 13.3333 25.7909 13.3333 28M32 24.0005C32 22.3602 30.3545 20.9506 28 20.3333M8 24.0005C8 22.3602 9.64546 20.9506 12 20.3333M28 14.9815C28.8183 14.249 29.3333 13.1847 29.3333 12C29.3333 9.79086 27.5425 8 25.3333 8C24.3089 8 23.3743 8.38514 22.6667 9.01852M12 14.9815C11.1817 14.249 10.6667 13.1847 10.6667 12C10.6667 9.79086 12.4575 8 14.6667 8C15.6911 8 16.6257 8.38514 17.3333 9.01852M20 20C17.7909 20 16 18.2091 16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20Z"
        stroke="#132D46"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
