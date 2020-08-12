import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import isValidEmail from "../verifiers/is-valid-email";

function ForgotPassForm() {
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    isValidEmail(emailValue, setEmailError);
  };

  return (
    <form className="forms-forgot-pass" onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="E-mail"
        value={emailValue}
        setValue={setEmailValue}
        className="email-two"
        error={emailError}
        setError={setEmailError}
        valid={isValidEmail}
      />

      <Button className="btn-reset">Reset</Button>
    </form>
  );
}

export default ForgotPassForm;
