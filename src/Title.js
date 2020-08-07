import React from "react";
import "./App-two.scss";

function Title({ children }) {
  return (
    <div>
      <h1 className="title">{children}</h1>
    </div>
  );
}

export default Title;
