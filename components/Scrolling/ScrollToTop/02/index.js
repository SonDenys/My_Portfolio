import React from "react";
import PropTypes from "prop-types";
import { Zoom, useScrollTrigger, Fab } from "@material-ui/core";
import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@material-ui/icons";

const style = {
  position: `fixed`,
  bottom: `50px`,
  right: `100px`,
  zIndex: `99`,
};

const ScrollToTop02 = (props) => {
  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" style={style}>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
};

ScrollToTop02.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ScrollToTop02;
