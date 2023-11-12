/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const TripIcon = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`frame-29-5 ${className}`}
      fill="none"
      height="42"
      viewBox="0 0 42 42"
      width="42"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.63614 25.5302L13.7253 28.0747L16.2698 33.1639L18.8144 30.6193V26.8025L23.2674 22.3495L27.0842 33.8L30.9011 29.9832L27.7204 17.8965L32.8095 12.8074C33.8635 11.7534 33.8635 10.0445 32.8095 8.99051C31.7555 7.93651 30.0466 7.93651 28.9927 8.99051L23.9035 14.0796L11.8168 10.8989L8 14.7158L19.4505 18.5326L14.9976 22.9856H11.1807L8.63614 25.5302Z"
        stroke="#132D46"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
