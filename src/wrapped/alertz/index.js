import React from "react";
import PropTypes from "prop-types";
import Alert from '@material-ui/lab/Alert';

export const Alertz = (props) => {
  const {
    content,
    severity,
    children
  } = props;


  return (
    <Alert severity={severity} icon={false}>
      {content} + {children}
    </Alert>
  );
};

Alertz.propTypes = {
  /**
   * Type of Button
   */
  //type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  /**
   * Semantic Color
   */
  semantic: PropTypes.oneOf(["info", "good", "bad", "warn", "disabled"]),
  /**
   * Button Size
   */
  content: PropTypes.string,
  /**
   * Optional click handler
   */
};

Alertz.defaultProps = {
  compact: false,
};
