import React from "react";
import "./App-two.scss";

function Input({ placeholder, type, value, change, setValue }) {
  const handleFocus = () => {
    setValue(1);
  };

  const handleBlur = (e) => {
    setValue(e.currentTarget.value);
  };

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div>
      <label className={value === "" ? "inactive" : "active"}>
        {placeholder}
      </label>
      <input
        type={type}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default Input;
