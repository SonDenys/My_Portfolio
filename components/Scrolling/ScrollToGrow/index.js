import React from "react";
import { Grow, useScrollTrigger } from "@material-ui/core";

export default function ScrollToGrow01(props) {
  const { threshold, ...other } = {
    threshold: 100,
    ...props,
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: props.window ? window() : undefined,
  });

  return (
    <Grow appear={true} direction="down" in={trigger} {...other}>
      {props.children}
    </Grow>
  );
}
