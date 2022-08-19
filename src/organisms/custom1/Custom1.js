import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button} from "@material-ui/core";

// import { Chipz } from "../wrapped/chipz/chipz";
import { Chipz } from "../../molecules/chipz/chipz";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { makeStyles } from "@material-ui/core/styles";
import {OpsAction1Default, OpsAction2Default} from "@baysidepoc/tokens";

export const Custom1 = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const customStyle = useStyles();
  const customStyle2 = useStyles2();

  //console.log("NPM COLORS -> ",Colors);
  console.log("NPM ActionMain -> ",OpsAction1Default);
 

  const {
    onClick,
    buttonType,
    classes,
    id,
    isDisabled,
    size,
    buttonContent,
    isErrorMode,
    dataAttributes,
    children,
    className,
    //custom props
    type,
    compact,
    semantic
  } = props;

  let variant;
  let addStyle;

  switch (type) {
    case "primary":
      variant = "contained";
      //addStyle = { color: "white" };
      break;
    case "secondary":
      variant = "outlined";
      break;
    case "tertiary":
      variant = "";
    //addStyle = { color: "white" };
  }
  //Semantic:  info, good, bad, warn, disabled



  //Compact: bool

  let buttonSize;

  if (compact) {
    buttonSize = "small";
  } else {
    buttonSize = "medium";
  }

  //Theme: clear, dark, accessible

  return (
    <div>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
        <Chipz
        severity="error"
        content="qwerty"
        />
        <Button variant="outlined">
        Hello Friends
      </Button>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography >Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography >Disabled Accordion</Typography>
      </AccordionSummary>
    </Accordion>
    
  </div>
  );
};

const useStyles2 = makeStyles(({ palette, ...theme }) => console.log(palette));

// Custom Styles for this component
const useStyles = makeStyles(({ palette, ...theme }) => ({
  buttonStyle: {
    //color:'#FF0000',
    border: `1px solid ${OpsAction2Default}`,
    //boxShadow: theme.shadows[8],
    color: OpsAction1Default,
    "&:hover": {
      width: "var(--sidenav-width)",
      "& .sidenavHoverShow": {
        display: "block",
      },
      "& .compactNavItem": {
        width: "100%",
        maxWidth: "100%",
        "& .nav-bullet": {
          display: "block",
        },
        "& .nav-bullet-text": {
          display: "none",
        },
      },
    },
  },
  iconStyle: {
    color: "cyan",
  },
}));

Custom1.propTypes = {
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
  compact: PropTypes.bool,
  /**
   * Optional click handler
   */
};

Custom1.defaultProps = {
  compact: false,
};
