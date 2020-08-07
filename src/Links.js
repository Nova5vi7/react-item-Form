import React from "react";
import "./App-two.scss";

function Links({ handle, text, children }) {
  return (
    <div className="links-wrap">
      <p className="links-text">{text}</p>
      <a
        href="#link"
        id="link"
        className="links"
        role="button"
        onClick={handle}
      >
        {children}
      </a>
    </div>
  );
}

export default Links;
