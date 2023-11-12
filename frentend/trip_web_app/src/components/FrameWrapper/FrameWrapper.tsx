/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  exclude: string;
}

export const FrameWrapper = ({ className, exclude = "/img/exclude-7.svg" }: Props): JSX.Element => {
  return (
    <div className={`frame-wrapper ${className}`}>
      <img className="img" alt="Exclude" src={exclude} />
    </div>
  );
};

FrameWrapper.propTypes = {
  exclude: PropTypes.string,
};
