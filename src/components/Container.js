import React from "react";
import Title from "./Title";

function Container({ title, children }) {
  return (
    <div className="form-container">
      <Title>{title}</Title>

      {children}
    </div>
  );
}

export default Container;
