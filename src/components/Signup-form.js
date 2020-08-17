import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import isValidEmail from "../verifiers/is-valid-email";
import isValidPassword from "../verifiers/is-valid-password";
import isValidName from "../verifiers/is-valid-name";
import isValidVerificationPass from "../verifiers/is-valid-vafification-password";

function SignUpForm() {
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [verificationPasswordValue, setVerificationPassValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    isValidEmail(emailValue);
    isValidPassword(passwordValue);
    isValidName(nameValue);
    isValidVerificationPass(verificationPasswordValue);
  };

  return (
    <form className="forms-log-in" onSubmit={handleSubmit}>
      <Input
        type="name"
        placeholder="Name"
        value={nameValue}
        setValue={setNameValue}
        className="name"
        valid={isValidName}
      />

      <Input
        type="email"
        placeholder="E-mail"
        value={emailValue}
        setValue={setEmailValue}
        className="email"
        valid={isValidEmail}
      />

      <Input
        type="password"
        placeholder="Password"
        value={passwordValue}
        setValue={setPasswordValue}
        className="password-two"
        valid={isValidPassword}
      />

      <Input
        type="password"
        placeholder="Password"
        value={verificationPasswordValue}
        setValue={setVerificationPassValue}
        className="verification-pass"
        valid={isValidVerificationPass}
      />

      <Button className="btn-sing-up">Sign Up</Button>
    </form>
  );
}

export default SignUpForm;
