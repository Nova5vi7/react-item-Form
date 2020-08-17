import React, { useState } from "react";

function Input({
  placeholder,
  type,
  value,
  setValue,
  className,

  valid,
}) {
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

  return (
    <div>
      <label
        className={
          valid(value)
            ? "label-red"
            : inputActive || value
            ? "active"
            : "inactive"
        }
      >
        {placeholder}
      </label>
      <div className={className}>
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={value === "" ? null : valid(value) ? "color-red" : null}
        />
      </div>
    </div>
  );
}

export default Input;
