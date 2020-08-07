import React from "react";
import "./App-two.scss";

function Button({ children }) {
  return (
    <div className="btn-wrap">
      <button className="btn">{children}</button>
    </div>
  );
}

export default Button;
