/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const UserProfileIcon = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`user-profile-03-5 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M14.8182 7.00966C14.8182 8.52528 13.5293 9.87491 12 9.87491C10.4707 9.87491 9.18182 8.52528 9.18182 7.00966C9.18182 5.44619 10.516 4 12 4C13.484 4 14.8182 5.44619 14.8182 7.00966ZM20 16.7779C20 17.4743 19.6212 18.235 18.3901 18.8767C17.1259 19.5356 15.0587 20.0002 12 20.0002C8.94127 20.0002 6.87409 19.5356 5.60994 18.8767C4.37885 18.235 4 17.4743 4 16.7779C4 16.2284 4.51302 15.4237 6.06076 14.6976C7.52907 14.0088 9.62782 13.5556 12 13.5556C14.3722 13.5556 16.4709 14.0088 17.9392 14.6976C19.487 15.4237 20 16.2284 20 16.7779Z"
        stroke="#132D46"
        strokeWidth="2"
      />
    </svg>
  );
};
