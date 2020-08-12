import React from "react";
function Links({ handleClick, text, linkText, className }) {
  return (
    <div className={className}>
      <p className="links-text">{text}</p>
      <button className="links" onClick={handleClick}>
        {linkText}
      </button>
    </div>
  );
}

export default Links;
