import React from "react";
import PropTypes from "prop-types";
import {Chip} from "@material-ui/core";

export const Chipz = (props) => {
  const {
    label,
    variant
  } = props;


  return (
    <Chip label={label} variant={variant} />
  );

};

Chipz.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(["outlined", "default"]),

};

Chipz.defaultProps = {
  label: 'qwerty',
  variant: 'default',
};
