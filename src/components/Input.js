import React, { useState } from "react";

function Input({ placeholder, type, value, setValue, className, valid }) {
  const [inputActive, setInputActive] = useState(false);

  const handleFocus = () => {
    setInputActive(true);
  };

  const handleBlur = (e) => {
    setInputActive(false);
    setValue(e.currentTarget.value);
  };

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
    valid(value);
  };

  const labelNameClass = () => {
    if (inputActive || value) {
      if (value !== "" && valid(value)) {
        return "active label-red";
      }
      return "active";
    } else {
      return "inactive";
    }
  };

  const inputNameClass = () => {
    if (value === "") {
      return null;
    } else if (valid(value)) {
      return "color-red";
    } else {
      return null;
    }
  };

  return (
    <div>
      <label className={labelNameClass()}>{placeholder}</label>
      <div className={className}>
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={inputNameClass()}
        />
      </div>
    </div>
  );
}

export default Input;
