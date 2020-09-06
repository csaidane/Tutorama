import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import "./ScrollToTop.scss";

export default function ScrollToTop() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 55) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <Fab
      onClick={scrollToTop}
      color="secondary"
      size="large"
      aria-label="scroll back to top"
      className="scroll-to-top"
    >
      <KeyboardArrowUpIcon className="icon" />
    </Fab>
  );
}
