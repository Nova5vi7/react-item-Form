import React from "react";
function Button({ children, className }) {
  return (
    <div className="btn-wrap">
      <button className={className} type="submit">
        {children}
      </button>
    </div>
  );
}

export default Button;
