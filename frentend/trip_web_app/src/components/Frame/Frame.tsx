/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  excludeClassName: any;
  exclude: string;
  onClick: () => void;
}

export const Frame = ({ className, excludeClassName, exclude = "/img/exclude-8.svg", onClick }: Props): JSX.Element => {
  return (
    <div className={`frame ${className}`} onClick={onClick}>
      <img className={`exclude ${excludeClassName}`} alt="Exclude" src={exclude} />
    </div>
  );
};

Frame.propTypes = {
  exclude: PropTypes.string,
};
