import React from "react";
import PropTypes from "prop-types";
import { useScrollTrigger } from "@material-ui/core";
import { useTheme, fade } from "@material-ui/core/styles";

const ScrollHandler = (props) => {
  const theme = useTheme();
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    // style: {
    //   backgroundColor: trigger
    //     ? fade(theme.palette.primary.main, 0.5)
    //     : fade(theme.palette.primary.main, 1),
    // },
  });
};

const ScrollToFade01 = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToFade01;
