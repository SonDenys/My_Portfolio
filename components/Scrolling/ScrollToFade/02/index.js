//props.threshold     : threshold for scroll event to hide component.

import React from "react";
import { Fade, useScrollTrigger } from "@material-ui/core";

const ScrollToFade02 = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: props.threshold,
    target: props.window ? window() : undefined,
  });

  return (
    <Fade appear={true} direction="down" in={trigger}>
      {props.children}
    </Fade>
  );
};

export default ScrollToFade02;
