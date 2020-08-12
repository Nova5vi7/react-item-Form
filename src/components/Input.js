import React, { useState } from "react";

function Input({
  placeholder,
  type,
  value,
  setValue,
  className,
  error,
  setError,
  valid,
}) {
  const [inputActive, setInputActive] = useState(false);

  const handleFocus = () => {
    setInputActive(true);
  };

  const handleBlur = (e) => {
    setInputActive(false);
    setValue(e.currentTarget.value);
    if (e.currentTarget.value === "") {
      setError(false);
    }
  };

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
    valid(value, setError);
    if (e.currentTarget.value === "") {
      setError(false);
    }
  };

  return (
    <div>
      <label
        className={
          error ? "label-red" : inputActive || value ? "active" : "inactive"
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
          className={value === "" ? null : error ? "color-red" : null}
        />
      </div>
    </div>
  );
}

export default Input;
