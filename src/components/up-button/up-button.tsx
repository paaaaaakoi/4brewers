import React, { useState } from "react";
import "./up-button.scss";

const UpButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <button
      className="btn up-btn"
      onClick={scrollToTop}
      style={{ display: visible ? "flex" : "none" }}
    >
      <img src={require("../../images/icons/up.svg").default} alt="" />
    </button>
  );
};

export default UpButton;
